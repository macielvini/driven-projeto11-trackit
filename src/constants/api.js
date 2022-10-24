import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const api = axios.create({ baseURL: BASE_URL });
const TOKEN = localStorage.getItem("token");

export const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

export function registerUser(body) {
  return api.post("/auth/sign-up", body);
}

export function loginUser(body) {
  return api.post("/auth/login", body);
}

export function postHabit(body) {
  return api.post("/habits", body, HEADERS);
}

export function getHabits() {
  return api.get("/habits", HEADERS);
}

export function deleteHabit(id) {
  return api.delete(`/habits/${id}`, HEADERS);
}

export function getTodayHabits() {
  return api.get("/habits/today", HEADERS);
}

export function postCheckHabit(id) {
  return api.post(`/habits/${id}/check`, {}, HEADERS);
}

export function postUncheckHabit(id) {
  return api.post(`/habits/${id}/uncheck`, {}, HEADERS);
}
