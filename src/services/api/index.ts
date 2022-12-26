import { axiosInstance, configToken } from "../../config";
import { filtersInterface } from "../../ts/interfaces";

export const logoutAPI = () => axiosInstance.get(`/logout/`, configToken);

export const loginAPI = (email : string, password : string) =>
  axiosInstance.post(
    "/login/",
    {
      username: email,
      password: password
    }
  );
export const registerAPI = (fname : string, callNumber : string, email : string, password : string, address: string, bio: string) =>
  axiosInstance.post(
    "/register/",
    {
      full_name: fname,
      phone_number: callNumber,
      username: email,
      password: password,
      address: address,
      bio: bio
    }
  );
export const NewAdAPI = (category : string, type : string, city : string, region : string, room : string, year : string, floor : string, elevator : string, parking : string, meterage : string, price : string, photo : any, title : string, callNumber : string, bio : string, creator: string, warehouse: string) =>
  axiosInstance.post(
    "/new-ad",
    {
      category: category,
      type: type,
      city: city,
      region: region,
      room: room,
      year: year,
      floor: floor,
      elevator: elevator,
      parking: parking,
      meterage: meterage,
      price: price,
      photo: photo,
      title: title,
      callNumber: callNumber,
      bio: bio,
      creator: creator,
      warehouse: warehouse
    },
    configToken
  );

  export const PredictAPI = (type : string, city : string, region : string, room : string, year : string, floor : string, elevator : string, parking : string, meterage : string, warehouse: string) =>
  axiosInstance.post(
    "/predict",
    {
      type: type,
      city: city,
      region: region,
      room: room,
      year: year,
      floor: floor,
      elevator: elevator,
      parking: parking,
      meterage: meterage,
      warehouse: warehouse
    },
    configToken
  );

export const getUser = (token : string ) => axiosInstance.post(
    `/getuser/`,
    {
      token: token
    },
    configToken
  );

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

export const getAdsNew = () => axiosInstance.get("/homes/new/");

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
  axiosInstance.get(`/homes/${idAd}`);

export const getBookmark = (email : string) =>
  axiosInstance.get(`/bookmark/${email}`, configToken);

export const postBookmark = (email : string, code : number) =>
  axiosInstance.post(
    `/bookmark/${email}`,
    {
      code: code,
    },
    configToken
  );
export const deleteBookmark = (email : string, code : string) =>
  axiosInstance.delete(`/bookmark/${email}!${code}`, configToken);

// export const deleteCart = (email : string, code : string) =>
//   axiosInstance.delete(`/cart/${email}!${code}`, configToken);

// export const updateCart = (email : string, code : string, quantity : string) =>
//   axiosInstance.patch(
//     `/cart/${email}!${code}`,
//     {
//       quantity: quantity,
//     },
//     configToken
//   );
