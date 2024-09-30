import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SavedNews from "./pages/SavedNews";
import SearchNews from "./pages/SearchNews";

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
