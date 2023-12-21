import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const SignIn = React.lazy(() => import("../pages/sign-in/SignIn"));

const Routes = () => {
  const rootRouter = createBrowserRouter([{ element: <SignIn />, path: "/" }]);

  return (
    // <React.StrictMode>
    <Suspense>
      <RouterProvider router={rootRouter} />
    </Suspense>
    // </React.StrictMode>
  );
};

export default Routes;
