import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  Layout,
  AboutPage,
  BlogPage,
  ContactPage,
  SingleBlogPage,
  AdminPage,
} from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-FCVX8V883R";
ReactGA.initialize(MEASUREMENT_ID);

ReactGA.send({ hitType: "pageview", page: document.location.pathname });

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlogPage />,
      },
      {
        path: "/admin/*",
        element: <AdminPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
