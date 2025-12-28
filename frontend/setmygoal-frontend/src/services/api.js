import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const registerUser = (data) =>
  API.post("/users/register", data);

export const saveProfile = (userId, data) =>
  API.post(`/profile/save/${userId}`, data);

export const getDashboard = (userId) =>
  API.get(`/dashboard/${userId}`);
