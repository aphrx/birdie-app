import axios from "axios";
import { SERVER, CODE } from "@env";

const params = {
  'Authorization': 'Bearer ' + CODE,
  'Host': 'mas.to'
};

export const setFollow = async (id) => {
  fetch(SERVER + "/api/v1/accounts/" + id + "/follow", {
    method: 'POST',
    headers: params
  });
};

export const setUnfollow = async (id) => {
  fetch(SERVER + "/api/v1/accounts/" + id + "/unfollow", {
    method: 'POST',
    headers: params
  });
};

export const setFavourite = async (id) => {
  fetch(SERVER + "/api/v1/statuses/" + id + "/favourite", {
    method: 'POST',
    headers: params
  });
};

export const setUnfavourite = async (id) => {
  fetch(SERVER + "/api/v1/statuses/" + id + "/unfavourite", {
    method: 'POST',
    headers: params
  });
};

export const setReblog = async (id) => {
  fetch(SERVER + "/api/v1/statuses/" + id + "/reblog", {
    method: 'POST',
    headers: params
  });
};

export const setUnreblog = async (id) => {
  fetch(SERVER + "/api/v1/statuses/" + id + "/unreblog", {
    method: 'POST',
    headers: params
  });
};