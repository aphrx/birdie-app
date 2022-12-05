import { atom } from "recoil";

export const homeFeedState = atom({
  key: "homeFeedState",
  default: []
});


export const userState = atom({
  key: "userState",
  default: []
});

export const notificationState = atom({
  key: "notificationState",
  default: []
});

export const trendState = atom({
  key: "trendState",
  default: []
});
