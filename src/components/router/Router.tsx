import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import HomePageLayout from "../../pages/HomePageLayout";
import CustomerPage from "../../pages/CustomerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "customer/:customerId",
        element: <CustomerPage />,
      },
    ],
  },
]);

export default router;
