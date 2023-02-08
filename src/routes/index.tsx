import ResetPassword from "@/components/Auth/Reset";
import { HomePage, LoginPage, RegisterTeacher, RegisterUser } from "@/pages";
import NotFoundPage from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";

const routes = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <LoginPage />,
    path: "/user/login",
  },
  {
    element: <RegisterUser />,
    path: "/user/register",
  },
  {
    element: <RegisterTeacher />,
    path: "/mentor/register",
  },
  {
    element: <ResetPassword />,
    path: "/user/forgot-possword",
  },
  {
    element: <NotFoundPage />,
    path: "*",
  },
];

export default () => (
  <Routes>
    {routes.map(({ element, path }, key) => (
      <Route element={element} path={path} key={key} />
    ))}
  </Routes>
);
