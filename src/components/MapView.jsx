export default function MapView({ item }) {
  const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const q = encodeURIComponent(`${item.name} ${item.city}`);
  const ll = item.location ? `${item.location.latitude},${item.location.longitude}` : q;
  const btn = "inline-block rounded-lg border px-4 py-3 font-medium hover:bg-teal-50";
  return (
    <section aria-label="Map" className="space-y-2">
      {key && <iframe title={"Map of " + item.name} loading="lazy" className="w-full h-64 rounded-xl border" src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${q}`} />}
      <div className="flex flex-wrap gap-2">
        <a className={btn} target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${q}`}>Open in Google Maps</a>
        <a className={btn} target="_blank" rel="noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${ll}`}>Get directions</a>
      </div>
    </section>
  );
}
