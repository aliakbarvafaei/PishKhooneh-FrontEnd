import React from "react";
import logo from "../../../assets/images/logo.png";
import { FaGooglePlusG } from "@react-icons/all-files/fa/FaGooglePlusG";
import { FaWifi } from "@react-icons/all-files/fa/FaWifi";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";

const MainFooter:React.FC = ()=> {
  const themeBorder : string = "border-darkModeGray";

  return (
    <div className="flex flex-row flex-wrap justify-between">
      <div className="md:w-[100%] lg:w-[45%] lgmin:w-[30%]">
        <img className="" src={logo} alt="title" />
        <p className="pt-[18px] text-center px-[40px] text-darkGray text-[14px] leading-[30px]">
          ما در پیش‌خونه به شما کمک می‌کنیم تا بتوانید از قیمت خانه خود باخبر باشید و براحتی در پیش‌خونه خریدوفروش انجام دهید.
        </p>
        <div className="flex flex-row justify-between items-center mt-[8px]">
          <span className="cursor-pointer">
            <FaFacebookF fontSize={"20px"} />
          </span>
          <span className="cursor-pointer">
            <FaGooglePlusG fontSize={"20px"} />
          </span>
          <span className="cursor-pointer">
            <FaTwitter fontSize={"20px"} />
          </span>
          <span className="cursor-pointer">
            <FaInstagram fontSize={"20px"} />
          </span>
          <span className="cursor-pointer">
            <FaWifi fontSize={"20px"} />
          </span>
        </div>
      </div>
      <div className="mt-[30px] md:w-[100%] lg:w-[45%] lgmin:w-[20%] md:mt-[15px]">
        <h4
          className={`font-black text-[16px] mb-[25px] lg:mb-[15px] md:pb-[8px] md:mb-0 md:border-b-[1px] ${themeBorder} md:border-solid`}
        >
          حساب کاربری
        </h4>
        <ul className="list-none p-0 text-[16px]">
          <li className="relative inline-block pt-[13px] text-darkGray hoverItem">
            آگهی های من
          </li>
          <div></div>
          <li className="relative inline-block pt-[13px] text-darkGray hoverItem">
            علاقه‌مندی ها
          </li>
          <div></div>
          <li className="relative inline-block pt-[13px] text-darkGray hoverItem">
            پروفایل
          </li>
          <div></div>
        </ul>
      </div>
      <div className="mt-[30px] md:w-[100%] lg:w-[45%] lgmin:w-[20%] lg:mt-[15px]">
        <h4
          className={`font-black text-[16px] mb-[25px] lg:mb-[15px] md:pb-[8px] md:mb-0 md:border-b-[1px] ${themeBorder} md:border-solid`}
        >
          املاک
        </h4>
        <ul className="list-none p-0 text-[16px]">
          <li className="relative inline-block pt-[13px] text-darkGray hoverItem">
            آپارتمان
          </li>
          <div></div>
          <li className="relative inline-block pt-[13px] text-darkGray hoverItem">
            ویلایی
          </li>
          <div></div>
          <li className="relative inline-block pt-[13px] text-darkGray hoverItem">
            زمین
          </li>
          <div></div>
        </ul>
      </div>
      <div className="mt-[30px] md:w-[100%] lg:w-[45%] lgmin:w-[20%] lg:mt-[15px]">
        <h4
          className={`font-black text-[16px] mb-[25px] lg:mb-[15px] md:pb-[8px] md:mb-0 md:border-b-[1px] ${themeBorder} md:border-solid`}
        >
          درباره ما
        </h4>
        <ul className="list-none p-0 text-[16px]">
          <li className="pl-[25px] relative pt-[13px] text-darkGray">
            <i
              className="fa fa-map-marker absolute left-0 top-[16px]"
              aria-hidden="true"
            ></i>{" "}
            اصفهان، دانشگاه اصفهان
          </li>
          <li className="pl-[25px] relative pt-[13px] text-darkGray">
            <i
              className="fa fa-phone absolute left-0 top-[16px]"
              aria-hidden="true"
            ></i>{" "}
            تلفن : 09123456789
          </li>
          <li className="pl-[25px] relative pt-[13px] text-darkGray">
            <i
              className="fa fa-envelope absolute left-0 top-[16px]"
              aria-hidden="true"
            ></i>{" "}
            ایمیل : pishkhooneh@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainFooter;
