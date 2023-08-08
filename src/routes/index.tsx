import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import type { RouterProps } from "src/types/route.type";

const AppRouter: React.FC = () => {
  const routes: RouterProps[] = [
    {
      path: "/",
      element: <p>Home</p>,
      children: [],
    },
    {
      path: "*",
      element: <Navigate to={'/home'}/>,
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
