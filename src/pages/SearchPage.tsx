import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Ads/Card";
import HeaderNewShort from "../components/HeaderNew/HeaderNewShort";
import TitlePages from "../components/TitlePages/TitlePages";
import { Ads } from "../data";
import { getAdsWithPage } from "../services/api";
import { filtersInterface } from "../ts/interfaces";

const filtersOption = [
  { title: "دسته‌بندی", content: ["ویلا", "آپارتمان", "باغ"] },
  { title: "نوع", content: ["مسکونی", "تجاری"] },
  { title: "منطقه", content: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"] },
  { title: "تعداد اتاق", content: ["بدون اتاق", "1", "2", "بیشتر از 2",]}
];

const n=6 ;

const SearchPage:React.FC = () => {
  const { searchText } = useParams<any>();

  const [counterPage, setcounterPage] = useState(1);
  const [filterAds, setfilterAds] = useState(Ads);
  const [priceRange, setPriceRange] = useState({ from: 0, to: 20000 });
  const searchRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [roomsNumber, setRoomsNumber] = useState([]);
  const [regionNumber, setRegionNumber] = useState([]);

  const themeClass ="bg-white";
  const themeBorder ="border-darkModeGray";

  useEffect(()=>{
    if(searchText){
      setSearchInput(searchText.split('=')[1]);
    }
  },[])
  useEffect(() => {
    const filters:filtersInterface = {
      searchInput: searchInput === "" ? "" : searchInput,
      category: category.length === 0 ? filtersOption[0].content : category,
      type: type.length === 0 ? filtersOption[1].content : type,
      region: regionNumber.length === 0 ? filtersOption[2].content : regionNumber,
      room: roomsNumber.length === 0 ? filtersOption[3].content : roomsNumber,
      priceRange: priceRange,
    };
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getAdsWithPage(counterPage, n, filters)
      .then((response) => {
        setfilterAds(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [
    counterPage,
    searchInput,
    regionNumber,
    roomsNumber,
    type,
    category,
    priceRange,
  ]);

  function handleChange(e : React.MouseEvent) {
    setSearchInput((e.target as HTMLInputElement).value);
    setcounterPage(1);
  }

  function removeItemOnce(arr : any, value : any) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  function handleClick(e : React.MouseEvent, filterName : string) {
    const target : HTMLInputElement = e.target as HTMLInputElement;
    switch (filterName) {
      case "دسته‌بندی":
        (target.checked && setCategory((old) => [...old, target.value] as any)) ||
          (!target.checked &&
            setCategory((old) => removeItemOnce(old.slice(), target.value)));
        setcounterPage(1);
        break;
      case "نوع":
        (target.checked && setType((old) => [...old, target.value] as any)) ||
          (!target.checked &&
            setType((old) => removeItemOnce(old.slice(), target.value)));
        setcounterPage(1);
        break;
      case "منطقه":
        console.log(target.value);
        (target.checked && setRegionNumber((old) => [...old, target.value] as any)) ||
          (!target.checked &&
            setRegionNumber((old) => removeItemOnce(old.slice(), target.value)));
        setcounterPage(1);
        break;
      case "اتاق":
        (target.checked && setRoomsNumber((old) => [...old, target.value] as any)) ||
          (!target.checked &&
            setRoomsNumber((old) => removeItemOnce(old.slice(), target.value)));
        setcounterPage(1);
        break;
      default:
        break;
    }
  }
  // function findItemArrayInArray(arr1 : any, arr2 : any) {
  //   for (let i = 0; i < arr2.length; i++) {
  //     if (arr1.indexOf(arr2[i]) > -1) return true;
  //   }
  //   return false;
  // }

  return (
    <div>
      <HeaderNewShort />
      <TitlePages title="جستجو" />
      <div
        className={`${themeClass} px-total flex smmin:flex-row sm:flex-col justify-between`}
      >
        <div
          className={`smmin:w-[20%] sm:w-[100%] smmin:my-[50px] sm:my-[20px] py-[20px] sm:px-[8%] smmin:px-[2%] rounded-md border-solid border-[1px] ${themeBorder}`}
        >
          <h2 className="text-center mb-[20px]">فیلترها</h2>
          {filtersOption.map((item, index) => {
            return (
              <details key={index} className="mb-[20px]">
                <summary
                  className={`text-[16px] list-none flex flex-row justify-between items-center pb-[8px] cursor-pointer border-b-solid border-b-[1px] ${themeBorder}`}
                >
                  {item.title}
                  <i
                    className="fa fa-caret-down text-[16px]"
                    aria-hidden="true"
                  ></i>
                </summary>
                <ul className="pl-[10px] text-[14px]">
                  {item.content.map((subItem, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-row items-center gap-[10px] pt-[10px]"
                      >
                        <input
                          type="checkbox"
                          value={subItem}
                          id={item.title + index}
                          onClick={(e) => handleClick(e, item.title)}
                        />
                        <label
                          className={`w-[100%] py-[8px] cursor-pointer border-b-solid border-b-[1px] ${themeBorder}`}
                          htmlFor={item.title + index}
                        >
                          {item.title==="منطقه"? "منطقه ":""}{subItem}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
          <details className="mb-[20px]">
            <summary
              className={`text-[16px] list-none flex flex-row justify-between items-center pb-[8px] cursor-pointer border-b-solid border-b-[1px] ${themeBorder}`}
            >
              قیمت
              <i
                className="fa fa-caret-down text-[16px]"
                aria-hidden="true"
              ></i>
            </summary>
            <ul className="pl-[10px] text-[14px]">
              <li className="flex flex-col gap-[5px] pt-[10px]">
                از : {priceRange.from} میلیون تومان
                <input
                  type="range"
                  min={0}
                  max={20000}
                  step={100}
                  value={priceRange.from}
                  onChange={(e) => {
                    setPriceRange((old) => ({
                      ...old,
                      from: parseInt(e.target.value),
                    }));
                    setcounterPage(1);
                  }}
                  className="w-[100%]"
                />
              </li>
              <li className="flex flex-col gap-[5px] pt-[10px]">
                تا : {priceRange.to} میلیون تومان
                <input
                  type="range"
                  min={0}
                  max={20000}
                  step={100}
                  value={priceRange.to}
                  onChange={(e) => {
                    setPriceRange((old) => ({
                      ...old,
                      to: parseInt(e.target.value),
                    }));
                    setcounterPage(1);
                  }}
                  className="w-[100%]"
                />
              </li>
            </ul>
          </details>
          {/* <div className="w-full mb-[20px]">
            <label
              htmlFor="toggleB"
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggleB"
                  className="peer sr-only"
                  onClick={(e:React.MouseEvent) => setInStock((e.target as HTMLInputElement).checked)}
                />
                <div className="block bg-darkGray peer-checked:bg-[#0d6efd] w-8 h-4 rounded-full"></div>
                <div className="dot absolute left-1 top-0.5 bg-white peer-checked:translate-x-[100%] w-3 h-3 rounded-full transition"></div>
              </div>
              <div className="ml-3 font-medium text-[15px]">InStock</div>
            </label>
          </div> */}
        </div>
        <div
          className={`sm:w-[100%] smmin:w-[78%] smmin:my-[50px] sm:my-[20px]`}
        >
          <div className="relative text-darkGray">
            <i
              className="fa fa-search text-[25px] cursor-pointer absolute top-[20%] right-[3%]"
              aria-hidden="true"
            ></i>
            <input
              ref={searchRef}
              value={searchInput}
              onChange={handleChange as any}
              type="text"
              placeholder="جستجوی عنوان آگهی"
              className={`w-[100%] mb-[20px] py-[10px] px-[10%] rounded-md border-solid border-[1px] ${themeBorder} ${themeClass}`}
            />
          </div>
          {loading && (
            <div className="text-center pt-[20px]">
              <i
                className="fa fa-spinner fa-spin text-[50px]"
                aria-hidden="true"
              ></i>
            </div>
          )}
          {!loading && (
            <div
              className={`flex flex-row flex-wrap w-[100%] py-[40px] px-[2%] gap-[1%] rounded-md border-solid border-[1px] ${themeBorder}`}
            >
              {filterAds.length === 0 ? (
                <>
                  <i
                    className="fa fa-exclamation-triangle text-red mt-[2px]"
                    aria-hidden="true"
                  ></i>
                  <div className="text-red">آگهی یافت نشد</div>
                </>
              ) : (
                filterAds.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="md:w-[48%] xl:w-[48%] xlmin:w-[32%]"
                    >
                      <Card item={item} dir='r' />
                    </div>
                  );
                })
              )}
              <div className="max-w-[100%] pt-[40px] container flex justify-center mx-auto">
                <div className="flex flex-row mx-auto">
                  <button
                    disabled={counterPage !== 1 ? false : true}
                    onClick={() => setcounterPage((old) => old - 1)}
                    type="button"
                    className="bg-darkGray text-lightGray rounded-r-md border-l border-lightGray py-2 hover:bg-red disabled:opacity-60 px-3"
                  >
                    <div className="flex flex-row align-middle">
                      <svg
                        className="w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <p className="mr-2">قبلی</p>
                    </div>
                  </button>
                  <div className="bg-darkGray text-white border-l border-lightGray py-2 hover:bg-red px-3">
                    {counterPage}
                  </div>
                  <button
                    disabled={n <= filterAds.length ? false : true}
                    onClick={() => setcounterPage((old) => old + 1)}
                    type="button"
                    className="bg-darkGray text-lightGray rounded-l-md py-2  hover:bg-red disabled:opacity-60 px-3"
                  >
                    <div className="flex flex-row align-middle">
                      <span className="ml-2">بعدی</span>
                      <svg
                        className="w-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
