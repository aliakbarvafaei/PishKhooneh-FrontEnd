import React, { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import HeaderNewShort from '../components/HeaderNew/HeaderNewShort';
import TitlePages from '../components/TitlePages/TitlePages';
import { useToast } from '../contexts/ToastState';
import { resetPassAPI } from '../services/api';
import { eachToast, ForgetPassInputTypes } from '../ts/interfaces';

const ResetPass2:React.FC = ()=> {
    const { setToastState } = useToast();

    const themeClass = "bg-white";
    const themeBorder = "border-darkModeGray";
    
    const [iconPassword, setIconPassword] = useState("fa-eye-slash");
    const [passType, setPassType] = useState("password");
    function handlePassword() {
      setIconPassword((old) =>
        old === "fa-eye-slash" ? "fa-eye" : "fa-eye-slash"
      );
      setPassType((old) => (old === "password" ? "text" : "password"));
    }

    const history = useHistory();
    const passwordId = useId();
    const codeId = useId();
    function addItemOnce(arr : Array<eachToast>, value: eachToast) {
        arr.push(value);
        return arr;
      }
      
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ForgetPassInputTypes>();

    function formSubmit() {
        // setToastState(old=>addItemOnce(old.slice(),{
        //     title: "3",
        //     description: "", key:Math.random()
        //     }))
    
        const code = (document.getElementById(codeId) as HTMLInputElement).value;
        const newPass = (document.getElementById(passwordId) as HTMLInputElement).value;

        resetPassAPI(code, newPass)
        .then((response) => {
            if (response.status === 200) {
                setToastState((old:Array<eachToast>) =>
                    addItemOnce(old.slice(), {
                    title: "1",
                    description: "رمز با موفقیت رمز تغییر کرد",
                    key: Math.random(),
                    })
                );
                history.push("/login");
            }
        })
        .catch((err) => {
            if (err.response && err.response.status === 404) {
            setToastState((old:Array<eachToast>) =>
                addItemOnce(old.slice(), {
                title: "2",
                description: "کد بازیابی رمز اشتباه وارد شده است",
                key: Math.random(),
                })
            );
            }
            else if (err.response && err.response.status === 400) {
                setToastState((old:Array<eachToast>) =>
                addItemOnce(old.slice(), {
                    title: "2",
                    description: "کد را به شکل درست وارد کنید",
                    key: Math.random(),
                })
                );
            }
            else{
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
    
    return <div>
        <HeaderNewShort />
        <TitlePages title="بازیابی رمز" />
        <div className={`${themeClass} py-[40px] px-total`}>
            <div className="w-[100%] pt-[10px]">
                <h3 className="text-[24px] font-bold mb-[20px]">فراموشی رمزعبور</h3>
                <div
                    className={`${themeBorder} min-h-[336px] p-[30px] border-[1px] border-solid`}
                >
                    <form
                    className="text-left flex flex-row flex-wrap justify-between"
                    onSubmit={handleSubmit(formSubmit)}
                    >
                        <div className="mb-[30px] md:w-[100%] mdmin:w-[48%]">
                            <label
                            htmlFor="code-input"
                            className="block text-[14px] text-right font-bold mb-[8px]"
                            >
                            کد ارسالی
                            </label>
                            <input
                            type="text"
                            className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                                errors.code ? "border-red outline-red" : `${themeBorder}`
                            }`}
                            data-testid="code-input"
                            placeholder="کد ارسالی"
                            id={codeId}
                            {...register("code", {
                                required: "کد ارسالی اجباری است...",
                            })}
                            />
                            {errors.code && (
                            <div className="text-red text-right pt-[5px]">
                                <i
                                className="fa fa-exclamation-triangle"
                                aria-hidden="true"
                                ></i>
                                <span className="pr-[5px]">{errors.code.message}</span>
                            </div>
                            )}
                        </div>
                        <div className="mb-[30px] md:w-[100%] mdmin:w-[48%] relative">
                            <label
                                htmlFor="password-input"
                                className="text-right block text-[14px] font-bold mb-[8px]"
                            >
                                رمز عبور
                            </label>
                            <input
                                type={passType}
                                className={`${themeClass} w-[100%] relative rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                                errors.password ? "border-red outline-red" : `${themeBorder}`
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
                                    <span className="pr-[5px]">{errors.password.message}</span>
                                </div>
                                </>
                            )}
                            </div>

                        <div className="w-[100%] text-right sm:text-center">
                            <button
                            type="submit"
                            className="min-w-fill px-[4%] py-[1%] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
                            >
                            تغییر رمز
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    ;
}

export default ResetPass2;