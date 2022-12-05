import axios from "axios";
import { CODE } from '@env';

const params = {
  Authorization: "Bearer " + CODE,
}

export const fetchTimeline = async () => {
  const response =  await axios.get('https://mas.to/api/v1/timelines/home', { headers : params } )
  return response.data;
};

export const fetchProfile = async () => {
  const response =  await axios.get('https://mas.to/api/v1/accounts/verify_credentials', { headers : params } )
  return response.data;
};

export const fetchNotifications = async () => {
  const response =  await axios.get('https://mas.to/api/v1/notifications', { headers : params } )
  return response.data;
};

export const fetchTrends = async () => {
  const response =  await axios.get('https://mas.to/api/v1/trends/tags', { headers : params } )
  return response.data;
}