import { useApp } from "../AppContext";
import { FEATURES } from "../utils/accessibilityUtils";
export default function Preferences() {
  const { prefs, setPrefs, user } = useApp();
  const toggle = (k) => setPrefs(prefs.includes(k) ? prefs.filter((p) => p !== k) : [...prefs, k]);
  return (
    <div className="max-w-xl mx-auto p-4 space-y-3">
      <h1 className="text-3xl font-bold">Accessibility preferences</h1>
      {user && <p>Signed in as {user.name} ({user.email}).</p>}
      <p>Choose what you need. Listings are ranked by how many of these their data says they provide.</p>
      <fieldset className="space-y-2"><legend className="sr-only">Requirements</legend>
        {Object.entries(FEATURES).map(([k, l]) => <label key={k} className="flex items-center gap-3 p-3 border rounded-lg"><input type="checkbox" className="size-5" checked={prefs.includes(k)} onChange={() => toggle(k)} />{l}</label>)}
      </fieldset>
      <p role="status" className="text-sm">Saved automatically ({prefs.length} selected).</p>
    </div>
  );
}
