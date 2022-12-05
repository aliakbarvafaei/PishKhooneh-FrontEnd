import React from "react";
// import Badge from '@mui/material/Badge';
import { Link, useHistory } from "react-router-dom";
// import { useTheme } from "../../contexts/theme";
import { useToast } from "../../contexts/ToastState";
import { useDispatch, useSelector } from "react-redux";

interface eachToast {
  title : string;
  description: string;
  key: number;
}


const myAccountDrop = [
  { title: "ورود", pathTo: "/login" },
  { title: "ثبت نام", pathTo: "/register" },
  { title: "پروفایل", pathTo: "/profile" },
  { title: "خروج", pathTo: "/" },
];

function MobileMenu() {
  const { user } = useSelector((state : any) => state.userAuth);
  const dispatch = useDispatch();
  const { setToastState } = useToast();

  const history = useHistory();
  // const { theme } = useTheme();
  const themeClass = "bg-darkModeLightBlack";
    // theme.mode === "DARK"
    //   ? "bg-darkModeLightBlack text-darkModeGray"
    //   : "bg-darkModeLightBlack";
  function addItemOnce(arr : Array<eachToast>, value : eachToast):Array<eachToast> {
      arr.push(value);
      return arr;
  }

  return (
    <>
      <div className="sm:fixed smmin:hidden sm:bottom-0 z-[25] flex flex-row justify-between items-center bg-darkModeLightBlack w-full h-16 text-darkGray text-[26px] px-[40px]">
        <Link to="/search">
          <span className="flex flex-col justify-center items-center">
            <i
              className="fa fa-plus"
              aria-hidden="true"
            ></i>
            <p className="text-[12px]">آگهی جدید</p>
          </span>
        </Link>
        <Link to="/wishlist">
          <span className="flex flex-col justify-center items-center">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <p className="text-[12px]">علاقه‌‌مندی</p>
          </span>
        </Link>
        <Link to="/cart">
          <span className="flex flex-col justify-center items-center">
            <i
              className="fa fa-home"
              aria-hidden="true"
            ></i>
            <p className="text-[12px]">قیمت</p>
          </span>
        </Link>
        <span className="flex flex-col justify-center items-center">
          <i className="fa fa-user group relative" aria-hidden="true">
            <div
              className={`${themeClass} absolute hidden group-hover:block hover:flex w-[100px] py-[10px] px-[20px] bottom-6 right-[-45px]
                  flex-col drop-shadow-lg z-[26]`}
            >
              {myAccountDrop.map((item, index) => {
                if (user) {
                  if (item.title === "خروج")
                    return (
                      <Link
                        className="text-right text-[14px] py-[12px] hoverItem block font-normal"
                        onClick={() => {
                          dispatch({ type: "logout" });
                          localStorage.setItem("token_user", JSON.stringify(""));
                          setToastState((old : Array<eachToast>) =>
                            addItemOnce(old.slice(), {
                              title: "2",
                              description: "Logout Successfully",
                              key: Math.random(),
                            })
                          );
                        }}
                        to={item.pathTo}
                        key={index}
                      >
                        {item.title}
                      </Link>
                    );
                  else if (item.title === "پروفایل")
                    return (
                      <Link
                        className="text-right text-[14px] py-[12px] hoverItem block font-normal"
                        to={item.pathTo}
                        key={index}
                      >
                        {item.title}
                      </Link>
                    );
                } else if (item.title !== "خروج" && item.title !== "پروفایل") {
                  return (
                    <Link
                      className="text-right text-[14px] py-[12px] hoverItem block font-normal"
                      to={item.pathTo}
                      key={index}
                    >
                      {item.title}
                    </Link>
                  );
                }
              })}
            </div>
          </i>
          <p className="text-[12px]">حساب</p>
        </span>
        {/* <i className="fa fa-cog group relative" aria-hidden="true">
          <div
            className={`${themeClass} absolute hidden group-hover:block hover:flex w-[150px] py-[10px] px-[20px] bottom-6 right-[-60px]
                flex-col drop-shadow-lg z-[26]`}
          >
            {submenuSetting.map((item, index) => {
              return (
                <Link
                  className="text-left text-[14px] py-[12px] hoverItem  font-normal"
                  to={item.pathTo}
                  key={index}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </i> */}
      </div>
    </>
  );
}

export default MobileMenu;
