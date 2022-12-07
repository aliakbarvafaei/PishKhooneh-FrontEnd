import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useToast } from "../../contexts/ToastState";
import { postCart, postWishlist } from "../../services/api";
import { eachToast, statesRedux } from "../../ts/interfaces";

const Card:React.FC<{item:any}> = ({ item }) => {
  const history = useHistory();
  const { user } = useSelector((state:statesRedux) => state.userAuth);
  const [backgroundImage, setBackgroundImage] = useState("");
  const { setToastState } = useToast();
  const [images, setImages] = useState([]);
  useEffect(() => {
    setBackgroundImage(item.images.split(",")[0]);
    setImages(item.images.split(","));
  }, [item.images]);

  function addItemOnce(arr:Array<eachToast>, value:eachToast) {
    arr.push(value);
    return arr;
  }

  function handleBackground(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    e.preventDefault();
    setBackgroundImage(e.currentTarget.src);
  }
  function handleClickCart(e: React.MouseEvent<HTMLFormElement>) {
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
      if (Number(item.stock) === 0) {
        setToastState((old:Array<eachToast>) =>
          addItemOnce(old.slice(), {
            title: "2",
            description: "Out Of Stock",
            key: Math.random(),
          })
        );
      } else {
        postCart(user, item.code, "1")
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
  }
  function handleClickHeart(e : React.MouseEvent<HTMLFormElement>) {
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
      postWishlist(user, item.code)
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
    <div className="group flex flex-col md:ml-[5px] lg:ml-[10px] lgmin:ml-[20px]">
      <Link
        to={
          "/product-details/" +
          String(item.code) +
          `-` +
          String(item.name.replace(/\s/g, "").toLowerCase())
        }
      >
        <div
          className={`relative overflow-hidden mm:min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[370px] xl:min-h-[410px] xlmin:min-h-[440px] bg-[length:100%_100%] bg-no-repeat`}
          style={{ backgroundImage: `url("` + backgroundImage + `")` }}
        >
          <div className="absolute mm:right-[-25%] mmmin:right-[-15%] bottom-[5%] flex flex-col items-center justify-center gap-[20px] text-darkGray text-[20px]">
            <i
              className="lg:group-hover:translate-x-[-45px] lgmin:group-hover:translate-x-[-55px] duration-[700ms] delay-[0ms] fa fa-shopping-cart cursor-pointer hover:text-red mr-[3px]"
              onClick={handleClickCart}
              aria-hidden="true"
            ></i>
            <i
              className="lg:group-hover:translate-x-[-45px] lgmin:group-hover:translate-x-[-55px] duration-[700ms] delay-[150ms] fa fa-heart cursor-pointer hover:text-red"
              onClick={handleClickHeart}
              aria-hidden="true"
            ></i>
          </div>
          <div className="absolute left-[2%] bottom-[5%] w-[12%] flex flex-col justify-center gap-[20px] text-darkGray text-[20px]">
            {images.map((item, index) => {
              return (
                <img
                  className={`${
                    item === backgroundImage ? "opacity-100" : "opacity-50"
                  } cursor-pointer`}
                  onClick={(e)=>handleBackground(e)}
                  src={item}
                  key={index}
                  alt={`${index}`}
                />
              );
            })}
          </div>
        </div>
      </Link>
      <div id="stars" className="text-[12px] pt-[10px]">
        <i
          className={`fa fa-star ${
            Number(item.rating) > 0 ? "text-[#FAD02C]" : "text-darkGray"
          }`}
          aria-hidden="true"
        ></i>
        <i
          className={`fa fa-star ${
            Number(item.rating) > 1 ? "text-[#FAD02C]" : "text-darkGray"
          }`}
          aria-hidden="true"
        ></i>
        <i
          className={`fa fa-star ${
            Number(item.rating) > 2 ? "text-[#FAD02C]" : "text-darkGray"
          }`}
          aria-hidden="true"
        ></i>
        <i
          className={`fa fa-star ${
            Number(item.rating) > 3 ? "text-[#FAD02C]" : "text-darkGray"
          }`}
          aria-hidden="true"
        ></i>
        <i
          className={`fa fa-star ${
            Number(item.rating) > 4 ? "text-[#FAD02C]" : "text-darkGray"
          }`}
          aria-hidden="true"
        ></i>
      </div>
      <Link
        to={
          "/product-details/" +
          String(item.code) +
          `-` +
          String(item.name.replace(/\s/g, "").toLowerCase())
        }
      >
        <div id="title" className="font-medium text-darkGray">
          {item.name}{" "}
          <span className="text-[70%] font-normal">{item.code}</span>
        </div>
      </Link>
      <div id="price" className="flex flex-row items-center gap-[5px]">
        <h3 className="text-[18px] font-bold">
          ${(Number(item.price) * (100 - Number(item.off))) / 100}
        </h3>
        {/* <strike className="text-[14px] text-darkGray">${item.price}</strike> */}
        <span className="text-[14px] text-darkGray">${item.price}</span>
      </div>
      <div id="colors" className="flex flex-row gap-[2px] pt-[10px] pb-[20px]">
        {item.colors.split(",").map((item : any, index: number) => {
          return (
            <div
              className={`border-solid border-black border-[1px] w-[16px] h-[16px] rounded-[50%]`}
              style={{ backgroundColor: `${item}` }}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
