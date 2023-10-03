import axios from "axios";
const BASE_URL = "http://127.0.0.1:3000/api/user/";
const apis = {
  addUserName: async (data) => {
    return await axios.post(`${BASE_URL}createUser`, data);
  },
  createForm: async (data) => {
    return await axios.post(`${BASE_URL}createForm`, data);
  },
  updateForm: async (data) => {
    return await axios.put(`${BASE_URL}updateForm`, data);
  },
};

export default apis;
