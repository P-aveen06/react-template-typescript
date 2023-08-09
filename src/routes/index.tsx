import React from "react";
import { Route, Routes,Navigate,Outlet } from "react-router-dom";
import type { RouterProps } from "src/routes/route.type";
import { APPROUTES } from "./app-routes";
import Topbar from "src/components/shared/topBar/Topbar";

const AppRouter: React.FC = () => {
  const routes: RouterProps[] = [
    {
        path:"/",
        element:<Topbar/>,
        children:[
            {
                path: "",
                element:<Outlet/>,
                children: [
                  {
                      path:'',
                      element:<Navigate to={'/dashboard'}/>
                  },
                  {
                      path:APPROUTES.DASHBOARD,
                      element:<h3>Dashboard Contecnt</h3>
                  },
                  {
                      path:APPROUTES.ADDBATCH,
                      element:<h3>Add Batch</h3>
                  },
                  {
                      path:APPROUTES.TESTRESULT,
                      element:<h3>Test Result</h3>
                  }
                ],
              },
        ]
    },
    
    {
      path: "*",
      element: <Navigate to={'/'}/>,
      children: [],
    },
  ];
  return (
    <>
      <Routes>
        {routes?.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element as any}>
              {route.children &&
                route.children.map((childRoute) => (
                  <Route
                    key={childRoute.path}
                    path={childRoute.path}
                    element={childRoute.element as any}
                  >
                    {childRoute.children &&
                      childRoute.children.map((grandchildRoute) => (
                        <Route
                          key={grandchildRoute.path}
                          path={grandchildRoute.path}
                          element={grandchildRoute.element as any}
                        />
                      ))}
                  </Route>
                ))}
            </Route>
          );
        })}
      </Routes>
    </>
  );
};

export default AppRouter;
