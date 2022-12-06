import React from "react";
import TitlePages from "../components/TitlePages/TitlePages";
import LoginBox from "../components/LoginBox/LoginBox";

const  Login:React.FC = () => {
  return (
    <div>
      <TitlePages title="ورود" />
      <LoginBox />
    </div>
  );
}

export default Login;
