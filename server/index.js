import express from "express"; import cors from "cors"; import jwt from "jsonwebtoken"; import crypto from "crypto";
import * as data from "./data.js";
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
const SECRET = process.env.JWT_SECRET || "dev-only-change-me";
// In-memory stores: reset on restart. Replace with MongoDB (mongoose) later.
const users = [], bookings = [];
const hash = (p, s = crypto.randomBytes(8).toString("hex")) => s + ":" + crypto.scryptSync(p, s, 32).toString("hex");
const sign = (u) => ({ token: jwt.sign({ id: u.id }, SECRET, { expiresIn: "7d" }), user: { id: u.id, name: u.name, email: u.email, prefs: u.prefs } });
const auth = (req, res, next) => { try { req.uid = jwt.verify((req.headers.authorization || "").slice(7), SECRET).id; next(); } catch { res.status(401).json({ error: "Please log in" }); } };

app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password || password.length < 6) return res.status(400).json({ error: "Name, email and a 6+ character password are required" });
  if (users.some((u) => u.email === email)) return res.status(409).json({ error: "Email already registered" });
  const u = { id: crypto.randomUUID(), name, email, pass: hash(password), prefs: req.body.prefs || [] };
  users.push(u); res.json(sign(u));
});
app.post("/api/auth/login", (req, res) => {
  const u = users.find((x) => x.email === req.body.email);
  if (!u || hash(req.body.password || "", u.pass.split(":")[0]) !== u.pass) return res.status(401).json({ error: "Wrong email or password" });
  res.json(sign(u));
});
app.put("/api/me/prefs", auth, (req, res) => { users.find((u) => u.id === req.uid).prefs = req.body.prefs || []; res.json({ ok: true }); });

for (const name of ["destinations", "hotels", "vehicles", "guides", "transport"]) {
  const list = data[name];
  app.get(`/api/${name}`, (req, res) => {
    const { search = "", ...filters } = req.query, q = search.toLowerCase();
    res.json(list.filter((x) => (!q || JSON.stringify(x).toLowerCase().includes(q)) && Object.entries(filters).every(([k, v]) => !v || String(x[k]) === v)));
  });
  app.get(`/api/${name}/:id`, (req, res) => { const x = list.find((i) => i.id === req.params.id); x ? res.json(x) : res.status(404).json({ error: "Not found" }); });
}

app.post("/api/bookings", auth, (req, res) => {
  const { kind, itemId, name, city, from, to, guests, guestName, notes, total } = req.body;
  if (!kind || !itemId || !from) return res.status(400).json({ error: "Please choose a start date" });
  const b = { id: "TA-" + crypto.randomBytes(3).toString("hex").toUpperCase(), uid: req.uid, kind, itemId, name, city, from, to, guests, guestName, notes, total, status: "Mock booking (not real)" };
  bookings.push(b); res.json(b);
});
app.get("/api/bookings", auth, (req, res) => res.json(bookings.filter((b) => b.uid === req.uid)));
app.delete("/api/bookings/:id", auth, (req, res) => { const b = bookings.find((x) => x.id === req.params.id && x.uid === req.uid); if (!b) return res.status(404).json({ error: "Not found" }); b.status = "Cancelled"; res.json(b); });

app.listen(process.env.PORT || 5000, () => console.log("TravelAble API on http://localhost:5000"));
