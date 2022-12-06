import React from "react";
import TitlePages from "../components/TitlePages/TitlePages";
import RegisterBox from "../components/RegisterBox/RegisterBox";

const Register : React.FC = () => {
  return (
    <div>
      <TitlePages title="ثبت نام" />
      <RegisterBox />
    </div>
  );
}

export default Register;
