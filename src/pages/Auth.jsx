import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
export default function Auth({ mode }) {
  const reg = mode === "register", { authenticate } = useApp(), nav = useNavigate();
  const [f, setF] = useState({ name: "", email: "", password: "" }), [err, setErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => { e.preventDefault(); try { await authenticate(reg ? "/auth/register" : "/auth/login", f); nav("/"); } catch (er) { setErr(er.message); } };
  const inp = "mt-1 w-full border rounded-lg p-3";
  return (
    <form onSubmit={submit} className="max-w-sm mx-auto p-4 space-y-3">
      <h1 className="text-2xl font-bold">{reg ? "Create account" : "Log in"}</h1>
      {reg && <label className="block">Name<input required className={inp} value={f.name} onChange={set("name")} /></label>}
      <label className="block">Email<input required type="email" className={inp} value={f.email} onChange={set("email")} /></label>
      <label className="block">Password<input required type="password" minLength="6" className={inp} value={f.password} onChange={set("password")} /></label>
      {err && <p role="alert" className="text-red-800">{err}</p>}
      <button className="w-full rounded-lg bg-teal-700 text-white py-3 font-medium">{reg ? "Register" : "Log in"}</button>
      <p className="text-sm">{reg ? <>Have an account? <Link className="underline" to="/login">Log in</Link></> : <>New here? <Link className="underline" to="/register">Register</Link></>}</p>
    </form>
  );
}
