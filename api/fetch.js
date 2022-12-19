import axios from "axios";
import { SERVER, CODE } from "@env";

const params = {
  Authorization: "Bearer " + CODE,
};

export const fetchTimeline = async () => {
  const response = await axios.get(SERVER+ "/api/v1/timelines/home", {
    headers: params,
  });
  return response.data;
};

export const fetchProfile = async () => {
  const response = await axios.get(
    SERVER+"/api/v1/accounts/verify_credentials",
    { headers: params }
  );
  return response.data;
};

export const fetchNotifications = async () => {
  const response = await axios.get(SERVER+"/api/v1/notifications", {
    headers: params,
  });
  return response.data;
};

export const fetchTrends = async () => {
  const response = await axios.get(SERVER+"/api/v1/trends/tags", {
    headers: params,
  });
  return response.data;
};

export const fetchAccount = async (id) => {
  const response = await axios.get(SERVER+"/api/v1/accounts/" + id, {
    headers: params,
  });
  return response.data;
};

export const fetchFollowers = async (id) => {
  const response = await axios.get(SERVER+"/api/v1/accounts/" + id + "/followers", {
    headers: params,
  });
  return response.data;
};

export const fetchFollowings = async (id) => {
  const response = await axios.get(SERVER+"/api/v1/accounts/" + id + "/following", {
    headers: params,
  });
  return response.data;
};

export const fetchToots = async (id) => {
  const response = await axios.get(
    SERVER+"/api/v1/accounts/" + id + "/statuses?exclude_replies=true",
    {
      headers: params,
    }
  );
  return response.data;
};

export const fetchHashtagTimeline = async (tag) => {
  const response = await axios.get(
    SERVER+"/api/v1/timelines/tag/" + tag,
    {
      headers: params,
    }
  );
  return response.data;
};

export const fetchFollowStatus = async (id) => {
  const response = await axios.get(
    SERVER+"/api/v1/accounts/relationships?id=" + id,
    {
      headers: params,
    }
  );
  return response.data;
};
