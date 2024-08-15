import AuthLayout from "../Layout/AuthLayout";
import AdminLayout from "../Layout/AdminLayout";
import ErrorPage from "../Error-page";

const routerMain = [
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
  },
];

export default routerMain;
