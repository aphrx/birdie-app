import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

import { SERVER, CODE } from "@env";

WebBrowser.maybeCompleteAuthSession();
const useProxy = true;
const redirectUri = AuthSession.makeRedirectUri({
  useProxy,
});

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

export const postToot = async (toot) => {
  console.log("toot:", JSON.stringify({
    status: toot
  }));
  fetch(SERVER + "/api/v1/statuses/", {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + CODE,
      'Host': 'mas.to',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: toot
    })
  });
};

export const auth = async (username, instance) => {
  const redirect_url = Linking.createURL();
  const url = 'https://mas.to/oauth/authorize?client_id='+data['client_id']+'&redirect_uri='+redirect_url+'&scope=read write follow push&response_type=code'
  const app_params = {
    client_name: 'Brdi',
    redirect_uris: redirect_url,
    scopes: 'read write follow push',
    website: 'https://aphrx.ca'
  };
  const app_data = await fetch("https://" + instance + "/api/v1/apps", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(app_params)
  });
  const data = await app_data.json();
  const discovery = AuthSession.useAutoDiscovery(url);
  const [request, result, promptAsync] = AuthSession.useAuthRequest(discovery);
  return promptAsync;
}