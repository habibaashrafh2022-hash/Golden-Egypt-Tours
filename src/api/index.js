const BASE_URL = fetch("https://golden-egypt-tours-production.up.railway.app");

export const getAllCities = async () => {
  const res = await fetch(`${BASE_URL}/cities`);
  const data = await res.json();
  return data.data;
};

export const getCityBySlug = async (slug) => {
  const res = await fetch(`${BASE_URL}/cities/${slug}`);
  const data = await res.json();
  return data.data;
};

export const getToursByCity = async (slug) => {
  const res = await fetch(`${BASE_URL}/cities/${slug}/tours`);
  const data = await res.json();
  return data.data;
};

export const getAllTours = async () => {
  const res = await fetch(`${BASE_URL}/tours`);
  const data = await res.json();
  return data.data;
};

export const getTourById = async (id) => {
  const res = await fetch(`${BASE_URL}/tours/${id}`);
  const data = await res.json();
  return data.data;
};