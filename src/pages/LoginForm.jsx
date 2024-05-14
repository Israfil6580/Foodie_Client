import { motion } from "framer-motion";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import LoginLogo from "/images/login_logo.svg";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { CiLogin } from "react-icons/ci";
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet-async";
import axios from "axios";

function LoginForm() {
    const { seeOrNot, see, signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()


    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            const result = await signInWithGoogle();
            // jwt
            const { data } = await axios.post("http://localhost:4000/jwt", { email: result?.user.email })
            console.log(data);

            navigate(location.state || "/", { replace: true })
            toast.success('Sign in successful with Google');
        } catch (error) {
            toast.error(error.message || 'Failed to sign in with Google');
        } finally {
            setLoading(false);
        }
    };

    const handleGithubSignIn = async () => {
        try {
            setLoading(true);
            await signInWithGithub();
            navigate(location.state || "/", { replace: true })
            toast.success('Sign in successful with Github');
        } catch (error) {
            toast.error(error.message || 'Failed to sign in with Github');
        } finally {
            setLoading(false);
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            setLoading(true);
            await signIn(email, password);
            navigate(location.state || "/", { replace: true })
            toast.success('Sign in successful with email');

        } catch (error) {
            toast.error(error.message || 'Failed to sign in with email');
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
            <Helmet>
                <title>Foddie | Login</title>
            </Helmet>
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

                    <h3 className="mt-2 text-xl font-bold text-center text-gray-600">Welcome Back</h3>
                    <p className="text-center text-gray-500">Login or create account</p>

                    <form onSubmit={handleSignIn}>
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

                        <div className="w-full mt-4 relative">
                            <motion.input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-lg outline-none"
                                type={see ? "password" : "text"}
                                name="password"
                                placeholder="Password"
                                aria-label="Password"
                                required
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.div
                                onClick={seeOrNot}
                                className="absolute top-2/4 -translate-y-2/4 right-0 px-2"
                            >
                                <span className="cursor-pointer">
                                    {see ? <IoEyeOffOutline className="text-xl" /> : <IoEyeOutline className="text-xl" />}
                                </span>
                            </motion.div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <motion.button
                                className="btn btn-warning bg-warning text-white min-h-[2.5rem] h-[2.5rem] transition-transform"
                                hidden={loading}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {loading ? (
                                    <>Sign In <span className="loading bg-white loading-spinner loading-sm"></span></>
                                ) : (
                                    <>
                                        Sign In <CiLogin className="text-lg" />
                                    </>
                                )}
                            </motion.button>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-500">Forget Password?</a>
                        </div>
                    </form>

                    <div className="divider mt-4">Login with </div>

                    <div className="flex justify-center gap-4 lg:px-6 px-8 mb-4">
                        <motion.button
                            onClick={handleGoogleSignIn}
                            className="btn bg-transparent hover:bg-transparent border w-1/2 flex justify-center py-2 rounded-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaGoogle className="text-3xl" />
                        </motion.button>
                        <motion.button
                            onClick={handleGithubSignIn}
                            className="btn bg-transparent hover:bg-transparent border w-1/2 flex justify-center py-2 rounded-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaGithub className="text-3xl" />
                        </motion.button>
                    </div>
                </motion.div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <Link to={"/register"} className="mx-2 text-sm font-bold text-blue-500 hover:underline">Register</Link>
                </div>
            </motion.div>
            <ScrollRestoration />
        </motion.div>
    );
}

export default LoginForm;
