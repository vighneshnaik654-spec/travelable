import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
const links = [["/", "Home"], ["/destinations", "Destinations"], ["/hotels", "Hotels"], ["/vehicles", "Vehicles"], ["/transport", "Transport"], ["/guides", "Guides"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useApp();
  const nav = useNavigate();
  const item = "block px-3 py-3 rounded-lg hover:bg-teal-50 focus:outline-2 focus:outline-teal-700";
  const all = [...links, ["/accessibility", "Accessibility"], ["/favorites", "Favorites"], ["/bookings", "My bookings"]];
  return (
    <header className="bg-teal-400 shadow-sm sticky top-0 z-10">
      <nav aria-label="Main" className="max-w-6xl mx-auto flex items-center justify-between p-3">
        <Link to="/" className="text-xl font-bold text-shadow-black">♿ TravelAble</Link>
        <button className="md:hidden border rounded-lg px-4 py-2" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <ul id="menu" className={(open ? "block" : "hidden") + " absolute md:static top-14 left-0 right-0 bg-teal-400 p-3 md:p-0 md:flex md:items-center md:gap-1 shadow md:shadow-none"}>
          {all.map(([to, label]) => <li key={to}><Link className={item} to={to} onClick={() => setOpen(false)}>{label}</Link></li>)}
          <li>{user
            ? <button className={item + " w-full text-left"} onClick={() => { logout(); setOpen(false); nav("/"); }}>Logout ({user.name})</button>
            : <Link className={item + " bg-teal-700 text-white hover:bg-teal-800"} to="/login" onClick={() => setOpen(false)}>Login</Link>}</li>
        </ul>
      </nav>
    </header>
  );
}
