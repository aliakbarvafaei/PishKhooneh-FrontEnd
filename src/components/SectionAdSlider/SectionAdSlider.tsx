import React from "react";
import Carousel from "react-multi-carousel"; 
import "react-multi-carousel/lib/styles.css";
import Card from "../Ads/Card";
import Skeleton from "@mui/material/Skeleton";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1279 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1279, min: 767 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  }
};
const products = [{
  code: "145",
  name: "SLEEVELESS DRESS",
  price: "290",
  off: "10",
  size: ["s", "m"],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  gender: "women",
  category: "dress",
  images: `
    https://multikart-react.vercel.app/assets/images/pro3/13.jpg,
    https://multikart-react.vercel.app/assets/images/pro3/8.jpg,
    https://multikart-react.vercel.app/assets/images/pro3/15.jpg,
  `,
  date: "7/29/2022",
  rating: "4",
  colors: `pink, white, black`,
  stock: "7",
  __v: 0,
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  review:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  video:
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
}];
const SectionAdSlider:React.FC = () => {
  const themeClass = "bg-white"
  return (
    <div
      className={`${themeClass} flex flex-col items-center pb-[50px] px-total`}
    >
      <h4 className="text-[18px] text-red">Special Offer</h4>
      <h2 className="sm:text-[24px] smmin:text-[32px] font-bold">
        TOP COLLECTION
      </h2>
      <h6 className="w-[70px] border-b-red border-b-solid border-b-[3px] mb-[15px]"></h6>
      <p className="w-[50%] text-darkGray text-center text-[14px] mb-[20px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <div className="overflow-hidden w-[100%]">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          arrows={false}
        >
          {(products.length === 0 ? Array.from(new Array(8)) : products).map(
            (item : any, index : number) => {
              return (
                <>
                  {item ? (
                    <Card key={index} item={item} />
                  ) : (
                    <div key={index} className="ml-[5px]">
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={"200px"}
                      />
                      <div className="mt-[10px]">
                        <Skeleton
                          variant="rectangular"
                          width={`50%`}
                          height="15px"
                        />
                      </div>
                      <div className="mt-[5px]">
                        <Skeleton
                          variant="rectangular"
                          width={`80%`}
                          height="15px"
                        />
                      </div>
                      <div className="mt-[5px] mb-[30px]">
                        <Skeleton
                          variant="rectangular"
                          width={`30%`}
                          height="15px"
                        />
                      </div>
                    </div>
                  )}
                </>
              );
            }
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default SectionAdSlider;
