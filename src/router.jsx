import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SavedNews from "./pages/SavedNews";
import SearchNews from "./pages/SearchNews";
import CategoryNews from "./pages/CategoryNews";
import CategoryHero from "./pages/CategoryHero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/programming",
        element: <SearchNews />,
      },
      {
        path: "/category",
        element: <CategoryHero />,
      },
      {
        path: "/category/:section",
        element: <CategoryNews />,
      },
      {
        path: "/search/:query",
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
