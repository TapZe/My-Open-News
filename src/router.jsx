import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layout and 404 import
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/Error404";
import Fallback from "./components/Fallback";

// Lazy-load when importing the pages
const Home = lazy(() => import("./pages/Home"));
const IndonesiaNews = lazy(() => import("./pages/IndonesiaNews"));
const SavedNews = lazy(() => import("./pages/SavedNews"));
const SearchNews = lazy(() => import("./pages/SearchNews"));
const Category = lazy(() => import("./pages/Category"));
const ProgrammingNews = lazy(() => import("./pages/ProgrammingNews"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // Useful when there is more than one layout
      <Suspense fallback={<Fallback />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/indonesia",
        element: (
          <Suspense fallback={<Fallback />}>
            <IndonesiaNews />
          </Suspense>
        ),
      },
      {
        path: "/programming",
        element: (
          <Suspense fallback={<Fallback />}>
            <ProgrammingNews />
          </Suspense>
        ),
      },
      {
        path: "/category",
        element: (
          <Suspense fallback={<Fallback />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<Fallback />}>
            <SearchNews />
          </Suspense>
        ),
      },
      {
        path: "/saved",
        element: (
          <Suspense fallback={<Fallback />}>
            <SavedNews />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
