import { motion } from "framer-motion";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import LoginLogo from "/images/login_logo.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { CiLogin } from "react-icons/ci";

function RegisterForm() {
    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photo = form.photo.value;

        setLoading(true);

        try {
            const result = await createUser(email, password);
            await updateUserProfile(name, photo);
            // Optimistic UI Update
            setUser({ ...result?.user, photoURL: photo, displayName: name });
            toast.success('Register Successful');
            navigate(location.state || "/")
        } catch (err) {
            toast.error(err?.message || 'Failed to register');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="h-screen flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
        >
            <motion.div
                className="w-full max-w-sm mx-auto overflow-hidden bg-green-100 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
            >
                <motion.div
                    className="px-6 py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-14 sm:h-16" src={LoginLogo} alt="" />
                    </div>

                    <h3 className="mt-2 text-xl font-bold text-center text-gray-600">Please Register</h3>
                    <p className="text-center text-gray-500">Login or create account</p>

                    <form onSubmit={handleSignUp}>
                        <div className="w-full mt-4">
                            <motion.input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-lg outline-none"
                                type="text"
                                name="name"
                                placeholder="Name"
                                aria-label="name"
                                required
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>

                        <div className="w-full mt-4">
                            <motion.input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-lg outline-none"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                aria-label="Email Address"
                                required
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>

                        <div className="w-full mt-4">
                            <motion.input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-lg outline-none"
                                type="password"
                                name="password"
                                placeholder="Password"
                                aria-label="Password"
                                required
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>

                        <div className="w-full mt-4">
                            <motion.input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-lg outline-none"
                                type="url"
                                placeholder="Photo URL"
                                name="photo"
                                aria-label="Photo"
                                required
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-500">Forget Password?</a>

                            <button
                                className="btn btn-warning bg-warning text-white min-h-[2.5rem] h-[2.5rem] transition-transform hover:scale-105"
                                hidden={loading}
                            >
                                {loading ? (
                                    <>Register <span className="loading bg-white loading-spinner loading-sm"></span></>
                                ) : (
                                    <>
                                        Register <CiLogin className="text-lg" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50">
                    <span className="text-sm text-gray-600">Already have an account? </span>
                    <Link to={"/login"} className="mx-2 text-sm font-bold text-blue-500 hover:underline">Sign In</Link>
                </div>
            </motion.div>
            <ScrollRestoration />
        </motion.div>
    );
}

export default RegisterForm;
