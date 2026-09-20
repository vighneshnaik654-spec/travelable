import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../api";
import { useApp } from "../AppContext";
import Card from "../components/Card";
import { FEATURES } from "../utils/accessibilityUtils";
const NEEDS = [["Wheelchair user", ["wheelchair", "ramps", "accessibleToilet"]], ["Limited mobility", ["stepFreeAccess", "elevator"]], ["Hearing impairment", ["hearingAssistance"]], ["Visual impairment", ["audioAssistance", "braille"]]];
export default function Home() {
  const [q, setQ] = useState(""), nav = useNavigate(), { setPrefs } = useApp();
  const { data } = useFetch("/destinations");
  return (
    <div>
      <section className="bg-linear-to-br from-teal-700 to-teal-500 text-white p-8 md:p-16 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Travel India Without Limits</h1>
        <p className="max-w-2xl mx-auto">Find destinations, hotels, vehicles and guides that fit your accessibility needs.</p>
        <form onSubmit={(e) => { e.preventDefault(); nav("/destinations?search=" + encodeURIComponent(q)); }} className="max-w-xl mx-auto flex gap-2">
          <label className="flex-1 text-amber-50 text-left"><span className="sr-only">Where do you want to go?</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Where do you want to go?" className="w-full rounded-lg p-3 text-slate-900" /></label>
          <button className="rounded-lg bg-white text-teal-700 px-6 font-semibold">Search</button>
        </form>
      </section>
      <section className="max-w-6xl mx-auto p-4 space-y-3">
        <h2 className="text-2xl font-bold">Travel by accessibility need</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {NEEDS.map(([label, keys]) => <button key={label} onClick={() => { setPrefs(keys); nav("/destinations"); }} className="border rounded-xl p-4 text-left hover:bg-teal-50"><b>{label}</b><br /><span className="text-sm">{keys.map((k) => FEATURES[k]).join(", ")}</span></button>)}
        </div>
        <h2 className="text-2xl font-bold pt-4">Popular destinations <span className="text-sm font-normal">(demo data)</span></h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{data?.slice(0, 3).map((d) => <Card key={d.id} kind="destination" item={d} />)}</div>
        <Link to="/destinations" className="inline-block underline">See all destinations →</Link>
      </section>
    </div>
  );
}
