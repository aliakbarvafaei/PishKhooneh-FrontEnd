import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Ad from "../components/Ads/Ad";
import HeaderNewShort from "../components/HeaderNew/HeaderNewShort";
// import Product from "../components/Products/Product";
import TitlePages from "../components/TitlePages/TitlePages";
import { getAd } from "../services/api";
import { ads } from "../ts/interfaces";
const x : ads= {
    "id": 1,
    "owner": "محمد نوری",
    "title": "خانه در ولنجک",
    "total_price": 1000000000,
    "unit_price": 500,
    "province": "تهران",
    "address": "ولنجک خیابان اول",
    "location_x": 25,
    "location_y": 45,
    "main_image": "https://cdn.kilid.com/photos/large/listing_3f9ad267-c76e-4f12-9333-2ca5b52a9b78.jpg",
    "image_1": "https://cdn.kilid.com/photos/large/listing_ec4c2181-dd64-4a5c-bd66-6069900d2e81.jpg",
    "image_2": "https://cdn.kilid.com/photos/large/listing_15a4e204-8b59-404d-83c1-4e5b901837b8.jpg",
    "image_3": null,
    "type": "1",
    "category": "1",
    "status": "فروشی",
    "age": 12,
    "floor_area": 250,
    "num_of_beds": 3,
    "parking": true,
    "lobby": false,
    "warehouse": true,
    "sports_hall": false,
    "guard": true,
    "elevator": false,
    "swimming_pool": false,
    "balcony": true,
    "roof_garden": false,
    "remote_door": true,
    "description": "دو نبش",
    "region": 3,
    "neighbor": "کامرانیه",
    "graph": {
    "12000": "Price"
    },
    "updated_at": "2022-12-10T11:03:44.382154+03:30",
    "created_at": "2022-12-08T12:04:24.193534+03:30",
    "is_active": true
    }
const AdDetails:React.FC = (props) => {
  const history = useHistory();
  const { idad } = useParams<any>();
  const [ad, setAd] = useState<ads>(x);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // console.log(idad.split("-").length)
    // if (idad.split("-").length > 2) history.push("/not-found");
    // else {
        // getAd(idad.split("-")[0])
        // .then((response) => {
        //   if (
        //     idad.split("-").length === 1 ||
        //     response.data.name
        //       .replace(/\s/g, "")
        //       .toLowerCase()
        //       .includes(idad.split("-")[1])
        //   )
        //     setAd(response.data);
        //   else history.push("/not-found");
        // })
        // .catch((err) => {
        //   history.push("/not-found");
        //   console.error(err);
        // });
    // }
  }, [idad, history]);

  return (
    <div>
      <HeaderNewShort />
      <TitlePages title="آگهی" />
      {ad && <Ad ad={ad} />}
    </div>
  );
}

export default AdDetails;
