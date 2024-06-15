import Welcome from "./pages/welcome";
import ErrorPage from "./pages/error";
import AuthBox from './pages/AuthBox';
import { createBrowserRouter } from "react-router-dom";
import MyComponent from "./pages/SearchPage";

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
      path: "/peppapig",
      element: <MyComponent />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search",
      element: <MyComponent />,
      errorElement: <ErrorPage />,
    }
  ]);


export default router;