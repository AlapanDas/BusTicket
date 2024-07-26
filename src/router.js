import Welcome from "./pages/welcome";
import ErrorPage from "./pages/error";
import AuthBox from './pages/AuthBox';
import { createBrowserRouter } from "react-router-dom";
import MyComponent from "./pages/SearchPage";
import About from "./pages/About";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search-route",
    element: <MyComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search-number",
    element: <MyComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <AuthBox />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/account",
    element: <AuthBox />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <MyComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <Signup />,
    errorElement: <ErrorPage />
  }
]);


export default router;