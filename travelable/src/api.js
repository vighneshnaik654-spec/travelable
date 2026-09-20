import { useState, useEffect } from "react";
const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
export async function api(path, { method = "GET", body } = {}) {
  const token = localStorage.getItem("token");
  const r = await fetch(BASE + path, { method, headers: { "Content-Type": "application/json", ...(token && { Authorization: "Bearer " + token }) }, body: body && JSON.stringify(body) });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || "Request failed");
  return d;
}
export function useFetch(path) {
  const [s, set] = useState({ data: null, loading: true, error: null });
  useEffect(() => {
    set({ data: null, loading: true, error: null });
    api(path).then((data) => set({ data, loading: false, error: null })).catch((e) => set({ data: null, loading: false, error: e.message }));
  }, [path]);
  return s;
}
