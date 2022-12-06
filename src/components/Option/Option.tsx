import React from "react";
import Truck from "../../assets/images/option/truck.png";
import Clock from "../../assets/images/option/clock.png";
import Speaker from "../../assets/images/option/speaker.png";

const Option : React.FC = () => {
  const themeClass : string = "bg-white";
  const themeBorder : string = "border-darkModeGray";

  return (
    <div className={`${themeClass} pb-[40px] px-total`}>
      <div
        className={`py-[50px] flex lg:flex-col lg:items-center lg:gap-[20px] lgmin:flex-row lgmin:justify-between border-y-[1px] border-y-solid ${themeBorder}`}
      >
        <div className={`group flex lg:flex-col lgmin:flex-row items-center`}>
          <img
            src={Truck}
            className="w-[60px] pl-[10px] hover:scale-125 duration-[500ms]"
            alt="truck"
          />
          <div>
            <h2 className="text-[16px] font-bold lg:text-center group-hover:text-red">
              FREE SHIPPING
            </h2>
            <p className="text-[14px] text-darkGray lg:text-center">
              Free Shipping World Wide
            </p>
          </div>
        </div>
        <div
          className={`lg:hidden border-r-[1px] border-r-solid ${themeBorder}`}
        ></div>
        <div className={`group flex lg:flex-col lgmin:flex-row items-center`}>
          <img
            src={Clock}
            className="w-[60px] pl-[10px] hover:scale-125 duration-[500ms]"
            alt="clock"
          />
          <div>
            <h2 className="text-[16px] font-bold lg:text-center group-hover:text-red">
              24 X 7 SERVICE
            </h2>
            <p className="text-[14px] text-darkGray lg:text-center">
              Online Service For New Customer
            </p>
          </div>
        </div>
        <div
          className={`lg:hidden border-r-[1px] border-r-solid ${themeBorder}`}
        ></div>
        <div className="group flex lg:flex-col lgmin:flex-row items-center">
          <img
            src={Speaker}
            className="w-[60px] pl-[10px] hover:scale-125 duration-[500ms]"
            alt="speaker"
          />
          <div>
            <h2 className="text-[16px] font-bold lg:text-center group-hover:text-red">
              FESTIVAL OFFER
            </h2>
            <p className="text-[14px] text-darkGray lg:text-center">
              New Online Special Festival Offer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option;
