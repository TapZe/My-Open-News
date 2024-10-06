import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import IndonesiaNews from "./pages/IndonesiaNews";
import SavedNews from "./pages/SavedNews";
import SearchNews from "./pages/SearchNews";
// import CategoryNews from "./pages/CategoryNews";
// import CategoryHero from "./pages/CategoryHero";
import ProgrammingNews from "./pages/ProgrammingNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/indonesia",
        element: <IndonesiaNews />,
      },
      {
        path: "/programming",
        element: <ProgrammingNews />,
      },
      // {
      //   path: "/category",
      //   element: <CategoryHero />,
      // },
      // {
      //   path: "/category/:section",
      //   element: <CategoryNews />,
      // },
      {
        path: "/search",
        element: <SearchNews />,
      },
      {
        path: "/saved",
        element: <SavedNews />,
      },
    ],
  },
]);

export default router;
