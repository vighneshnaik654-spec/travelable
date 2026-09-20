import { createContext, useContext, useState } from "react";
import { api } from "./api";
const Ctx = createContext();
export const useApp = () => useContext(Ctx);
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
export function AppProvider({ children }) {
  const [user, setUser] = useState(() => load("user", null));
  const [prefs, setPrefsState] = useState(() => load("prefs", []));
  const [favs, setFavs] = useState(() => load("favs", []));
  const setPrefs = (p) => { setPrefsState(p); save("prefs", p); if (localStorage.getItem("token")) api("/me/prefs", { method: "PUT", body: { prefs: p } }).catch(() => {}); };
  const toggleFav = (key) => { const n = favs.includes(key) ? favs.filter((k) => k !== key) : [...favs, key]; setFavs(n); save("favs", n); };
  const authenticate = async (path, body) => {
    const d = await api(path, { method: "POST", body: { ...body, prefs } });
    localStorage.setItem("token", d.token); save("user", d.user); setUser(d.user);
    if (d.user.prefs?.length) { setPrefsState(d.user.prefs); save("prefs", d.user.prefs); }
  };
  const logout = () => { localStorage.removeItem("token"); localStorage.removeItem("user"); setUser(null); };
  return <Ctx.Provider value={{ user, prefs, setPrefs, favs, toggleFav, authenticate, logout }}>{children}</Ctx.Provider>;
}
