// src/components/Signup.js
import { FaSpinner, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ConvertLink from "../../Hooks/Image/ConvertLink";
import toast from "react-hot-toast";
const Signup = () => {
    const [error, setError] = useState('')
    const [spin, setSpin] = useState(false)
    const navigate = useNavigate()
    const { createUser, logOut, updateUser, singInWithGoogle } = useContext(AuthContext)
    const handleSubmit = (e) => {
        setSpin(true)
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const image = form.file.files[0];
        // Add password confirmation check
        if (password !== confirmPassword) {
            setSpin(false)
            return setError("Didn't match password")
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])/;
        if (!passwordRegex.test(password)) {
            setSpin(false)
            return setError("Password must contain at least 6 characters, including at least one uppercase letter");

        }
        ConvertLink(image)
            .then(data => {
                if (data.success) {
                    const image = data?.data?.display_url
                    createUser(email, password)
                        .then(result => {
                            updateUser(fullName, image)
                            logOut()
                            setSpin(false)
                            navigate('/login')
                            toast.success(`${fullName} account created successful`)
                        })

                }
            })
            .catch(error => {
                toast.error(error.message)
                setSpin(false)
            })
    };


    const HandleToCreateUserWithGoogle = () => {
        setSpin(true)
        singInWithGoogle()
            .then((result) => {
                logOut()
                setSpin(false)
                navigate('/login')
                toast.success(`user account created successful`)
            })
            .catch(error => {
                setSpin(false)
                toast.error(error.message)
            })
    }


    return (
        <div className="min-h-screen flex items-center justify-center md:pt-20 pt-0">
            <div className="w-96 px-4 py-4 bg-gray-800 rounded-md shadow-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-white">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-black text-white"
                            type="text"
                            name="fullName"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-black text-white"
                            type="email"
                            name="email"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-black text-white"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-black text-white"
                            type="password"
                            name="confirmPassword"
                            placeholder="Enter your confirm password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="fileInput">
                            Upload Profile Picture
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none border-dotted focus:ring focus:ring-blue-300 bg-black text-white"
                            type="file"
                            name="file"
                            accept="image/*"

                        />
                    </div>
                    <div>
                        <p className="mb-4">Have an account? <Link to={'/login'} className=" text-orange-300 hover:text-orange-500">Login now</Link></p>
                        <p className="mb-4 text-red-500 mt-4">{error}</p>
                    </div>
                    <button disabled={spin}
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 flex justify-center uppercase"
                        type="submit"
                    >
                        {spin ? <FaSpinner className=" flex justify-center animate-spin" /> : 'Register'}
                    </button>
                </form>
                <div className=" mt-5">
                    <button onClick={HandleToCreateUserWithGoogle}
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

export default Signup;
