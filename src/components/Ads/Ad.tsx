import React, { useEffect, useState } from "react";
import { FaGooglePlusG } from "@react-icons/all-files/fa/FaGooglePlusG";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { useToast } from "../../contexts/ToastState";
import { useHistory } from "react-router-dom";
import {
  postBookmark,
} from "../../services/api";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { ads, eachToast, statesRedux } from "../../ts/interfaces";

const Ad:React.FC<{ad:ads}> = ({ ad })=> {
  const history = useHistory();
  const themeClass = "bg-white";
  const [ images, setImages ] = useState<Array<string | null>>([ad.main_image]);
  const themeBorder = "border-darkGray";
  const themeBorder2 = "border-darkModeGray";

  const { setToastState } = useToast();

  const { user } = useSelector((state:statesRedux) => state.userAuth);

  const [showMenu, setShowMenu] = useState("description");
  const styleSelectedMenu = "text-red border-red border-b-solid border-b-[2px]";

  const [backgroundImage, setBackgroundImage] = useState(
    ad.main_image
  );

  function addItemOnce(arr:Array<eachToast>, value:eachToast) {
    arr.push(value);
    return arr;
  }
  useEffect(() => {
    if(ad.image_1){
      setImages(old=> [...old,ad.image_1]);
      if(ad.image_2){
        setImages(old=> [...old,ad.image_2]);
        if(ad.image_3){
          setImages(old=> [...old,ad.image_3]);
        }
      }
    }
    else{
      setImages([])
    }
  }, []);

  function handleBackground(e:React.MouseEvent) {
    setBackgroundImage((e.target as HTMLImageElement).src);
  }

  function handleClickBookmark(e:React.MouseEvent) {
    e.preventDefault();
    if (!user) {
      setToastState((old:Array<eachToast>) =>
        addItemOnce(old.slice(), {
          title: "2",
          description: "First, log in to your account",
          key: Math.random(),
        })
      );
      history.push("/login");
    } else {
      // setToastState(old=>addItemOnce(old.slice(),{
      //     title: "3",
      //     description: "", key:Math.random()
      //     }))
      postBookmark(user, ad.id)
        .then((response) => {
          console.log(response.data);
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "1",
              description: "Product Added Successfully",
              key: Math.random(),
            })
          );
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setToastState((old:Array<eachToast>) =>
              addItemOnce(old.slice(), {
                title: "2",
                description: "This Product Already Added",
                key: Math.random(),
              })
            );
          } else {
            console.error(err);
          }
        });
    }
  }

  return (
    <div className={`${themeClass} px-[14%] sm:px-[6%] py-[50px]`}>
      <div className="flex lg:flex-col lg:items-center lg:gap-[20px] lgmin:flex-row lgmin:justify-between flex-wrap">
        <div className="sm:w-[90%] lg:w-[70%] lgmin:w-[48%] flex flex-col gap-[20px]">
          {ad ? (
            <>
              <div
                className={` bg-[length:100%_100%] bg-no-repeat w-[100%] mm:h-[200px] sm:h-[300px] md:h-[350px] lg:h-[450px] lgmin:h-[500px]`}
                style={{ backgroundImage: `url("` + backgroundImage + `")` }}
              ></div>
              <div className="flex flex-row justify-between w-[100%] gap-[4%] h-[16%]">
                {images.map((item:any, index:number) => {
                  return (
                    <img
                      key={index}
                      className={`${
                        item === backgroundImage
                          ? "border-solid border-[2px]"
                          : ""
                      } ${themeBorder} min-w-[22%] cursor-pointer`}
                      onClick={handleBackground}
                      src={item}
                      alt={String(index)}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <div className="w-[100%] mm:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] lgmin:h-[750px] mt-0 pt-0">
              <Skeleton variant="rectangular" width={"100%"} height={"70%"} />
            </div>
          )}
        </div>
        <div className="sm:w-[90%] lg:w-[70%] lgmin:w-[48%] flex flex-col gap-[10px] lg:text-center">
          <div>
            {ad ? (
              <>
                <h2 className="text-[25px] font-bold pb-[10px]">
                  {ad.title}
                  <span className="text-[16px] text-darkGray font-normal">
                    {ad.id}
                  </span>
                </h2>
                <i
                  className="fa fa-bookmark text-red pb-[5px] cursor-pointer"
                  onClick={handleClickBookmark}
                  aria-hidden="true"
                ></i>
              </>
            ) : (
              <div className="w-[100%] mt-0 pt-0">
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"50px"}
                />
              </div>
            )}
            {ad ? (
              <>
                <h3>
                  <span className="text-[14px] text-darkGray">
                    ${ad.total_price}
                  </span>
                  {/* <span className="text-red"> {ad.off}% Off</span> */}
                </h3>
                {/* <h3 className="text-[26px]">
                  ${(Number(ad.price) * (100 - Number(ad.off))) / 100}
                </h3> */}
              </>
            ) : (
              <div className="w-[100%] mt-[10px] ml-[10%]">
                <Skeleton variant="rectangular" width={"80%"} height={"40px"} />
              </div>
            )}
            {/* {textButton !== "" ? (
              <div
                id="colors"
                className="flex flex-row gap-[5px] pt-[15px] pb-[10px] lg:justify-center"
              >
                {ad.colors.split(",").map((item:any, index:number) => {
                  return (
                    <div
                      key={index}
                      className={`${themeBorder2} border-solid border-[1px] w-[30px] h-[30px] rounded-[50%]`}
                      style={{ backgroundColor: `${item}` }}
                    ></div>
                  );
                })}
              </div>
            ) : ( */}
              {/* <div className="w-[100%] mt-[10px]">
                <Skeleton
                  variant="rectangular"
                  width={"100%%"}
                  height={"40px"}
                />
              </div>
            )} */}
          </div>
          <div
            className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}
          ></div>
          {ad ? (
            <div>
              <h2 className="text-[14px] font-bold ">Select Size</h2>
              {/* <div
                id="colors"
                className="flex flex-row gap-[5px] pt-[15px] pb-[10px] lg:justify-center"
              >
                {ad.size.split(",").map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`${themeBorder2} border-solid border-[1px] w-[35px] h-[35px] rounded-[50%] flex items-center justify-center`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div> */}
              {/* <h3 className="text-[14px] font-bold text-red">
                {Number(product.stock) === 0
                  ? "Not available in stock"
                  : Number(product.stock) < 10
                  ? `Only ${product.stock} in stock`
                  : "InStock"}
              </h3> */}
              <h3 className="text-[14px] font-bold ">Quantity</h3>
              {/* <div className="flex lg:justify-center">
                <div
                  className={`mt-[10px] flex flex-row items-center justify-between border-[1px] border-solid w-[100px] ${themeBorder2}`}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => handleQuantity("-")}
                  >
                    <i
                      className={`fa fa-caret-left p-[8px] h-[100%] border-r-[1px] ${themeBorder2}`}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="py-[4px] px-[10px]">{counter}</div>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleQuantity("+")}
                  >
                    <i
                      className={`fa fa-caret-right p-[8px] border-l-[1px] ${themeBorder2}`}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div> */}
              {/* <div className="py-[10px]">
                <button
                  type="button"
                  onClick={handleClickCart}
                  className="h-[50px] min-w-fit py-[10px] px-[20px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
                >
                  {textButton}
                </button>
              </div> */}
            </div>
          ) : (
            <div className="w-[100%] my-[30px]">
              <Skeleton variant="rectangular" width={"100%%"} height={"60px"} />
            </div>
          )}
          <div
            className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}
          ></div>
          {ad ? (
            <>
              <div>
                <h2 className="text-[14px] font-bold ">Product Details</h2>
                <p className="text-[14px] text-darkGray">
                  {ad.description}
                </p>
              </div>
              <div
                className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}
              ></div>
              <div>
                <h2 className="text-[14px] font-bold ">Share It</h2>
                <div className="flex flex-row items-center gap-[10px] lg:justify-center mt-[8px]">
                  <span>
                    <FaFacebookF fontSize={"20px"} />
                  </span>
                  <span>
                    <FaGooglePlusG fontSize={"20px"} />
                  </span>
                  <span>
                    <FaTwitter fontSize={"20px"} />
                  </span>
                  <span>
                    <FaInstagram fontSize={"20px"} />
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="w-[100%] my-[30px]">
              <Skeleton
                variant="rectangular"
                width={"100%%"}
                height={"150px"}
              />
            </div>
          )}
          <div
            className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}
          ></div>
        </div>
        <div className="mt-[30px] lgmin:px-[30px] sm:w-[90%] lg:w-[70%] lgmin:w-[100%]">
          {ad ? (
            <>
              <div
                className={`flex mm:flex-col mmmin:flex-row lg:justify-center gap-[30px] mmmin:border-b-[1px] mmmin:border-b-solid ${themeBorder2}`}
              >
                <h4
                  className={`${
                    showMenu === "description"
                      ? styleSelectedMenu
                      : themeBorder2
                  } pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`}
                  onClick={() => setShowMenu("description")}
                >
                  DESCRIPTION
                </h4>
                {/* <h4
                  className={`${
                    showMenu === "details" ? styleSelectedMenu : themeBorder2
                  } pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`}
                  onClick={() => setShowMenu("details")}
                >
                  DETAILS
                </h4> */}
                {/* <h4
                  className={`${
                    showMenu === "video" ? styleSelectedMenu : themeBorder2
                  } pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`}
                  onClick={() => setShowMenu("video")}
                >
                  VIDEO
                </h4>
                <h4
                  className={`${
                    showMenu === "review" ? styleSelectedMenu : themeBorder2
                  } pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`}
                  onClick={() => setShowMenu("review")}
                >
                  WRITE REVIEW
                </h4> */}
              </div>
              <p className="text-[14px] text-darkGray leading-[25px] pt-[20px] px-[20px]">
                {ad.description}
              </p>
            </>
          ) : (
            <div className="w-[100%] mt-[-200px]">
              <Skeleton
                variant="rectangular"
                width={"100%%"}
                height={"150px"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ad;
