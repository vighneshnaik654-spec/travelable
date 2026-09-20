import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api, useFetch } from "../api";
import { useApp } from "../AppContext";
const KIND = { hotel: "hotels", vehicle: "vehicles", guide: "guides" };
export default function Booking() {
  const { kind, id } = useParams(), nav = useNavigate(), { user } = useApp();
  const { data: x } = useFetch(`/${KIND[kind]}/${id}`);
  const [f, setF] = useState({ from: "", to: "", guests: 1, guestName: user?.name || "", notes: "" });
  const [err, setErr] = useState("");
  if (!user) return <p className="p-8">Please <Link className="underline" to="/login">log in</Link> to book.</p>;
  if (!x) return <p role="status" className="p-8">Loading…</p>;
  const days = f.from && f.to ? Math.max(1, Math.round((new Date(f.to) - new Date(f.from)) / 864e5)) : 1;
  const sub = x.price * days, tax = kind === "hotel" ? Math.round(sub * 0.12) : 0, total = sub + tax;
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    try { await api("/bookings", { method: "POST", body: { kind, itemId: id, name: x.name, city: x.city, ...f, total } }); nav("/bookings"); } catch (er) { setErr(er.message); }
  };
  const inp = "mt-1 w-full border rounded-lg p-3";
  return (
    <form onSubmit={submit} className="max-w-xl mx-auto p-4 space-y-3">
      <h1 className="text-2xl font-bold">Book: {x.name}</h1>
      <p className="text-sm bg-yellow-50 p-2 rounded">Prototype: this creates a mock booking only. No payment is taken and nothing is reserved.</p>
      <label className="block">Start date<input required type="date" className={inp} value={f.from} onChange={set("from")} /></label>
      <label className="block">End date<input type="date" className={inp} min={f.from} value={f.to} onChange={set("to")} /></label>
      <label className="block">{kind === "hotel" ? "Guests" : "Passengers"}<input type="number" min="1" className={inp} value={f.guests} onChange={set("guests")} /></label>
      <label className="block">Your name<input required className={inp} value={f.guestName} onChange={set("guestName")} /></label>
      <label className="block">Accessibility requirements<textarea className={inp} value={f.notes} onChange={set("notes")} /></label>
      <p>Estimate: ₹{x.price} × {days} = ₹{sub}{tax ? ` + ₹${tax} tax` : ""} → <b>₹{total}</b> (demo)</p>
      {err && <p role="alert" className="text-red-800">{err}</p>}
      <button className="w-full rounded-lg bg-teal-700 text-white py-3 font-medium">Confirm mock booking</button>
    </form>
  );
}
