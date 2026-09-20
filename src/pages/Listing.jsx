import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../api";
import { useApp } from "../AppContext";
import Card from "../components/Card";
import { matchPercent } from "../utils/accessibilityUtils";
export default function Listing({ kind, endpoint, title, filterKey }) {
  const [sp, setSp] = useSearchParams();
  const search = sp.get("search") || "", filter = sp.get(filterKey) || "";
  const [shown, setShown] = useState(6);
  const { prefs } = useApp();
  const qs = new URLSearchParams({ search, ...(filter && { [filterKey]: filter }) });
  const { data, loading, error } = useFetch(`/${endpoint}?${qs}`);
  const all = useFetch(`/${endpoint}`).data || [];
  const options = [...new Set(all.map((x) => x[filterKey]).filter(Boolean))];
  const set = (k, v) => { const n = new URLSearchParams(sp); v ? n.set(k, v) : n.delete(k); setSp(n); setShown(6); };
  const sorted = data && [...data].sort((a, b) => (matchPercent(b.accessibility, prefs) || 0) - (matchPercent(a.accessibility, prefs) || 0));
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm text-slate-600">Demo data. {prefs.length ? "Sorted by how well listings match your accessibility needs." : "Set your needs under Accessibility to personalise results."}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">Search<input value={search} onChange={(e) => set("search", e.target.value)} placeholder="City, state, feature…" className="mt-1 w-full border rounded-lg p-3" /></label>
        <label className="block">Filter by {filterKey}
          <select value={filter} onChange={(e) => set(filterKey, e.target.value)} className="mt-1 w-full border rounded-lg p-3"><option value="">All</option>{options.map((o) => <option key={o}>{o}</option>)}</select></label>
      </div>
      {loading && <p role="status">Loading…</p>}
      {error && <p role="alert" className="text-red-800">Could not load data: {error}. Is the backend running on port 5000?</p>}
      {sorted && sorted.length === 0 && <p role="status">No results found for your search and filters.</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{sorted?.slice(0, shown).map((i) => <Card key={i.id} kind={kind} item={i} />)}</div>
      {sorted && shown < sorted.length && <button onClick={() => setShown(shown + 6)} className="rounded-lg border px-6 py-3">Load more</button>}
    </div>
  );
}
