import axios, { AxiosInstance } from "axios";
import config from "@/config";

let api: AxiosInstance;

if (config.isProduction) api = axios.create();
else {
  api = axios.create({
    baseURL: config.baseUrl,
  });
}

export default api;
