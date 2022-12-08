import axios from "axios";
import { CODE } from "@env";

const params = {
  Authorization: "Bearer " + CODE,
};

export const setFollow = async (id) => {
  const response = await axios.post("https://mas.to/api/v1/accounts/" + id + "/follow", {
    headers: params,
  });
  return response.data;
};

export const setUnfollow = async (id) => {
  
  const response = await axios.post("https://mas.to/api/v1/accounts/" + id + "/unfollow", {
    headers: params,
  });
  return response.data;
};