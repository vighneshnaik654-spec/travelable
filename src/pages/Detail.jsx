import { useParams, useNavigate, Link } from "react-router-dom";
import { useFetch } from "../api";
import { useApp } from "../AppContext";
import { Photo } from "../components/Card";
import MapView from "../components/MapView";
import { FEATURES, accessibilityScore, matchPercent } from "../utils/accessibilityUtils";
export default function Detail({ kind, endpoint }) {
  const { id } = useParams(), nav = useNavigate();
  const { data: x, loading, error } = useFetch(`/${endpoint}/${id}`);
  const { prefs, favs, toggleFav } = useApp();
  if (loading) return <p role="status" className="p-8">Loading…</p>;
  if (error) return <p role="alert" className="p-8">{error}. <Link className="underline" to="/">Go home</Link></p>;
  const a = x.accessibility || {}, m = matchPercent(a, prefs), key = kind + ":" + x.id, on = favs.includes(key);
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <button onClick={() => nav(-1)} className="underline">← Back</button>
      <Photo item={x} kind={kind} className="h-64 rounded-2xl" />
      <h1 className="text-3xl font-bold">{x.name}</h1>
      <p className="text-slate-600">{x.city}{x.state && `, ${x.state}`}{x.region && ` · ${x.region} India`}</p>
      <p>{x.description}</p>
      <p className="font-medium">Accessibility score: {accessibilityScore(a)}/100{m !== null && ` · Match for your needs: ${m}%`}</p>
      <h2 className="text-xl font-semibold">Accessibility features</h2>
      <ul className="grid sm:grid-cols-2 gap-1">{Object.entries(FEATURES).map(([k, l]) => <li key={k}>{a[k] ? "✓" : "✗"} {l} — {a[k] ? "listed as available" : "not listed"}</li>)}</ul>
      <p className="text-sm text-slate-600">Demo data: confirm accessibility details with the provider before travelling.</p>
      {x.price && <p className="text-xl font-semibold">₹{x.price} <span className="text-base font-normal">{x.unit} (demo price)</span></p>}
      <div className="flex flex-wrap gap-2">
        {["hotel", "vehicle", "guide"].includes(kind) && <Link to={`/book/${kind}/${x.id}`} className="rounded-lg bg-teal-700 text-white px-6 py-3 font-medium">Book (mock)</Link>}
        <button onClick={() => toggleFav(key)} aria-pressed={on} className="rounded-lg border px-6 py-3">{on ? "♥ Remove from favorites" : "♡ Add to favorites"}</button>
        <button onClick={() => navigator.clipboard?.writeText(location.href)} className="rounded-lg border px-6 py-3">Copy link</button>
      </div>
      {x.location && <MapView item={x} />}
    </div>
  );
}
