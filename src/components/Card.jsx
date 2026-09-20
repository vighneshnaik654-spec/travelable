import { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../AppContext";
import { accessibilityScore, matchPercent, FEATURES } from "../utils/accessibilityUtils";
const ICON = { destination: "🏞️", hotel: "🏨", vehicle: "🚐", guide: "🧑‍🏫", transport: "🚆" };
export function Photo({ item, kind, className = "" }) {
  const [bad, setBad] = useState(false);
  if (item.images?.[0] && !bad) return <img src={item.images[0]} alt={item.name} loading="lazy" onError={() => setBad(true)} className={"object-cover w-full " + className} />;
  return <div role="img" aria-label={item.name + " (photo not added yet)"} className={"bg-linear-to-br from-teal-100 to-teal-300 flex items-center justify-center text-5xl " + className}>{ICON[kind]}</div>;
}
export default function Card({ kind, item }) {
  const { prefs, favs, toggleFav } = useApp();
  const key = kind + ":" + item.id, on = favs.includes(key), m = matchPercent(item.accessibility, prefs);
  const have = Object.keys(item.accessibility || {}).filter((k) => item.accessibility[k]);
  return (
    <article className="rounded-2xl bg-white shadow-md overflow-hidden flex flex-col">
      <Photo item={item} kind={kind} className="h-40" />
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-slate-600">{item.city}{item.state && `, ${item.state}`}{item.category && ` · ${item.category}`}</p>
        {item.price && <p className="font-medium">₹{item.price} <span className="text-sm text-slate-500">{item.unit} · demo price</span></p>}
        <p className="text-sm">Accessibility score: <b>{accessibilityScore(item.accessibility)}/100</b>{m !== null && <> · Match for you: <b>{m}%</b></>}</p>
        <ul className="flex flex-wrap gap-1">{have.slice(0, 4).map((k) => <li key={k} className="text-xs bg-green-100 text-green-900 rounded-full px-2 py-1">✓ {FEATURES[k]}</li>)}</ul>
        <div className="mt-auto flex gap-2 pt-2">
          <Link to={`/${kind}/${item.id}`} className="flex-1 text-center rounded-lg bg-teal-700 text-white py-3 font-medium hover:bg-teal-800">View details</Link>
          <button onClick={() => toggleFav(key)} aria-pressed={on} aria-label={(on ? "Remove from" : "Add to") + " favorites: " + item.name} className="rounded-lg border px-4 text-xl">{on ? "♥" : "♡"}</button>
        </div>
      </div>
    </article>
  );
}
