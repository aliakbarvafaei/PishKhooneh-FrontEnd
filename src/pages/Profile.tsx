import React, { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Ads/Card";
import HeaderNewShort from "../components/HeaderNew/HeaderNewShort";
import TitlePages from "../components/TitlePages/TitlePages";
import { useToast } from "../contexts/ToastState";
import { getUser, updatePassword } from "../services/api";
import { eachToast, InformationUserTypes, ProfileInputTypes, statesRedux } from "../ts/interfaces";

const Profile:React.FC = () => {
  const themeClass = "bg-white"; 
  const themeBorder = "border-darkModeGray"; 
  const themeBorder2 = "border-darkModeGray"; 
  const dispatch = useDispatch();

  const { setToastState } = useToast();
  const [ myAds, setMyAds ] = useState([]);

  const [showMenu, setShowMenu] = useState("information");
  const styleSelectedMenu = "text-red border-red border-b-solid border-b-[2px]";
  const { user } = useSelector((state : statesRedux) => state.userAuth);
  const [userInformation, setUserInformation] = useState<false | InformationUserTypes>(false);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInputTypes>();
  const passwordId = useId();
  const passwordConfirm = useId();
  const passwordIdCurrent = useId();

  const [iconPassword, setIconPassword] = useState("fa-eye-slash");
  const [passType, setPassType] = useState("password");

  function addItemOnce(arr:Array<eachToast>, value:eachToast) {
    arr.push(value);
    return arr;
  }

  function handlePassword() {
    setIconPassword((old) =>
      old === "fa-eye-slash" ? "fa-eye" : "fa-eye-slash"
    );
    setPassType((old) => (old === "password" ? "text" : "password"));
  }

  function formSubmit() {
    
    const LastPassword = (document.getElementById(passwordIdCurrent) as HTMLInputElement).value;
    const NewPassword = (document.getElementById(passwordId) as HTMLInputElement).value;

    (document.getElementById(passwordIdCurrent) as HTMLInputElement).value = "";
    (document.getElementById(passwordId) as HTMLInputElement).value = "";
    (document.getElementById(passwordConfirm) as HTMLInputElement).value = "";

    updatePassword(user as string, LastPassword, NewPassword)
      .then((response) => {
        if (response.status === 200) {
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "1",
              description: `رمز عبور با موفقیت تغییر یافت`,
              key: Math.random(),
            })
          );
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "2",
              description: "رمز عبور نادرست است",
              key: Math.random(),
            })
          );
        } else if (err.response.status === 404) {
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "2",
              description: "کاربر یافت نشد ابتدا ثبت‌ نام کنید ...",
              key: Math.random(),
            })
          );
        } else {
          console.error(err);
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "2",
              description: "سرور در دسترس نیست",
              key: Math.random(),
            })
          );
        }
      });
  }
  useEffect(() => {
    const value : string | null = localStorage.getItem("token_user");
    getUser(JSON.parse(value as string))
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          setLoading(false);
          setUserInformation(response.data);
          setMyAds(response.data.homes);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          dispatch({ type: "logout" });
          setToastState((old : Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "2",
              description:
                "احراز هویت ما مشکل مواجه شد لطفا مجدد وارد شوید",
              key: Math.random(),
            })
          );
          localStorage.setItem("token_user", JSON.stringify(""));
        }else{
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "2",
              description: "سرور دردسترس نیست",
              key: Math.random(),
            })
          );
          console.error(err);
        }
      });
  }, []);

  return (
    <div>
      <HeaderNewShort />
      <TitlePages title="پروفایل" />
      <div
        className={`${themeClass} px-total flex smmin:flex-row sm:flex-col justify-between`}
      >
        <div
          className={`smmin:w-[25%] sm:w-[100%] smmin:my-[50px] sm:my-[20px] py-[35px] sm:px-[8%] smmin:px-[2%] rounded-md border-solid border-[1px] ${themeBorder}`}
        >
          <h4
            className={`${
              showMenu === "information" ? styleSelectedMenu : themeBorder2
            } mb-[20px] pb-[10px] md:text-[12px] mdmin:text-[14px] font-semibold mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`}
            onClick={() => setShowMenu("information")}
          >
            اطلاعات
          </h4>
          <h4
            className={`${
              showMenu === "change password" ? styleSelectedMenu : themeBorder2
            } mb-[20px] pb-[10px] md:text-[12px] mdmin:text-[14px] font-semibold mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`}
            onClick={() => setShowMenu("change password")}
          >
            تغییر رمز عبور
          </h4>
          <h4
            className={`${
              showMenu === "my ads" ? styleSelectedMenu : themeBorder2
            } mb-[20px] pb-[10px] md:text-[12px] mdmin:text-[14px] font-semibold mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`}
            onClick={() => setShowMenu("my ads")}
          >
            آگهی‌های من
          </h4>
        </div>
        <div
          className={`sm:w-[100%] smmin:w-[73%] smmin:my-[50px] sm:my-[20px]`}
        >
          {showMenu === "information" && (
            <div
              className={`flex flex-col w-[100%] py-[40px] px-[10%] gap-[20px] rounded-md border-solid border-[1px] ${themeBorder}`}
            >
              {loading && (
                <div className="text-center pt-[15px]">
                  <i
                    className="fa fa-spinner fa-spin text-[50px]"
                    aria-hidden="true"
                  ></i>
                </div>
              )}
              {!loading && (
                <>
                  <div className="mb-[30px]">
                    <label
                      htmlFor="fullName-input"
                      className="block text-[14px] font-bold mb-[8px]"
                    >
                      نام کامل
                    </label>
                    <input
                      disabled={true}
                      className={`${themeClass} ${themeBorder} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[14px] }`}
                      placeholder={userInformation? userInformation.full_name:""}
                    />
                  </div>
                  <div className="mb-[30px]">
                    <label
                      htmlFor="callNumber-input"
                      className="block text-[14px] font-bold mb-[8px]"
                    >
                      شماره تماس
                    </label>
                    <input
                      disabled={true}
                      className={`${themeClass} ${themeBorder} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[14px] `}
                      placeholder={userInformation? userInformation.phone_number:""}
                    />
                  </div>
                  <div className="mb-[30px]">
                    <label
                      htmlFor="email-input"
                      className="block text-[14px] font-bold mb-[8px]"
                    >
                      ایمیل
                    </label>
                    <input
                      disabled={true}
                      className={`${themeClass} ${themeBorder} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[14px] }`}
                      placeholder={userInformation? userInformation.username:""}
                    />
                  </div>
                  <div className="mb-[30px]">
                    <label
                      htmlFor="address-input"
                      className="block text-[14px] font-bold mb-[8px]"
                    >
                      آدرس
                    </label>
                    <input
                      disabled={true}
                      className={`${themeClass} ${themeBorder} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[14px] }`}
                      placeholder={userInformation? userInformation.address:""}
                    />
                  </div>
                  <div className="mb-[30px]">
                    <label
                      htmlFor="bio-input"
                      className="block text-[14px] font-bold mb-[8px]"
                    >
                      توضیحات
                    </label>
                    <input
                      disabled={true}
                      className={`${themeClass} ${themeBorder} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[14px] }`}
                      placeholder={userInformation? userInformation.bio:""}
                    />
                  </div>
                </>
              )}
            </div>
          )}
          {showMenu === "change password" && (
            <div
              className={`flex flex-col w-[100%] py-[40px] px-[10%] gap-[20px] rounded-md border-solid border-[1px] ${themeBorder}`}
            >
              {loading && (
                <div className="text-center pt-[15px]">
                  <i
                    className="fa fa-spinner fa-spin text-[50px]"
                    aria-hidden="true"
                  ></i>
                </div>
              )}
              {!loading && (
                <form className="text-left" onSubmit={handleSubmit(formSubmit)}>
                  <div className="mb-[30px]">
                    <label
                      htmlFor="passwordCurrent-input"
                      className="block text-[14px] text-right font-bold mb-[8px]"
                    >
                      رمز عبور فعلی
                    </label>
                    <input
                      type="text"
                      className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                        errors.passwordCurrent
                          ? "border-red outline-red"
                          : `${themeBorder}`
                      }`}
                      data-testid="passwordCurrent-input"
                      placeholder="رمز عبور فعلی"
                      id={passwordIdCurrent}
                      {...register("passwordCurrent", {
                        required: "رمز عبور اجباری است...",
                        minLength: {
                          value: 8,
                          message: "رمز عبور حداقل 8 کاراکتر است...",
                        },
                      })}
                    />
                    {errors.passwordCurrent && (
                      <>
                        <div className="text-red text-right pt-[5px]">
                          <span className="pr-[5px]">
                            {errors.passwordCurrent.message}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mb-[30px] relative">
                    <label
                      htmlFor="passwordNew-input"
                      className="block text-[14px] text-right font-bold mb-[8px]"
                    >
                      رمز عبور جدید
                    </label>
                    <input
                      type={passType}
                      className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                        errors.passwordNew
                          ? "border-red outline-red"
                          : `${themeBorder}`
                      }`}
                      data-testid="passwordNew-input"
                      placeholder=" رمز عبور جدید"
                      id={passwordId}
                      {...register("passwordNew", {
                        required: "رمز عبور اجباری است...",
                        minLength: {
                          value: 8,
                          message: "رمز عبور حداقل 8 کاراکتر است...",
                        },
                      })}
                    />
                    {!errors.passwordNew && (
                      <i
                        className={`fa ${iconPassword} absolute left-[2%] bottom-[20px] cursor-pointer`}
                        onClick={handlePassword}
                        aria-hidden="true"
                      ></i>
                    )}
                    {errors.passwordNew && (
                      <>
                        <i
                          className={`fa ${iconPassword} absolute left-[2%] bottom-[48px] cursor-pointer`}
                          onClick={handlePassword}
                          aria-hidden="true"
                        ></i>
                        <div className="text-red text-right pt-[5px]">
                          <i
                            className="fa fa-exclamation-triangle"
                            aria-hidden="true"
                          ></i>
                          <span className="pr-[5px]">
                            {errors.passwordNew.message}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mb-[30px] relative">
                    <label
                      htmlFor="passwordConfirm-input"
                      className="block text-[14px] text-right font-bold mb-[8px]"
                    >
                      تایید رمز عبور
                    </label>
                    <input
                      type="text"
                      className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                        errors.passwordConfirm
                          ? "border-red outline-red"
                          : `${themeBorder}`
                      }`}
                      data-testid="passwordConfirm-input"
                      placeholder="تایید رمز عبور"
                      id={passwordConfirm}
                      {...register("passwordConfirm", {
                        required: "رمز عبور اجباری است...",
                        minLength: {
                          value: 8,
                          message: "رمز عبور حداقل 8 کاراکتر است...",
                        },
                        validate: (val) => {
                          if (
                            (document.getElementById(passwordId) as HTMLInputElement).value !== val
                          ) {
                            return "تایید رمز عبور شما یکسان نیست ...";
                          }
                        },
                      })}
                    />
                    {errors.passwordConfirm && (
                      <>
                        <div className="text-red text-right pt-[5px]">
                          <span className="pr-[5px]">
                            {errors.passwordConfirm.message}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="h-[50px] min-w-[150px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
                  >
                    تغییر
                  </button>
                </form>
              )}
            </div>
          )}
          {showMenu === "my ads" && (
            <div
              className={`w-[100%] py-[40px] px-[2%] text-center rounded-md border-solid border-[1px] ${themeBorder}`}
            >
              {loading && (
                <div className="text-center pt-[15px]">
                  <i
                    className="fa fa-spinner fa-spin text-[50px]"
                    aria-hidden="true"
                  ></i>
                </div>
              )}
              {!loading && (
                <div
                className={`flex flex-row flex-wrap justify-center w-full gap-[1%]`}>
                  {myAds.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="md:w-[48%] xl:w-[48%] xlmin:w-[32%]"
                      >
                        <Card item={item} dir='r' />
                        <div className="flex flex-row gap-[3%] justify-center items-center mb-[20px] md:ml-[5px] lg:ml-[10px] lgmin:ml-[20px]">
                          <button
                            type="button"
                            className="min-w-fit w-[100%] py-[5%] rounded-md font-extrabold text-[14px] md:text-[12px] sm:text-[10px] bg-green text-white hover:bg-white hover:outline-green hover:outline hover:outline-[2px] hover:outline-solid hover:text-green"
                          >
                            ویرایش
                          </button>
                          <button
                            type="button"
                            className="min-w-fit w-[100%] py-[5%] rounded-md font-extrabold text-[14px] md:text-[12px] sm:text-[10px] bg-red text-white hover:bg-white hover:outline-red hover:outline hover:outline-[2px] hover:outline-solid hover:text-red"
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  {myAds.length===0? <div className="text-gray">آگهی وجود ندارد</div>:<></>}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
