import axios from "axios";

const productionUrl = "Base Url - https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
