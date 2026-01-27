import axios from "axios";

const favoritosAPI = axios.create({
  baseURL: "http://localhost:8000/api/favoritos",
});

async function getFavoritos() {
  const response = await favoritosAPI.get("/");
  console.log(response.data);
  return response.data;
}

async function postFavoritos(id) {
  await favoritosAPI.post(`/${id}`);
}

async function deleteFavoritos(id) {
  await favoritosAPI.delete(`/${id}`);
}

export { getFavoritos, postFavoritos, deleteFavoritos };
