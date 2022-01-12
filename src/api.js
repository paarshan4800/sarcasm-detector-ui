import axios from "axios";

const url_detect = "detect";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_PATH || "http://localhost:5000/",
});

export const apiDetectSarcasm = async (data) => {
  try {
    const response = await api.post(`${url_detect}`, {
      text: data,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
