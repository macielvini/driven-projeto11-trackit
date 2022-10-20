import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const api = axios.create({ baseURL: BASE_URL });

export function registerUser(body) {
  return api.post("/auth/sign-up", body);
}

export function loginUser(body) {
  return api.post("/auth/login", body);
}

export function postHabit(body, config) {
  return api.post("/habits", body, config);
}

export function getHabits(config) {
  return api.get("/habits", config);
}
