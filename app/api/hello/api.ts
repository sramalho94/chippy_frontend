import axios from "axios";
import { BASE_URL } from "@/app/globals";
const API = axios.create({ baseURL:  BASE_URL });

export const signInUser = async (data: { username: string; password: string }) => {
  const response = await API.post("/auth/login", data);
  return response.data.user;
};

export const registerUser = async (data: {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  const response = await API.post("/auth/register", data);
  return response.data;
};

export const checkSession = async () => {
  const response = await API.get("/auth/session");
  return response.data;
};

export const updatePassword = async (data: {
  username: string;
  oldPassword: string;
  newPassword: string;
}) => {
  const response = await API.put("/auth/update-password", data);
  return response.data;
};
