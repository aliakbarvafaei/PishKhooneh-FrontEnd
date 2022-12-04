import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AppRoutes from "../routes";
import { useDispatch } from "react-redux";
import { getUser } from "../services/api";
import { useToast } from "../contexts/ToastState";

const DefaultLayout : React.FC = (props : any) => {
  const { toastState, setToastState } = useToast();
  console.log(toastState,setToastState);
  
  const dispatch = useDispatch();
  function addItemOnce(arr : any, value : any) {
    arr.push(value);
    return arr;
  }
  useEffect(() => {
    const value : any = localStorage.getItem("token_user");
    if (JSON.parse(value) !== "") {
      getUser()
        .then((response : any) => {
          dispatch({
            type: "login",
            payload: [response.data.email, JSON.parse(value)],
          });
        })
        .catch((err : any) => {
          dispatch({ type: "logout" });
          setToastState((old : any) =>
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

  function destroyToast(indexKey : any) {
    // setToastState((old) => removeItemOnce(old.slice(), indexKey));
  }
  function removeItemOnce(arr: any, indexKey : any) {
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
                    component={prop.component}
                  />
                );
              }
            })}
          </Switch>
        </div>
      </div>
      {/* <Footer /> */}
      <div className="fixed top-[20px] right-[20px] flex flex-col gap-[15px] z-[1002]">
        {/* {toastState.length > 0 &&
          toastState.map((item, index) => {
            return (
              <Toast
                type={item.title}
                description={item.description}
                indexKey={item.key}
                destroyToast={destroyToast}
                key={index}
              />
            );
          })} */}
      </div>
    </div>
  );
};

export default DefaultLayout;
