import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Home from "../pages/Home";
import AddFood from "../pages/AddFood";

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
            }
        ]
    },
]);

export default router;