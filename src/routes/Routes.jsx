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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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
                element: <AddFood />
            },
            {
                path: "/available-foods",
                element: <AvilableFood />
            },
            {
                path: "/available-foods/:id",
                element: <FoodDetails />,
            },
            {
                path: "/manage-my-foods",
                element: <ManageFood />,
            },
            {
                path: "/my-food-request",
                element: <MyRequestFood />,
            }
        ]
    },
]);

export default router;