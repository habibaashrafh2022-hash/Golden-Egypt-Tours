const BASE = "http://localhost:5000/api";

export async function getTours() {
  const res = await fetch(`${BASE}/tours`);
  return res.json();
}

export async function getTour(id) {
  const res = await fetch(`${BASE}/tours/${id}`);
  return res.json();
}

export async function getCityTours(city) {
  const res = await fetch(`${BASE}/city/${city}`);
  return res.json();
}