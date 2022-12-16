import React, { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { NewAdAPI } from "../../services/api/index";
import { useHistory } from "react-router-dom";
import { useToast } from "../../contexts/ToastState";
import { eachToast, NewAdInputTypes } from "../../ts/interfaces.js";
import { convertorPrice } from "../../ts/functions";

const NewAdBox:React.FC = () => {
  const { setToastState } = useToast();
  const [ price, setPrice ] = useState<null | number>(null);
  const [ imagesFile, setImagesFile ] = useState<FileList | null>(null);
  const [preview, setPreview] = useState([])

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
  const photoId = useId();
  const titleId = useId();
  const callNumberId = useId();
  const bioId = useId();

  const themeClass = "bg-white";
  const themeBorder = "border-darkModeGray";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAdInputTypes>();

  const priceInput = register("price", {
    required: "قیمت اجباری است...",
  })

  function addItemOnce(arr : Array<eachToast>, value: eachToast) {
    arr.push(value);
    return arr;
  }
  function handlePrice(){
    setPrice(parseInt((document.getElementById(priceId) as HTMLInputElement).value));
  }
  function handleFile(e : React.MouseEvent) {
    setImagesFile((document.getElementById(photoId) as HTMLInputElement).files);
  }

  function formSubmit() {
    // setToastState(old=>addItemOnce(old.slice(),{
    //     title: "3",
    //     description: "", key:Math.random()
    //     }))
    const creatorInput = (document.getElementsByName('creator') as any);
    var creator;
    for(var i = 0; i < creatorInput.length; i++) {
      if(creatorInput[i].checked)
      {
        creator = (creatorInput[i].value)
        creatorInput[i].checked = false;
        break ;
      }
    }
    const warehouseInput = (document.getElementsByName('warehouse') as any);
    var warehouse;
    for(var i = 0; i < warehouseInput.length; i++) {
      if(warehouseInput[i].checked)
      {
        warehouse = (warehouseInput[i].value);
        warehouseInput[i].checked = false;
        break ;
      }
    }
    const category = (document.getElementById(categoryId) as HTMLInputElement).value;
    const type = (document.getElementById(typeId) as HTMLInputElement).value;
    const city = (document.getElementById(cityId) as HTMLInputElement).value;
    const region = (document.getElementById(regionId) as HTMLInputElement).value;
    const room = (document.getElementById(roomId) as HTMLInputElement).value;
    const year = (document.getElementById(yearId) as HTMLInputElement).value;
    const floor = (document.getElementById(floorId) as HTMLInputElement).value;
    const elevator = (document.getElementById(elevatorId) as HTMLInputElement).value;
    const parking = (document.getElementById(parkingId) as HTMLInputElement).value;
    const meterage = (document.getElementById(meterageId) as HTMLInputElement).value;
    const price = (document.getElementById(priceId) as HTMLInputElement).value;
    const photo = imagesFile;
    setImagesFile(null);
    setPreview([]);
    const title = (document.getElementById(titleId) as HTMLInputElement).value;
    const callNumber = (document.getElementById(callNumberId) as HTMLInputElement).value;
    const bio = (document.getElementById(bioId) as HTMLInputElement).value;

    (document.getElementById(categoryId) as HTMLInputElement).value = "";
    (document.getElementById(typeId) as HTMLInputElement).value = "";
    (document.getElementById(cityId) as HTMLInputElement).value = "تهران";
    (document.getElementById(regionId) as HTMLInputElement).value = "";
    (document.getElementById(roomId) as HTMLInputElement).value = "";
    (document.getElementById(yearId) as HTMLInputElement).value = "";
    (document.getElementById(floorId) as HTMLInputElement).value = "";
    (document.getElementById(elevatorId) as HTMLInputElement).value = "";
    (document.getElementById(parkingId) as HTMLInputElement).value = "";
    (document.getElementById(meterageId) as HTMLInputElement).value = "";
    (document.getElementById(priceId) as HTMLInputElement).value = "";
    setPrice(null);
    // (document.getElementById(photoId) as HTMLInputElement).value = "";
    (document.getElementById(titleId) as HTMLInputElement).value = "";
    (document.getElementById(callNumberId) as HTMLInputElement).value = "";
    (document.getElementById(bioId) as HTMLInputElement).value = "";
    NewAdAPI(category, type, city, region, room, year, floor, elevator, parking, meterage, price, photo, title, callNumber, bio, creator, warehouse)
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
      // history.go(0);
  }

  useEffect(() => {
    if (!imagesFile || imagesFile.length===0) {
        setPreview([])
        return
    }

    var arr = [];
    for(var i=0;i<imagesFile.length;i++){
      const objectUrl = URL.createObjectURL(imagesFile[i])
      arr.push(objectUrl);
    }

    setPreview(arr as any);
  }, [imagesFile])

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
                    <input type="radio" {...register("creator",{
                        required: "ارائه دهنده اجباری است...",
                    })} id="person" name="creator" value="شخصی"
                             />
                    <label htmlFor="person" className="text-[12px]">شخصی</label>
                    </div>

                    <div className="flex justify-center items-center gap-[5px]">
                    <input type="radio" {...register("creator",{
                        required: "ارائه دهنده اجباری است...",
                    })} id="shop" name="creator" value="مشاور املاک" />
                    <label htmlFor="shop" className="text-[12px]">مشاور املاک</label>
                    </div>
                </span>
                {errors.creator && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.creator.message}</span>
                  </div>
                )}
              </div>
              <div className="w-[100%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center">
                    <legend className="inline text-[14px] text-right font-bold">انباری : </legend>

                    <div className="flex justify-center items-center gap-[5px]">
                    <input type="radio" {...register("warehouse",{
                        required: " انباری اجباری است...",
                    })} id="دارد" name="warehouse" value="دارد"
                             />
                    <label htmlFor="دارد" className="text-[12px]">دارد</label>
                    </div>

                    <div className="flex justify-center items-center gap-[5px]">
                    <input type="radio" {...register("warehouse",{
                        required: " انباری اجباری است...",
                    })} id="دارد" name="warehouse" value="ندارد" />
                    <label htmlFor="ندارد" className="text-[12px]">ندارد</label>
                    </div>
                </span>
                {errors.warehouse && (
                  <div className="text-red text-right pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pr-[5px]">{errors.warehouse.message}</span>
                  </div>
                )}
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
                    <input type='number' {...priceInput} onChange={(e) => {
                          priceInput.onChange(e);
                          handlePrice();
                      }}  
                      value={price as number} placeholder="تومان" data-testid="meterage-select" className={`${themeClass} w-[70%] px-[4%] rounded-md border-solid border-[1px] outline-darkGray py-[0.5%] pl-[2%] text-[12px] ${
                        errors.price ? "border-red outline-red" : `${themeBorder}`
                    }`}
                    id={priceId}
                    
                    />
                </span>
                {!errors.price && price && (
                  <div className="text-darkGray sm:text-sm text-right pt-[5px]">
                    <span>{convertorPrice(price)[1]}</span>
                    <span>{convertorPrice(price)[0]}</span>
                  </div>
                )}
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
              <div className="mb-[30px] w-[100%] text-right">
                <label
                  htmlFor="photo-input"
                  className="block text-[14px] text-right font-bold mb-[8px]"
                >
                  عکس
                </label>
                <div className={` border-solid border-[1px] ${themeBorder}`}>
                  <input
                    type="file"
                    className={`${themeClass} mdmin:w-[20%] md:w-[100%] rounded-none py-[17px] px-[15px] text-[12px]`}
                    data-testid="photo-input"
                    multiple
                    onChange={handleFile as any}
                    id={photoId}/>
                  <div className={`flex flex-row flex-wrap gap-[5px] mt-[10px] px-[3%] pb-[3%] `}>
                    {
                      preview.map((item)=>{
                        return <img src={item} alt="" className="w-[200px]" />
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="mb-[30px] w-[100%] text-right">
                <label
                  htmlFor="bio-input"
                  className="block text-[14px] text-right font-bold mb-[8px]"
                >
                  توضیحات
                </label>
                <textarea
                  className={`${themeClass} mdmin:w-[50%] md:w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                    errors.bio
                      ? "border-red outline-red"
                      : `${themeBorder}`
                  }`}
                  data-testid="bio-input"
                  placeholder="توضیحات"
                  id={bioId}
                  cols={30} rows={10} ></textarea>
              </div>
              
              <button
                type="submit"
                className="min-w-fill px-[4%] py-[1%] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
              >
                ایجاد
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewAdBox;
