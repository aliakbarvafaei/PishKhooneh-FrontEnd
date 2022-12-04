import axios from "axios";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const API_URL = isLocalhost
  ? "http://localhost:5000"
  : "https://api.clothing-shopping.ir";

export const axiosInstance = axios.create({
  // withCredentials: true,
  baseURL: API_URL,
});

export const configToken = {
  headers: {
    token: JSON.parse(localStorage.getItem("token_user") as string),
  },
};
