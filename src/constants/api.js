import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const api = axios.create({ baseURL: BASE_URL });

export const HEADER = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export function registerUser(body) {
  return api.post("/auth/sign-up", body);
}

export function loginUser(body) {
  return api.post("/auth/login", body);
}

export function postHabit(body) {
  return api.post("/habits", body, HEADER);
}

export function getHabits() {
  return api.get("/habits", HEADER);
}

export function deleteHabit(id) {
  return api.delete(`/habits/${id}`, HEADER);
}

export function getTodayHabits() {
  return api.get("/habits/today", HEADER);
}

export function postCheckHabit(id) {
  return api.post(`/habits/${id}/check`, {}, HEADER);
}

export function postUncheckHabit(id) {
  return api.post(`/habits/${id}/uncheck`, {}, HEADER);
}
