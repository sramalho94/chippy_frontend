import Client from "./api";

export const signInUser = async (data: { username: string; password: string }) => {
  try {
    const response = await Client.post("/auth/login", data);
    localStorage.setItem('token', response.data.token)
    return response.data;
  }
  catch (error: any) {
    console.log({error: error.message})
  }
};

export const registerUser = async (data: {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  try {
    const response = await Client.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    console.log({error: error.message})
  }
};

export const checkSession = async () => {
  try {
    const response = await Client.get("/auth/session");
    return response.data;
  }
  catch (error: any) {
    console.log({error: error.message})
  }
};

export const updatePassword = async (data: {
  username: string;
  oldPassword: string;
  newPassword: string;
}) => {
  try {
    const response = await Client.put("/auth/update-password", data);
    return response.data;
  } catch (error: any) {
    console.log({error: error.message})
  }
};
