import React, { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import HeaderNewShort from '../components/HeaderNew/HeaderNewShort';
import TitlePages from '../components/TitlePages/TitlePages';
import { useToast } from '../contexts/ToastState';
import { activateAccountAPI, sendEmailAPI } from '../services/api';
import { ActivateInputTypes, eachToast } from '../ts/interfaces';

const ActiveAccount:React.FC = ()=> {
    const { setToastState } = useToast();
    const history = useHistory();
    const [emailUser, setSearchInput] = useState(()=>{
        if(history.location.search.split('=')[1]){
          return history.location.search.split('=')[1]}
        else return ""
        });
    function handleChange(e : React.MouseEvent) {
        setSearchInput((e.target as HTMLInputElement).value);
        }
    const dispatch = useDispatch();

    const [ buttonText, setButtonText ] = useState<string>("ارسال کد");
    const themeClass = "bg-white";
    const themeBorder = "border-darkModeGray";

    const emailId = useId();
    const codeId = useId();
    function addItemOnce(arr : Array<eachToast>, value: eachToast) {
        arr.push(value);
        return arr;
      }
      
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ActivateInputTypes>();

    function formSubmit() {
        // setToastState(old=>addItemOnce(old.slice(),{
        //     title: "3",
        //     description: "", key:Math.random()
        //     }))
    
        const email = (document.getElementById(emailId) as HTMLInputElement).value;

        if(buttonText==="تایید"){
            const code = (document.getElementById(codeId) as HTMLInputElement).value;
            activateAccountAPI(code)
            .then((response) => {
                if (response.status === 200) {
                    setButtonText("ارسال کد");
                    setToastState((old:Array<eachToast>) =>
                        addItemOnce(old.slice(), {
                        title: "1",
                        description: `فعال‌سازی انجام شد. خوش آمدید`,
                        key: Math.random(),
                        })
                    );
                    dispatch({
                        type: "login",
                        payload: [email, response.data.token],
                    });
                    try {
                        localStorage.setItem(
                        "token_user",
                        JSON.stringify(response.data.token)
                        );
                    } catch (e) {
                        console.error({ e });
                    }
                    history.push("/home");
                }
            })
            .catch((err) => {
                if (err.response && err.response.status === 404) {
                setToastState((old:Array<eachToast>) =>
                    addItemOnce(old.slice(), {
                    title: "2",
                    description: "کد فعالسازی اشتباه وارد شده است",
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
        }else{
            sendEmailAPI(email)
            .then((response) => {
                if (response.status === 200) {
                    (document.getElementById(emailId) as HTMLInputElement).disabled = true;
                    setButtonText("تایید");
                    setToastState((old:Array<eachToast>) =>
                    addItemOnce(old.slice(), {
                    title: "1",
                    description: "ایمیل فعالسازی با موفقیت ارسال شد",
                    key: Math.random(),
                    })
                );
                }
            })
            .catch((err) => {
                if (err.response && err.response.status === 403) {
                setToastState((old:Array<eachToast>) =>
                    addItemOnce(old.slice(), {
                    title: "2",
                    description: "حساب کاربری قبلا فعال شده است",
                    key: Math.random(),
                    })
                );
                }
                else if (err.response && err.response.status === 404) {
                    setToastState((old:Array<eachToast>) =>
                    addItemOnce(old.slice(), {
                        title: "2",
                        description: 'نام کاربری وارد شده یافت نشد',
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
      }
    
    return <div>
        <HeaderNewShort />
        <TitlePages title="فعال‌سازی حساب" />
        <div className={`${themeClass} py-[40px] px-total`}>
            <div className="w-[100%] pt-[10px]">
                <h3 className="text-[24px] font-bold mb-[20px]">فعال‌سازی حساب کاربری</h3>
                <div
                    className={`${themeBorder} min-h-[336px] p-[30px] border-[1px] border-solid`}
                >
                    <form
                    className="text-left flex flex-row flex-wrap justify-between"
                    onSubmit={handleSubmit(formSubmit)}
                    >
                    <div className="mb-[30px] md:w-[100%] mdmin:w-[48%]">
                        <label
                        htmlFor="email-input"
                        className="block text-[14px] text-right font-bold mb-[8px]"
                        >
                        ایمیل
                        </label>
                        <input
                        type="email"
                        value={emailUser}
                        onChange={handleChange as any}
                        className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                            errors.email ? "border-red outline-red" : `${themeBorder}`
                        }`}
                        data-testid="email-input"
                        placeholder="ایمیل"
                        id={emailId}
                        // {...register("email", {
                        //     required: "ایمیل اجباری است...",
                        // })}
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

                    {buttonText==="تایید"?
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
                    :<></>}
                        <div className="w-[100%] text-right sm:text-center">
                            <button
                            type="submit"
                            disabled={emailUser===""? true:false}
                            className="min-w-fill px-[4%] py-[1%] rounded-md bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
                            >
                            {buttonText}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    ;
}

export default ActiveAccount;