import { callExternalApi } from "./external-api.service";
import axios from "axios";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getLostObjects = async () => {
  const config = {
    url: `${apiServerUrl}/lostObjects`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getUsers = async () => {
  const config = {
    url: `${apiServerUrl}/users`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const postLostObject = async (user, lostObject) => {
  const response = await axios({
    url: `${apiServerUrl}/lostObjects`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      user: "totimorpa@gmail.com",
      title: lostObject.title,
      text: lostObject.detailInfo,
      dateFound: lostObject.date,
      categories: lostObject.categories,
      lloc: lostObject.lloc,
      telefon: lostObject.telefon,
      recollida: lostObject.recollida,
    },
  });
  const { data } = response;
  return {
    data: data || null,
    error: null,
  };
};

export const postUser = async (user) => {
  const response = await axios({
    url: `${apiServerUrl}/users`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { username: user.email },
  });
  const { data } = response;
  return {
    data: data || null,
    error: null,
  };
};
