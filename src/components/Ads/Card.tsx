import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useToast } from "../../contexts/ToastState";
import { postBookmark } from "../../services/api";
import { convertorPrice } from "../../ts/functions";
import { eachToast, statesRedux } from "../../ts/interfaces";

const Card:React.FC<{item:any}> = ({ item }) => {
  const history = useHistory();
  const { user } = useSelector((state:statesRedux) => state.userAuth);
  const [backgroundImage, setBackgroundImage] = useState("");
  const { setToastState } = useToast();
  const [images, setImages] = useState([]);
  useEffect(() => {
    setBackgroundImage(item.images[0]);
    setImages(item.images);
  }, [item.images]);

  function addItemOnce(arr:Array<eachToast>, value:eachToast) {
    arr.push(value);
    return arr;
  }

  function handleBackground(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    e.preventDefault();
    setBackgroundImage(e.currentTarget.src);
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
      postBookmark(user, item.identifier)
        .then((response) => {
          console.log(response.data);
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "1",
              description: "آگهی با موفقیت اضافه شد",
              key: Math.random(),
            })
          );
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setToastState((old:Array<eachToast>) =>
              addItemOnce(old.slice(), {
                title: "2",
                description: "این آگهی اخیرا اضافه شده است",
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
    <div className="group flex flex-col md:ml-[5px] lg:ml-[10px] lgmin:ml-[20px] text-right">
      <Link
        to={
          "/ad-details/" +
          String(item.identifier) +
          `-` +
          String(item.title.replace(/\s/g, "").toLowerCase())
        }
      >
        <div
          className={`relative overflow-hidden mm:min-h-[150px] sm:min-h-[190px] md:min-h-[210px] lg:min-h-[240px] xl:min-h-[270px] xlmin:min-h-[300px] bg-[length:100%_100%] bg-no-repeat`}
          style={{ backgroundImage: `url("` + backgroundImage + `")` }}
        >
          <div className="absolute mm:right-[-25%] mmmin:right-[-15%] bottom-[5%] flex flex-col items-center justify-center gap-[20px] text-darkGray text-[20px] bg-white">
            <i
              style={{fontSize: '35px'}}
              className="sm:group-hover:translate-x-[-35px] lg:group-hover:translate-x-[-45px] lgmin:group-hover:translate-x-[-50px] duration-[700ms] delay-[150ms] fa fa-bookmark rotate-90 cursor-pointer text-white hover:text-red"
              onClick={handleClickHeart}
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </Link>
      {/* <div id="stars" className="text-[12px] pt-[10px]">
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
      </div> */}
      <Link
        to={
          "/ad-details/" +
          String(item.identifier) +
          `-` +
          String(item.title.replace(/\s/g, "").toLowerCase())
        }
      >
        <div id="title" className="sm:text-[12px] md:text-[14px] mdmin:text-[16px] font-medium text-black text-right pt-[10px]">
          {item.title}{" "}
          {/* <span className="text-[70%] font-normal">{item.identifier}</span> */}
        </div>
      </Link>
      <div id="price" className="text-right text-red pt-[10px] opacity-90">
        <h3 className="sm:text-[8px] md:text-[10px] mdmin:text-[14px] font-bold flex flex-row justify-end gap-[5px]">
          <span>{convertorPrice(item.totalPrice)[0]}</span>
          <span>{convertorPrice(item.totalPrice)[1]}</span>
          <span> : قیمت</span>
        </h3>
      </div>
      <div id="location" className="flex flex-row justify-end gap-[10px] pt-[10px] sm:text-[8px] smmin:text-[12px] text-darkGray">
        <span>{item.bread_crumbs[item.bread_crumbs.length-1]}</span>
        <i className="fa fa-map-marker" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Card;
