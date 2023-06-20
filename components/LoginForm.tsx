'use client'
import { useState } from "react";
import { signInUser } from "../services/Auth";
import Link from 'next/link'

interface FormData {
    username: string;
    password: string;
}

const LoginForm = () => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        const response = await signInUser(formData);
        console.log(response)
        } catch (error) {
        console.error(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        }));
    };

    return (
        <div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Login Form</h2>
        <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-1">
            Username
            </label>
            <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
            Password
            </label>
            <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            />
        </div>
        <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        >
            Login
        </button>
        </form>
        <Link href="/register">Not a user? Register here</Link>
        </div>
    );
};


export default LoginForm

