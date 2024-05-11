import { useContext, useState } from "react";
import logo from "/images/logo.svg"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../../provider/AuthProvider";
import { CiLogin } from "react-icons/ci";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [loadingForLogout, setLoadingForLogout] = useState(null)
    const handleLogout = () => {
        setLoadingForLogout(true)
        setTimeout(() => {
            logOut();
            toast.success("Logout successfully");
            setLoadingForLogout(false)
        }, 1500)
    };

    const navlinks = (
        <>
            <NavLink to={"/"} className="btn btn-ghost bg-transparent hover:bg-transparent p-0 font-normal">Home</NavLink>
            <NavLink to={"/available-foods"} className="btn btn-ghost bg-transparent hover:bg-transparent p-0 font-normal">Available Foods</NavLink>
            <NavLink to={"/add-food"} className="btn btn-ghost bg-transparent hover:bg-transparent p-0 font-normal">Add Food</NavLink>
            <NavLink to={"/manage-my-foods"} className="btn btn-ghost bg-transparent hover:bg-transparent p-0 font-normal">Manage My Foods</NavLink>
            <NavLink to={"/my-food-request"} className="btn btn-ghost bg-transparent hover:bg-transparent p-0 font-normal">My Food Request</NavLink>
        </>
    );

    return (
        <div className="sticky top-2 z-50">
            <div className="navbar container mx-auto bg-green-100 rounded-3xl p-0 px-2">
                <div className="navbar-start">
                    <div className="dropdown relative z-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-transparent hover:bg-transparent lg:hidden p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost bg-transparent hover:bg-transparent p-0 h-auto"><img className="h-12 lg:h-14 w-auto" src={logo} alt="Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" >
                                <div className="w-10 rounded-full">
                                    <img alt={user.displayName} src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow flex items-center justify-center dropdown-content bg-green-100 rounded-box">
                                <div className="grid gap-1 w-64">
                                    <div className="flex items-center gap-2">
                                        <img
                                            alt={user.displayName}
                                            className="rounded-full h-12 w-12 object-cover"
                                            src={user?.photoURL || ""}

                                        />
                                        <div>
                                            <p className="font-medium">{user.displayName}</p>
                                            <p className="text-sm text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200" />
                                    <button onClick={handleLogout} className="text-sm flex items-center gap-2"><CiLogin className="h-4 w-4" /> Logout {loadingForLogout && <span className="loading loading-spinner loading-sm"></span>}</button>
                                </div>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <Link className="btn btn-warning text-white lg:px-10 px-4 text-base font-normal rounded-2xl" to={"/login"}>Sign In <CiLogin className="text-lg" /></Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
