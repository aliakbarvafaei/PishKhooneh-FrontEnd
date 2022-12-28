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
export const sendEmailAPI = (email : string) =>
  axiosInstance.post(
    "/send-mail/",
    {
      username: email,
    }
  );
export const activateAccountAPI = (code : string) =>
  axiosInstance.post(
    "/active-account/",
    {
      email_active_code: code,
    }
  );
export const NewAdAPI = (category : string, type : string, city : string, region : number, room : number, year : number, elevator : boolean, parking : boolean, lobby : boolean, sports_hall : boolean, guard : boolean,swimming_pool : boolean, balcony : boolean, roof_garden : boolean, remote_door : boolean, meterage : number, price : number, main_image : string, image_1 : string, image_2 : string, title : string, callNumber : string, bio : string, creator: string, warehouse: boolean) =>{
  console.log(category,type,room,year,main_image,image_1)
  return axiosInstance.post(
    "/homes/",
    {
      category: category,
      type: type,
      province: city,
      region: region,
      num_of_beds: room,
      age: year,
      elevator: elevator,
      parking: parking,
      lobby: lobby,
      sports_hall: sports_hall,
      guard: guard,
      swimming_pool: swimming_pool,
      balcony: balcony,
      roof_garden: roof_garden,
      remote_door: remote_door,
      floor_area: meterage,
      total_price: price,
      main_image: main_image,
      image_1: image_1,
      image_2: image_2,
      title: title,
      phone_number: callNumber,
      description: bio,
      seller: creator,
      warehouse: warehouse,
      location_x: 0,
      location_y: 0
    },
    configToken
  );
}

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
    "/homesfilter/",
    {
      pageNumber: pageNumber,
      pageSize: pageSize,
      filters: filters,
    }
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
