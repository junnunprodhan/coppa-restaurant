import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useUser from "../../Hooks/useUser/useUser";
import toast from "react-hot-toast";
import { FaSpinner, FaGoogle } from "react-icons/fa";


const Login = () => {
    const { loginUser, singInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const path = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const [spin, setSpin] = useState(false)
    const handleSubmit = (e) => {
        setSpin(true)
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const userData = result.user
                const user = { email: userData.email, name: userData.displayName, photo: userData.photoURL }
                useUser(user)
                setSpin(false)
                navigate(path)
                toast.success(`user login successful`)
            })
            .catch(err => {
                toast.error(err.message)
                setSpin(false)
            })
    };

    const HandleToLoginWithGoogle = () => {
        singInWithGoogle()
            .then(result => {
                const userData = result?.user
                const user = { email: userData.email, name: userData.displayName, photo: userData.photoURL }
                useUser(user)
                setSpin(false)
                navigate(path)
                toast.success(`user login successful`)
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center w-full text-white ">
            <div className="w-96 h-[440px] px-4 py-6 bg-gray-800 rounded-lg shadow-2xl">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-black text-white"
                            type="email"
                            id="email"
                            email="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-black text-white"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mt-4 mb-4 text-orange-300 hover:text-orange-500">
                        <Link to={'/singup'}>Register now</Link>
                    </div>
                    <button
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300 uppercase"
                        type="submit"
                    >
                        {spin ? <p className=" flex items-center justify-center"><FaSpinner /></p> : 'Login'}
                    </button>
                    <div className=" divider">OR</div>

                </form>
                <div className=" mt-5">
                    <button onClick={HandleToLoginWithGoogle}
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
                        type="submit"
                    >
                        <p className=" flex items-center justify-center"><FaGoogle size={23} /></p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
