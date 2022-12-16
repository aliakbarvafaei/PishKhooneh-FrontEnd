import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { NewAdAPI } from "../../services/api/index";
import { useHistory } from "react-router-dom";
import { useToast } from "../../contexts/ToastState";
import { eachToast, NewAdInputTypes } from "../../ts/interfaces.js";

const NewAdBox:React.FC = () => {
  const { setToastState } = useToast();
  const history = useHistory();

  const categoryId = useId();
  const typeId = useId();
  const cityId = useId();
  const regionId = useId();
  const roomId = useId();
  const yearId = useId();
  const floorId = useId();
  const elevatorId = useId();
  const parkingId = useId();
  const meterageId = useId();
  const priceId = useId();
  const titleId = useId();
  const callNumberId = useId();
  const emailId = useId();
  const passwordId = useId();
  const addressId = useId();
  const bioId = useId();

  const themeClass = "bg-white";
  const themeBorder = "border-darkModeGray";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAdInputTypes>();
  function addItemOnce(arr : Array<eachToast>, value: eachToast) {
    arr.push(value);
    return arr;
  }
  function formSubmit() {
    // setToastState(old=>addItemOnce(old.slice(),{
    //     title: "3",
    //     description: "", key:Math.random()
    //     }))

    const fname = (document.getElementById(titleId) as HTMLInputElement).value;
    const callNumber = (document.getElementById(callNumberId) as HTMLInputElement).value;
    const email = (document.getElementById(emailId) as HTMLInputElement).value;
    const password = (document.getElementById(passwordId) as HTMLInputElement).value;
    const address = (document.getElementById(addressId) as HTMLInputElement).value;
    const bio = (document.getElementById(bioId) as HTMLInputElement).value;

    (document.getElementById(titleId) as HTMLInputElement).value = "";
    (document.getElementById(callNumberId) as HTMLInputElement).value = "";
    (document.getElementById(emailId) as HTMLInputElement).value = "";
    (document.getElementById(passwordId) as HTMLInputElement).value = "";
    (document.getElementById(addressId) as HTMLInputElement).value = "";
    (document.getElementById(bioId) as HTMLInputElement).value = "";

    NewAdAPI(fname, callNumber, email, password, address, bio)
      .then((response) => {
        if (response.status === 201) {
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "1",
              description: "ثبت نام با موفقیت انجام شد",
              key: Math.random(),
            })
          );
          history.push("/login");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "2",
              description: "کاربر قبلا ثبت نام کرده است",
              key: Math.random(),
            })
          );
        } else {
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
  }
  const [iconPassword, setIconPassword] = useState("fa-eye-slash");
  const [passType, setPassType] = useState("password");
  function handlePassword() {
    setIconPassword((old) =>
      old === "fa-eye-slash" ? "fa-eye" : "fa-eye-slash"
    );
    setPassType((old) => (old === "password" ? "text" : "password"));
  }

  return (
    <>
      <div className={`${themeClass} py-[40px] px-total`}>
        <div className="w-[100%] pt-[10px]">
          <h3 className="text-[24px] font-bold mb-[20px]">ایجاد آگهی جدید</h3>
          <div
            className={`${themeBorder} min-h-[336px] p-[30px] border-[1px] border-solid`}
          >
            <form
              className="text-left flex flex-row flex-wrap justify-between gap-[10px]"
              onSubmit={handleSubmit(formSubmit)}
            >
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center justify-between">
                    <label htmlFor="category-select" className="inline text-[14px] text-right font-bold" >دسته‌بندی : </label>
                    <select data-testid="category-select" className={`${themeClass} w-[70%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.category ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={categoryId}
                    {...register("category", {
                        required: "دسته‌بندی اجباری است...",
                    })}
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="فروش">فروش</option>
                        <option value="رهن و اجاره">رهن و اجاره</option>
                    </select>
                </span>
                {errors.category && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.category.message}</span>
                  </div>
                )}
              </div>
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center justify-between">
                    <label htmlFor="type-select" className="inline text-[14px] text-right font-bold" >نوع : </label>
                    <select data-testid="type-select" className={`${themeClass} w-[70%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.type ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={typeId}
                    {...register("type", {
                        required: "نوع اجباری است...",
                    })}
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="آپارتمان">آپارتمان</option>
                        <option value="ویلایی">ویلایی</option>
                    </select>
                </span>
                {errors.type && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.type.message}</span>
                  </div>
                )}
              </div>
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center  justify-between">
                    <label htmlFor="city-select" className="inline text-[14px] text-right font-bold" >شهر : </label>
                    <select data-testid="city-select" className={`${themeClass} w-[70%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.city ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={cityId}
                    {...register("city", {
                        required: "شهر اجباری است...",
                    })}
                    >
                        <option value="تهران">تهران</option>
                    </select>
                </span>
                {errors.city && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.city.message}</span>
                  </div>
                )}
              </div>
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center  justify-between">
                    <label htmlFor="region-select" className="inline text-[14px] text-right font-bold" >منطقه : </label>
                    <select data-testid="region-select" className={`${themeClass} w-[70%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.region ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={regionId}
                    {...register("region", {
                        required: "منطقه اجباری است...",
                    })}
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="منطقه1">منطقه1</option>
                        <option value="منطقه2">منطقه2</option>
                    </select>
                </span>
                {errors.region && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.region.message}</span>
                  </div>
                )}
              </div>
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center  justify-between">
                    <label htmlFor="room-select" className="inline text-[14px] text-right font-bold" >تعداد اتاق : </label>
                    <select data-testid="room-select" className={`${themeClass} w-[70%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.room ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={roomId}
                    {...register("room", {
                        required: "اتاق اجباری است...",
                    })}
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="بدون اتاق">بدون اتاق</option>
                        <option value="یک">یک</option>
                        <option value="دو">دو</option>
                        <option value="سه">سه</option>
                        <option value="بیشتر از سه">بیشتر از سه</option>
                    </select>
                </span>
                {errors.room && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.room.message}</span>
                  </div>
                )}
              </div>
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center  justify-between">
                    <label htmlFor="year-select" className="inline text-[14px] text-right font-bold" >سال ساخت : </label>
                    <select data-testid="year-select" className={`${themeClass} w-[70%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.year ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={yearId}
                    {...register("year", {
                        required: "سال ساخت اجباری است...",
                    })}
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="1401">1401</option>
                        <option value="1400">1400</option>
                        <option value="1399">1399</option>
                        <option value="1398">1398</option>
                        <option value="قبا از 1398">قبل از 1398</option>
                    </select>
                </span>
                {errors.year && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.year.message}</span>
                  </div>
                )}
              </div>
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center  justify-between">
                    <label htmlFor="floor-select" className="inline text-[14px] text-right font-bold" >طبقه : </label>
                    <select data-testid="floor-select" className={`${themeClass} w-[70%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.floor ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={floorId}
                    {...register("floor", {
                        required: "طبقه اجباری است...",
                    })}
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="همکف">همکف</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </span>
                {errors.floor && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.floor.message}</span>
                  </div>
                )}
              </div>
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center  justify-between">
                    <label htmlFor="elevator-select" className="inline text-[14px] text-right font-bold" >آسانسور : </label>
                    <select data-testid="elevator-select" className={`${themeClass} w-[70%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.elevator ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={elevatorId}
                    {...register("elevator", {
                        required: "آسانسور اجباری است...",
                    })}
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="ندارد">ندارد</option>
                        <option value="دارد">دارد</option>
                    </select>
                </span>
                {errors.elevator && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.elevator.message}</span>
                  </div>
                )}
              </div>
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center  justify-between">
                    <label htmlFor="parking-select" className="inline text-[14px] text-right font-bold" >پارکینگ : </label>
                    <select data-testid="parking-select" className={`${themeClass} w-[70%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.parking ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={parkingId}
                    {...register("parking", {
                        required: "پارکینگ اجباری است...",
                    })}
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="ندارد">ندارد</option>
                        <option value="دارد">دارد</option>
                    </select>
                </span>
                {errors.parking && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.parking.message}</span>
                  </div>
                )}
              </div>
              <div className="w-[100%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center">
                    <legend className="inline text-[14px] text-right font-bold">آگهی دهنده : </legend>

                    <div className="flex justify-center items-center gap-[5px]">
                    <input type="radio" id="person" name="creator" value="شخصی"
                            checked />
                    <label htmlFor="person" className="text-[12px]">شخصی</label>
                    </div>

                    <div className="flex justify-center items-center gap-[5px]">
                    <input type="radio" id="shop" name="creator" value="مشاور املاک" />
                    <label htmlFor="shop" className="text-[12px]">مشاور املاک</label>
                    </div>
                </span>
              </div>
              <div className="w-[100%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center">
                    <legend className="inline text-[14px] text-right font-bold">انباری : </legend>

                    <div className="flex justify-center items-center gap-[5px]">
                    <input type="radio" id="دارد" name="warehouse" value="دارد"
                            checked />
                    <label htmlFor="دارد" className="text-[12px]">دارد</label>
                    </div>

                    <div className="flex justify-center items-center gap-[5px]">
                    <input type="radio" id="دارد" name="warehouse" value="ندارد" />
                    <label htmlFor="ندارد" className="text-[12px]">ندارد</label>
                    </div>
                </span>
              </div>
              <div className="sm:w-[100%] smmin:w-[45%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center">
                    <label htmlFor="meterage-select" className="inline text-[14px] text-right font-bold" >متراژ : </label>
                    <input type='number' placeholder="متر مربع" data-testid="meterage-select" className={`${themeClass} w-[70%] px-[4%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.meterage ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={meterageId}
                    {...register("meterage", {
                        required: "متراژ اجباری است...",
                    })}
                    />
                </span>
                {errors.meterage && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.meterage.message}</span>
                  </div>
                )}
              </div>
              <div className="sm:w-[100%] smmin:w-[45%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center">
                    <label htmlFor="price-select" className="inline text-[14px] text-right font-bold" >قیمت : </label>
                    <input type='price' placeholder="تومان" data-testid="meterage-select" className={`${themeClass} w-[70%] px-[4%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.price ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={priceId}
                    {...register("price", {
                        required: "قیمت اجباری است...",
                    })}
                    />
                </span>
                {errors.price && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.price.message}</span>
                  </div>
                )}
              </div>
              <div className="mb-[30px] md:w-[100%] mdmin:w-[48%]">
                <label
                  htmlFor="title-input"
                  className="block text-[14px] text-right font-bold mb-[8px]"
                >
                  عنوان
                </label>
                <input
                  type="text"
                  className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                    errors.title ? "border-red outline-red" : `${themeBorder}`
                  }`}
                  data-testid="title-input"
                  placeholder="عنوان"
                  id={titleId}
                  {...register("title", {
                    required: "عنوان اجباری است...",
                  })}
                />
                {errors.title && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.title.message}</span>
                  </div>
                )}
              </div>
              <div className="mb-[30px] md:w-[100%] mdmin:w-[48%]">
                <label
                  htmlFor="callNumber-input"
                  className="block text-[14px] text-right font-bold mb-[8px]"
                >
                  شماره تماس
                </label>
                <input
                  type="text"
                  className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                    errors.callNumber ? "border-red outline-red" : `${themeBorder}`
                  }`}
                  data-testid="callNumber-input"
                  placeholder="شماره تماس"
                  id={callNumberId}
                  {...register("callNumber", {
                    required: "شماره تماس اجباری است...",
                  })}
                />
                {errors.callNumber && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.callNumber.message}</span>
                  </div>
                )}
              </div>
              <div className="mb-[30px] md:w-[100%] mdmin:w-[48%]">
                <label
                  htmlFor="email-input"
                  className="block text-[14px] text-right font-bold mb-[8px]"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                    errors.email ? "border-red outline-red" : `${themeBorder}`
                  }`}
                  data-testid="email-input"
                  placeholder="ایمیل"
                  id={emailId}
                  {...register("email", {
                    required: "ایمیل اجباری است...",
                  })}
                />
                {errors.email && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.email.message}</span>
                  </div>
                )}
              </div>
              <div className="mb-[30px] md:w-[100%] mdmin:w-[48%] relative">
                <label
                  htmlFor="password-input"
                  className="block text-[14px] text-right font-bold mb-[8px]"
                >
                  رمز عبور
                </label>
                <input
                  type={passType}
                  className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                    errors.password
                      ? "border-red outline-red"
                      : `${themeBorder}`
                  }`}
                  data-testid="password-input"
                  placeholder="رمز عبور"
                  id={passwordId}
                  {...register("password", {
                    required: "رمز عبور اجباری است...",
                    minLength: {
                      value: 8,
                      message: "رمز عبور حداقل 8 کاراکتر است...",
                    },
                  })}
                />
                {!errors.password && (
                  <i
                    className={`fa ${iconPassword} absolute left-[2%] bottom-[20px] cursor-pointer`}
                    onClick={handlePassword}
                    aria-hidden="true"
                  ></i>
                )}
                {errors.password && (
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
                        {errors.password.message}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="mb-[30px] md:w-[100%] mdmin:w-[48%] relative">
                <label
                  htmlFor="address-input"
                  className="block text-[14px] text-right font-bold mb-[8px]"
                >
                  آدرس
                </label>
                <input
                  type="text"
                  className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                    errors.address
                      ? "border-red outline-red"
                      : `${themeBorder}`
                  }`}
                  data-testid="address-input"
                  placeholder="آدرس"
                  id={addressId}
                />
              </div>
              <div className="mb-[30px] md:w-[100%] mdmin:w-[48%] relative">
                <label
                  htmlFor="bio-input"
                  className="block text-[14px] text-right font-bold mb-[8px]"
                >
                  توضیحات
                </label>
                <input
                  type="text"
                  className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                    errors.bio
                      ? "border-red outline-red"
                      : `${themeBorder}`
                  }`}
                  data-testid="bio-input"
                  placeholder="توضیحات"
                  id={bioId}
                />
              </div>
              
              <button
                type="submit"
                className="h-[50px] min-w-[150px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
              >
                ثبت نام
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewAdBox;
