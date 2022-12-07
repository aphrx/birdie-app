import axios from "axios";
import { CODE } from "@env";

const params = {
  Authorization: "Bearer " + CODE,
};

export const fetchTimeline = async () => {
  const response = await axios.get("https://mas.to/api/v1/timelines/home", {
    headers: params,
  });
  return response.data;
};