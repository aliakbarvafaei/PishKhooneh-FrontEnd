import React from "react";
import Newsletter from "./Newsletter/Newsletter";
import MainFooter from "./MainFooter/MainFooter";
// import { useTheme } from "../../contexts/theme";
import CopyRight from "./CopyRight/CopyRight";

function Footer() {
  // const { theme } = useTheme();
  const themeClass = "bg-lightGray";
    // theme.mode === "DARK" ? "bg-black text-darkModeGray" : "bg-lightGray";
  const themeClassCopy = "bg-white"
    // theme.mode === "DARK" ? "bg-darkModeLightBlack" : "bg-white";
  const themeBorder = "border-darkModeGray"
    // theme.mode === "DARK" ? "border-lightestBlack" : "border-darkModeGray";

  return (
    <section>
      {/* <div
        className={`${themeClass} ${themeBorder} border-b-[1px] border-solid py-[35px] px-total`}
      >
        <Newsletter />
      </div> */}
      <div
        className={`${themeClass} mb-[60px] md:py-[20px] lg:py-[30px] lgmin:py-[45px] px-total bg-lightGray`}
      >
        <MainFooter />
      </div>
      {/* <div className={`${themeClassCopy} py-[25px] px-total`}>
        <CopyRight />
      </div> */}
    </section>
  );
}

export default Footer;
