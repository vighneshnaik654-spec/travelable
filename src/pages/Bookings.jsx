import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import { useApp } from "../AppContext";
export default function Bookings() {
  const { user } = useApp();
  const [list, setList] = useState(null), [err, setErr] = useState("");
  const load = () => api("/bookings").then(setList).catch((e) => setErr(e.message));
  useEffect(() => { if (user) load(); }, [user]);
  if (!user) return <p className="p-8">Please <Link className="underline" to="/login">log in</Link> to see bookings.</p>;
  const cancel = (id) => api("/bookings/" + id, { method: "DELETE" }).then(load);
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-3">
      <h1 className="text-3xl font-bold">My bookings</h1>
      {err && <p role="alert">{err}</p>}
      {list?.length === 0 && <p>No bookings yet. Book a hotel, vehicle or guide from its details page.</p>}
      {list?.map((b) => (
        <article key={b.id} className="border rounded-xl p-4">
          <h2 className="font-semibold">{b.name} <span className="text-sm font-normal">({b.kind})</span></h2>
          <p>ID {b.id} · {b.city} · {b.from}{b.to && ` → ${b.to}`} · ₹{b.total} · Status: {b.status}</p>
          {b.status !== "Cancelled" && <button onClick={() => cancel(b.id)} className="mt-2 rounded-lg border px-4 py-2">Cancel booking</button>}
        </article>
      ))}
    </div>
  );
}
