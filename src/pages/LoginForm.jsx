import { Link } from "react-router-dom";
import LoginLogo from "/images/login_logo.svg";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { CiLogin } from "react-icons/ci";
import toast from 'react-hot-toast';

function LoginForm() {
    const { seeOrNot, see, signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            await signInWithGoogle();
            toast.success('Sign in successful with Google');
            setLoading(false);
        } catch (error) {
            toast.error(error.message || 'Failed to sign in with Google');
            setLoading(false);
        }
    };

    const handleGithubSignIn = async () => {
        try {
            setLoading(true);
            await signInWithGithub();
            toast.success('Sign in successful with Github');
            setLoading(false);
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
            toast.success('Sign in successful with email');
        } catch (error) {
            toast.error(error.message || 'Failed to sign in with email');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex items-center">
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-green-100 rounded-2xl shadow-md">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-14 sm:h-16" src={LoginLogo} alt="" />
                    </div>

                    <h3 className="mt-2 text-xl font-bold text-center text-gray-600">Welcome Back</h3>
                    <p className="text-center text-gray-500">Login or create account</p>

                    <form onSubmit={handleSignIn}>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-lg outline-none" type="email" name="email" placeholder="Email Address" aria-label="Email Address" required />
                        </div>

                        <div className="w-full mt-4 relative">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-lg outline-none" type={see ? "password" : "text"} name="password" placeholder="Password" aria-label="Password" required />
                            <div onClick={seeOrNot} className="absolute top-2/4 -translate-y-2/4 right-0 px-2">
                                <span className="cursor-pointer">{see ? <IoEyeOffOutline className="text-xl" /> : <IoEyeOutline className="text-xl" />}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-500">Forget Password?</a>

                            <button className="btn btn-warning bg-warning text-white min-h-[2.5rem] h-[2.5rem] transition-transform" hidden={loading}>
                                {loading ? (
                                    <>Sign In <span className="loading bg-white loading-spinner loading-sm"></span></>
                                ) : (
                                    <>
                                        Sign In <CiLogin className="text-lg" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="divider mt-4">Login with </div>

                    <div className="flex justify-center gap-4 lg:px-6 px-8 mb-4">
                        <button onClick={handleGoogleSignIn} className="btn bg-transparent hover:bg-transparent border w-1/2 flex justify-center py-2 rounded-xl">
                            <FaGoogle className="text-3xl" />
                        </button>
                        <button onClick={handleGithubSignIn} className="btn bg-transparent hover:bg-transparent border w-1/2 flex justify-center py-2 rounded-xl">
                            <FaGithub className="text-3xl" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <Link to={"/register"} className="mx-2 text-sm font-bold text-blue-500 hover:underline">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
