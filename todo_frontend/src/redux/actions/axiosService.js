import axios from "axios";

const base = "http://localhost:7000";

const axiosService = axios.create({
  baseURL: `${base}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = async (instance) => {
  const { token } = await JSON.parse(localStorage.getItem("userInfo"));
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

// singleton instance
export default axiosService;
