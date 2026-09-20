import { useEffect, useState } from "react";
import { api } from "../api";
import { useApp } from "../AppContext";
import Card from "../components/Card";
const SETS = { destination: "destinations", hotel: "hotels", vehicle: "vehicles", guide: "guides" };
export default function Favorites() {
  const { favs } = useApp();
  const [all, setAll] = useState(null);
  useEffect(() => { Promise.all(Object.entries(SETS).map(([k, e]) => api("/" + e).then((l) => l.map((i) => ({ kind: k, item: i }))))).then((r) => setAll(r.flat())).catch(() => setAll([])); }, []);
  const mine = (all || []).filter(({ kind, item }) => favs.includes(kind + ":" + item.id));
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold">Favorites</h1>
      {all && mine.length === 0 && <p>No favorites yet. Tap ♡ on any listing.</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{mine.map(({ kind, item }) => <Card key={kind + item.id} kind={kind} item={item} />)}</div>
    </div>
  );
}
