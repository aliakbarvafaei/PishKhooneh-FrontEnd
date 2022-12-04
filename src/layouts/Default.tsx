import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AppRoutes from "../routes";
import { useDispatch } from "react-redux";
import { getUser } from "../services/api";
import { useToast } from "../contexts/ToastState";
import Toast from "../components/Toast/Toast";

interface eachToast {
  title : string;
  description: string;
  key: number;
}

const DefaultLayout : React.FC = () => {
  const { toastState, setToastState } = useToast();
  
  const dispatch = useDispatch();

  useEffect(() => {
    const value : string | null = localStorage.getItem("token_user");
    if (JSON.parse(value as string) !== "") {
      getUser()
        .then((response) => {
          dispatch({
            type: "login",
            payload: [response.data.email, JSON.parse(value as string)],
          });
        })
        .catch((err) => {
          dispatch({ type: "logout" });
          setToastState((old : Array<eachToast>) =>
            addItemOnce(old.slice(), {
              title: "2",
              description:
                "You have not used the site for a long time. Please login again",
              key: Math.random(),
            })
          );
          try {
            localStorage.setItem("token_user", JSON.stringify(""));
          } catch (e) {
            console.error({ e });
          }
        });
    } else {
      dispatch({ type: "logout" });
      try {
        localStorage.setItem("token_user", JSON.stringify(""));
      } catch (e) {
        console.error({ e });
      }
    }
  }, []);
  
  function addItemOnce(arr : Array<eachToast>, value : eachToast):Array<eachToast> {
    arr.push(value);
    return arr;
  }

  function destroyToast(indexKey : Number):void {
    setToastState((old : Array<eachToast>) => removeItemOnce(old.slice(), indexKey));
  }

  function removeItemOnce(arr: Array<eachToast>, indexKey : Number):Array<eachToast> {
    var index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === indexKey) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      {/* <FixedButtonRight />
      <Header />
      <MainMenu />
      <MobileMenu /> */}
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Switch>
            {AppRoutes.map((prop, key) => {
              if (prop.private)
                return 
                  // <ProtectedRoute
                  //   path={prop.path}
                  //   key={key}
                  //   component={prop.component}
                  // />
                ;
              else {
                return (
                  <Route
                    exact
                    path={prop.path}
                    key={key}
                    component={prop.component as React.FC}
                  />
                );
              }
            })}
          </Switch>
        </div>
      </div>
      {/* <Footer /> */}
      <div className="fixed top-[20px] right-[20px] flex flex-col gap-[15px] z-[1002]">
        {toastState.length > 0 &&
          toastState.map((item : eachToast, index : number) => {
            return (
              <Toast
                type={item.title}
                description={item.description}
                indexKey={item.key}
                destroyToast={destroyToast}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DefaultLayout;
