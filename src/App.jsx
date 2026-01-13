import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  PageList,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as singleCocktailLoader } from "./pages/Cocktail.jsx";
import { action as newsLetterAction } from "./pages/Newsletter.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: `${PageList.Landing}`,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError></SinglePageError>,
        element: <Landing></Landing>,
      },
      {
        path: `${PageList.Cocktail}/:id`,
        loader: singleCocktailLoader(queryClient),
        errorElement: <SinglePageError></SinglePageError>,
        element: <Cocktail></Cocktail>,
      },
      {
        path: `${PageList.Newsletter}`,
        action: newsLetterAction,
        errorElement: <SinglePageError></SinglePageError>,
        element: <Newsletter></Newsletter>,
      },
      {
        path: `${PageList.About}`,
        element: <About></About>,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
