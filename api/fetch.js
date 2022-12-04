import axios from "axios";
import { CODE } from '@env';

const params = {
  Authorization: "Bearer " + CODE,
}

// export const fetchTimeline = async () => {
//   const response =  await axios.get('https://mas.to/api/v1/timelines/public')
//   return response.data;
// };

export const fetchTimeline = async () => {
  console.log("CODE")
  console.log(params)
  const response =  await axios.get('https://mas.to/api/v1/timelines/home', { headers : params } )
  return response.data;
};

export const fetchProfile = async () => {
  console.log("CODE")
  console.log(params)
  const response =  await axios.get('https://mas.to/api/v1/accounts/verify_credentials', { headers : params } )
  return response.data;
};
