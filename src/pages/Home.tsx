import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
// import Instagram from "../components/Instagram/Instagram";
import Option from "../components/Option/Option";
// import SectionCategories from "../components/SectionCategories/SectionCategories";
// import SectionProductMain from "../components/SectionProductMain/SectionProductMain";
// import SectionProductSlider from "../components/SectionProductSlider/SectionProductSlider";
import { getProducts } from "../services/api";

const Home : React.FC = ()=> {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Banner />
      {/* <SectionCategories /> */}
      {/* <SectionProductSlider products={products} /> */}
      {/* <div className="px-total py-[12%] flex flex-col font-bold items-center mdmin:w-[60%] md:w-[100%]">
        <h2 className="text-red md:text-[75px] lg:text-[60px] xl:text-[85px] xlmin:text-[90px]">
          2022
        </h2>
        <h4 className="lg:text-[35px] xl:text-[50px] xlmin:text-[55px] text-center">
          FASHION TRENDS
        </h4>
        <p className="lg:text-[20px] xl:text-[22px] xlmin:text-[24px] text-darkGray text-center">
          SPECIAL OFFER
        </p>
      </div> */}
      {/* <SectionProductMain products={products} /> */}
      <Option />
      {/* <Instagram /> */}
    </>
  );
}

export default Home;
