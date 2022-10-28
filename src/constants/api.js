import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

export const api = axios.create({ baseURL: BASE_URL });
const TOKEN = localStorage.getItem("token");

api.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;

export function registerUser(body) {
  return api.post("/auth/sign-up", body);
}

export function loginUser(body) {
  return api.post("/auth/login", body);
}

export function postHabit(body) {
  return api.post("/habits", body);
}

export function getHabits() {
  return api.get("/habits");
}

export function deleteHabit(id) {
  return api.delete(`/habits/${id}`);
}

export function getTodayHabits() {
  return api.get("/habits/today");
}

export function postCheckHabit(id) {
  return api.post(`/habits/${id}/check`);
}

export function postUncheckHabit(id) {
  return api.post(`/habits/${id}/uncheck`);
}
