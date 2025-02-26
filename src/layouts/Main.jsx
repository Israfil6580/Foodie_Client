import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Main = () => {
    return (
        <>
            {/* navbar */}
            <Navbar />
            {/* outlet */}
            <Outlet />
            {/* footer */}
            <Footer />
        </>
    );
};

export default Main;