import React, { useState } from "react";
// import { useTheme } from "../../contexts/theme";
import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/logo1.jpg";
import useSticky from "./useSticky";
import { Button } from "@material-ui/core";
import Hamburger from "./Hamburger/Hamburger";
import { Link } from "react-router-dom";

const titleMenus = [
  {
    title: "خرید",
    submenu: [
      { title: "آپارتمان", pathTo: "/" },
      { title: "ویلایی", pathTo: "/" },
    ],
  },
  {
    title: "رهن و اجاره",
    submenu: [
      { title: "آپارتمان", pathTo: "/" },
      { title: "ویلایی", pathTo: "/" },
    ],
  },
  {
    title: "قیمت خانه شما",
    submenu: [
      { title: "آپارتمان", pathTo: "/" },
      { title: "ویلایی", pathTo: "/" },
    ],
  }
];
// const submenuSetting = [
//   { title: "Language", pathTo: "/" },
//   { title: "Currency", pathTo: "/" },
// ];

function MainMenu() {
  // const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { sticky, stickyRef } = useSticky();

  const themeClass = "bg-white";
    // theme.mode === "DARK"
    //   ? "bg-darkModeLightBlack text-darkModeGray"
    //   : "bg-white";

  function handeHamburger() {
    setIsOpen((old) => !old);
  }
  const stickyClass = sticky ? "fixed top-0 z-[1001] w-[100%]" : "";

  return (
    <>
      <div
        ref={stickyRef}
        className={`${stickyClass} ${themeClass} flex flex-row items-center justify-between py-[20px] px-total shadow-[0_2px_4px_0_rgba(200,200,200)] box-border`}
      >
        <div className="flex flex-row justify-between items-center gap-[20px]">
          <span>
            <Link to="/home">
              <img
                className="w-[45px] cursor-pointer sm:w-[25px]"
                src={logo1}
                alt="title"
              />
            </Link>
          </span>
          <span>
            <Link to="/home">
              <img
                className="w-[60%] cursor-pointer sm:w-[40%] sm:absolute sm:left-[30%] sm:mt-[-5%]"
                src={logo}
                alt="title"
              />
            </Link>
          </span>
        </div>
        <div className="flex flex-row items-center justify-between gap-[30px]">
          <ul className="xl:hidden xlmin:flex flex-row items-center gap-[20px] m-0 list-none p-0">
            {titleMenus.map((titleMenu, index) => {
              return (
                <li className="group relative text-inherit" key={index}>
                  <button className="peer pl-0 text-[12px] text-darkGray font-bold">
                    {titleMenu.title}
                  </button>
                  {/* <i
                    className="fa fa-caret-down text-[12px] pr-[10px] text-darkGray cursor-pointer group-hover:text-red"
                    aria-hidden="true"
                  ></i> */}
                  {index!==titleMenus.length-1 ? <span className="pr-[12px] text-darkGray">|</span>:<></>}
                  <div
                    className={`${themeClass} absolute hidden peer-hover:block hover:flex w-[150px] py-[10px] px-[20px] left-0
                flex-col drop-shadow-lg z-[22]`}
                  >
                    {titleMenu.submenu.map((item, index) => {
                      return (
                        <Link
                          className={`text-right text-[14px] py-[12px] hoverItem`}
                          to={item.pathTo}
                          key={index}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="xl:inline xlmin:hidden curser-pointer">
            <i
              style={{ fontSize: "25px" }}
              className="fa fa-bars cursor-pointer"
              aria-hidden="true"
              onClick={handeHamburger}
            ></i>
            <Hamburger
              isOpen={isOpen}
              handeHamburger={handeHamburger}
              items={titleMenus}
            />
          </div>

          <ul className="sm:hidden smmin:flex flex-row m-0 items-center list-none">
            <li>
              <Button variant="outlined" style={{fontFamily: 'inherit'}}>ثبت آگهی</Button>
            </li>
            {/* <li className="group text-inherit pl-[12px]">
              <i
                style={{ fontSize: "25px" }}
                onClick={() => history.push("/search")}
                className="peer fa fa-search cursor-pointer group-hover:text-red"
                aria-hidden="true"
              ></i>
            </li>
            <li className="group relative text-inherit pl-[12px]">
              <i
                style={{ fontSize: "25px" }}
                className="peer fa fa-cog px-[1px] py-[1px] cursor-pointer group-hover:text-red"
                aria-hidden="true"
              ></i>
              <div
                className={`${themeClass} absolute hidden peer-hover:block hover:flex w-[200px] py-[10px] px-[20px] right-0
              flex-col drop-shadow-lg z-[22]`}
              >
                {submenuSetting.map((item, index) => {
                  return (
                    <Link
                      className="text-left text-[14px] py-[12px] hoverItem"
                      to={item.pathTo}
                      key={index}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </li>
            <li className="group relative text-inherit pl-[12px]">
              <i
                style={{ fontSize: "25px" }}
                onClick={() => history.push("/cart")}
                className="peer fa fa-shopping-cart px-[1px] py-[1px] cursor-pointer group-hover:text-red"
                aria-hidden="true"
              ></i>
            </li> */}
          </ul>
        </div>
      </div>
      {sticky && (
        <div
          style={{
            height: `${stickyRef.current?.clientHeight}px`,
          }}
        />
      )}
    </>
  );
}

export default MainMenu;
