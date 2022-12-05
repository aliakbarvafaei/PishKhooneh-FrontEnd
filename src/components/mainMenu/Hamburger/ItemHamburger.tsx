import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useTheme } from "../../../contexts/theme";

function ItemHamburger({ item } : any) {
  const [isOpen, setIsOpen] = useState(false);
  // const { theme } = useTheme();
  const themeClass = "bg-white text-black";
    // theme.mode === "DARK" ? "bg-black text-darkGray" : "bg-white text-black";

  function handeHamburger(e : any) {
    setIsOpen((old) => !old);
  }

  return (
    <>
      <div
        className="w-[100%] flex flex-row items-center justify-between gap-[50px]"
        onClick={handeHamburger}
        style={
          isOpen && item.submenu.length > 0
            ? { borderBottom: "1px #f9f9f9 solid" }
            : {}
        }
      >
        <span>{item.title}</span>
        {item.submenu.length > 0 && (
          <i
            className="fa fa-plus"
            style={{ fontSize: "10px" }}
            aria-hidden="true"
          ></i>
        )}
      </div>
      {item.submenu.length > 0 && isOpen && (
        <ul className="flex flex-col items-start p-0">
          {item.submenu.map((x : any, index: number) => {
            return (
              <li
                key={index}
                className={`${themeClass} hover:text-red text-[14px] font-normal py-[8px] px-[10px]`}
              >
                <span>
                  <Link to={x.pathTo}>{x.title}</Link>
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ItemHamburger;
