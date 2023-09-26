import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App/App";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Search from "./components/Search/Search";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import './styles/main.scss';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/search",
                element: <Search />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);