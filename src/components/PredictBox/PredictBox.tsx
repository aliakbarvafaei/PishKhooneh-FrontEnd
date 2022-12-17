import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { PredictAPI } from "../../services/api/index";
import { useToast } from "../../contexts/ToastState";
import { eachToast, PredictInputTypes } from "../../ts/interfaces.js";
import Modal from "../Modal/Modal";

const PredictBox:React.FC = () => {
  const { setToastState } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [ priceMin, setPriceMin ] = useState<null | number>(null);
  const [ priceMax, setPriceMax ] = useState<null | number>(null);

  const typeId = useId();
  const cityId = useId();
  const regionId = useId();
  const roomId = useId();
  const yearId = useId();
  const floorId = useId();
  const elevatorId = useId();
  const parkingId = useId();
  const meterageId = useId();

  const themeClass = "bg-white";
  const themeBorder = "border-darkModeGray";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PredictInputTypes>();

  function addItemOnce(arr : Array<eachToast>, value: eachToast) {
    arr.push(value);
    return arr;
  }
  function modalClose(){
    setModalOpen(false);
  }

  function formSubmit() {
    // setToastState(old=>addItemOnce(old.slice(),{
    //     title: "3",
    //     description: "", key:Math.random()
    //     }))
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
    const type = (document.getElementById(typeId) as HTMLInputElement).value;
    const city = (document.getElementById(cityId) as HTMLInputElement).value;
    const region = (document.getElementById(regionId) as HTMLInputElement).value;
    const room = (document.getElementById(roomId) as HTMLInputElement).value;
    const year = (document.getElementById(yearId) as HTMLInputElement).value;
    const floor = (document.getElementById(floorId) as HTMLInputElement).value;
    const elevator = (document.getElementById(elevatorId) as HTMLInputElement).value;
    const parking = (document.getElementById(parkingId) as HTMLInputElement).value;
    const meterage = (document.getElementById(meterageId) as HTMLInputElement).value;

    (document.getElementById(typeId) as HTMLInputElement).value = "";
    (document.getElementById(cityId) as HTMLInputElement).value = "تهران";
    (document.getElementById(regionId) as HTMLInputElement).value = "";
    (document.getElementById(roomId) as HTMLInputElement).value = "";
    (document.getElementById(yearId) as HTMLInputElement).value = "";
    (document.getElementById(floorId) as HTMLInputElement).value = "";
    (document.getElementById(elevatorId) as HTMLInputElement).value = "";
    (document.getElementById(parkingId) as HTMLInputElement).value = "";
    (document.getElementById(meterageId) as HTMLInputElement).value = "";
    PredictAPI(type, city, region, room, year, floor, elevator, parking, meterage, warehouse)
      .then((response) => {
        if (response.status === 201) {
          setPriceMin(10);
          setPriceMax(1000);
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "1",
              description: "پیش‌بینی با موفقیت انجام شد",
              key: Math.random(),
            })
          );
        }
      })
      .catch((err) => {
          setModalOpen(true);
          setToastState((old:Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "2",
              description: "سرور دردسترس نیست",
              key: Math.random(),
            })
          );
          console.error(err);
      });
      // history.go(0);
  }

  return (
    <>
      <div className={`${themeClass} py-[40px] px-total`}>
        <div className="w-[100%] pt-[10px]">
          <h3 className="text-[24px] font-bold mb-[20px]">پیش‌بینی قیمت</h3>
          <div
            className={`${themeBorder} min-h-[336px] p-[30px] border-[1px] border-solid`}
          >
            <form
              className="text-left flex flex-row flex-wrap justify-between gap-[10px]"
              onSubmit={handleSubmit(formSubmit)}
            >
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
                <span className="flex flex-row gap-[1%] items-center justify-between">
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
              <div className="sm:w-[100%] md:w-[45%] mdmin:w-[30%] text-right flex flex-col gap-[1%] mb-[30px]">
                <span className="flex flex-row gap-[1%] items-center justify-between">
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

              
              <button
                type="submit"
                className="min-w-fill px-[4%] py-[1%] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
              >
                تخمین
              </button>
              {modalOpen && <Modal modalClose={modalClose} priceMin={priceMin as number} priceMax={priceMax as number} />}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PredictBox;
