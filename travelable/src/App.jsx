import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";
import Bookings from "./pages/Bookings";
import Favorites from "./pages/Favorites";
import Preferences from "./pages/Preferences";
import Auth from "./pages/Auth";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <a href="#main" className="sr-only focus:not-sr-only p-2 bg-teal-700 text-white">Skip to content</a>
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Listing kind="destination" endpoint="destinations" title="Destinations" filterKey="category" />} />
          <Route path="/hotels" element={<Listing kind="hotel" endpoint="hotels" title="Accessible hotels" filterKey="city" />} />
          <Route path="/vehicles" element={<Listing kind="vehicle" endpoint="vehicles" title="Accessible vehicles" filterKey="city" />} />
          <Route path="/guides" element={<Listing kind="guide" endpoint="guides" title="Travel guides" filterKey="city" />} />
          <Route path="/transport" element={<Listing kind="transport" endpoint="transport" title="Bus, train & flights (sample data)" filterKey="category" />} />
          <Route path="/destination/:id" element={<Detail kind="destination" endpoint="destinations" />} />
          <Route path="/hotel/:id" element={<Detail kind="hotel" endpoint="hotels" />} />
          <Route path="/vehicle/:id" element={<Detail kind="vehicle" endpoint="vehicles" />} />
          <Route path="/guide/:id" element={<Detail kind="guide" endpoint="guides" />} />
          <Route path="/transport/:id" element={<Detail kind="transport" endpoint="transport" />} />
          <Route path="/book/:kind/:id" element={<Booking />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/accessibility" element={<Preferences />} />
          <Route path="/login" element={<Auth mode="login" />} />
          <Route path="/register" element={<Auth mode="register" />} />
          <Route path="/profile" element={<Preferences />} />
          <Route path="*" element={<p className="p-8">Page not found. <Link className="underline" to="/">Go home</Link></p>} />
        </Routes>
      </main>
      <footer className="bg-slate-100 p-6 text-sm text-center">TravelAble · Travel India Without Limits · Prototype: all listings are demo data.</footer>
    </div>
  );
}
