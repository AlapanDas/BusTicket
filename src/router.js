import Welcome from "./routes/welcome";
import ErrorPage from "./routes/error";
import SearchN from "./routes/searchNum";
import SearchR from "./routes/searchRoute";
import AuthBox from './components/AuthBox';
import { createBrowserRouter } from "react-router-dom";
import MyComponent from "./components/SearchPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search-route",
      element: <SearchR />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search-number",
      element: <SearchN />,
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
    }
  ]);


export default router;