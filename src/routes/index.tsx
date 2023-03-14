import ResetPassword from "@/components/Auth/Reset";
import { TeachingInfo } from "@/components/Teacher";
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
    path: "/login",
  },
  {
    element: <RegisterUser />,
    path: "/register",
  },
  {
    element: <RegisterTeacher />,
    path: "/register/mentor",
  },
  {
    element: <ResetPassword />,
    path: "/forgot-possword",
  },
  {
    element: <TeachingInfo />,
    path: "/teaching-info",
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
