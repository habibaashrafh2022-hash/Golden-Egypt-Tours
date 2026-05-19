const BASE_URL = "https://golden-egypt-tours-production.up.railway.app";

// ─────────────────────────────────────────────
// Cities
// ─────────────────────────────────────────────

export const getAllCities = async () => {
  const res = await fetch(`${BASE_URL}/api/cities`);
  const data = await res.json();
  return data.data;
};

export const getCityBySlug = async (slug) => {
  const res = await fetch(`${BASE_URL}/api/cities/${slug}`);
  const data = await res.json();
  return data.data;
};

export const getToursByCity = async (slug) => {
  const res = await fetch(`${BASE_URL}/api/cities/${slug}/tours`);
  const data = await res.json();
  return data.data;
};

// ─────────────────────────────────────────────
// Tours
// ─────────────────────────────────────────────

export const getAllTours = async () => {
  const res = await fetch(`${BASE_URL}/api/tours`);
  const data = await res.json();
  return data.data;
};

export const getTourById = async (id) => {
  const res = await fetch(`${BASE_URL}/api/tours/${id}`);
  const data = await res.json();
  return data.data;
};