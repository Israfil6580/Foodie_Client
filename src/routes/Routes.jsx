import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Home from "../pages/Home";
import AddFood from "../pages/AddFood";
import AvilableFood from "../pages/AvilableFood";
import FoodDetails from "../pages/FoodDetails";
import ManageFood from "../pages/ManageFood";
import MyRequestFood from "../pages/MyRequestFood";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            }
            , {
                path: "/login",
                element: <LoginForm />
            },
            {
                path: "/register",
                element: <RegisterForm />
            },
            {
                path: "/add-food",
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: "/available-foods",
                element: <AvilableFood />
            },
            {
                path: "/available-foods/:id",
                element: <PrivateRoute><FoodDetails /></PrivateRoute>,
            },
            {
                path: "/manage-my-foods",
                element: <PrivateRoute><ManageFood /></PrivateRoute>,
            },
            {
                path: "/my-food-request",
                element: <PrivateRoute><MyRequestFood /></PrivateRoute>,
            }
        ]
    },
]);

export default router;