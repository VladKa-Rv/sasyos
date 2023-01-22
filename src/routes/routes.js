import { createBrowserRouter } from "react-router-dom";
import AdminCardLayout from "../components/adminPage/AdminCardLayout";
import AdminForm from "../components/adminPage/AdminForm";
import AdminPage from "../components/adminPage/AdminPage";
import ProductTable from "../components/ArticleTable/ProductTable";
import CardLayout from "../components/Cards/CardLayout";
import LeftMenu from "../components/LeftMenu";
import OrderPage from "../components/OrderPage";
import PaymentPage from "../components/PaymentPage";
import ProductPage from "../components/ProductPage";
import StartPage from "../components/StartPage";
import Test from "../components/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: ":productId",
    element: <ProductPage />,
  },
  {
    path: "order",
    element: <PaymentPage />,
  },
  {
    path : "payment",
    element : <OrderPage/>,
  },
  {
    path: "admin",
    element: <AdminPage />,
    children: [
      {
        path: "management",
        element: <ProductTable />,
      },
      {
        path: "products",
        element: <AdminCardLayout admin={true} />,
      },
    ],
  },
  {
    path: "login",
    element: <AdminForm />,
  },
  {
    path: "*",
    element: <Test />,
  },
]);

export const routesPath = [{ Main: "/" }, { Login: "login" }];
