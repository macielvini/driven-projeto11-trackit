import axios from "axios";

const BASE_URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth";

const api = axios.create({ baseURL: BASE_URL });

export function registerUser(body) {
  return api.post("/sign-up", body);
}

export function login(body) {
  return api.post("/login", body);
}
