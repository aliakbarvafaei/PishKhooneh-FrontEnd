import { axiosInstance, configToken } from "../../config";
import { filtersInterface } from "../../ts/interfaces";

export const loginAPI = (email : string, password : string) =>
  axiosInstance.post(
    "/login",
    {
      email: email,
      password: password,
    },
    configToken
  );
export const registerAPI = (fname : string, lname : string, email : string, password : string, address: string, bio: string) =>
  axiosInstance.post(
    "/register",
    {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      address: address,
      bio: bio
    },
    configToken
  );
export const NewAdAPI = (fname : string, lname : string, email : string, password : string, address: string, bio: string) =>
  axiosInstance.post(
    "/new-ad",
    {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      address: address,
      bio: bio
    },
    configToken
  );

export const getUser = () => axiosInstance.get(`/user`, configToken);

export const updatePassword = (email : string, LastPassword : string, NewPassword : string) =>
  axiosInstance.patch(
    `/user/${email}`,
    {
      LastPassword: LastPassword,
      NewPassword: NewPassword,
    },
    configToken
  );

export const getAds = () => axiosInstance.get("/ads", configToken);

export const getAdsWithPage = (pageNumber : number, pageSize : number, filters : filtersInterface) =>
  axiosInstance.post(
    "/adsFilter",
    {
      pageNumber: pageNumber,
      pageSize: pageSize,
      filters: filters,
    },
    configToken
  );

export const getAd = (idAd : string) =>
  axiosInstance.get(`/ad/${idAd}`, configToken);

export const getBookmark = (email : string) =>
  axiosInstance.get(`/bookmark/${email}`, configToken);

export const postBookmark = (email : string, code : string) =>
  axiosInstance.post(
    `/bookmark/${email}`,
    {
      code: code,
    },
    configToken
  );
export const deleteBookmark = (email : string, code : string) =>
  axiosInstance.delete(`/bookmark/${email}!${code}`, configToken);

export const getCart = (email : string) =>
  axiosInstance.get(`/cart/${email}`, configToken);

export const postCart = (email : string, code : string, quantity : string) =>
  axiosInstance.post(
    `/cart/${email}`,
    {
      code: code,
      quantity: quantity,
    },
    configToken
  );
export const deleteCart = (email : string, code : string) =>
  axiosInstance.delete(`/cart/${email}!${code}`, configToken);

export const updateCart = (email : string, code : string, quantity : string) =>
  axiosInstance.patch(
    `/cart/${email}!${code}`,
    {
      quantity: quantity,
    },
    configToken
  );

export const isInCart = (email : string, code : string) =>
  axiosInstance.get(`/isincart/${email}!${code}`, configToken);
