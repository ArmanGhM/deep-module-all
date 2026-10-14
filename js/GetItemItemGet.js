const API = "../../api";

export const getJSON = async (Url) => {
  try {
    const res = await fetch(Url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} for ${res.url}`);
    }
    const data = await res.json();

    return data;
  } catch (err) {
    console.error("خطا در دریافت محصولات:", err);
    return null;
  }
};
export const api = {
  products: () => getJSON(`${API}/products.json`),
  categories: () => getJSON(`${API}/categories.json`),
  shop: () => getJSON(`${API}/shop.json`),
  home: () => getJSON(`${API}/home.json`),
  offers: () => getJSON(`${API}/offers.json`),
  stock: () => getJSON(`${API}/stock.json`),
};
