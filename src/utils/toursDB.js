const KEY = "tours_db";

export const getTours = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : {};
};

export const saveTours = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};