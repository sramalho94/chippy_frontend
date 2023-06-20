'use client'
import { useState } from "react";
import { registerUser } from "../services/Auth";

interface FormData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

const Registration = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData);
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
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
      <div className="mb-4">
        <label htmlFor="firstName" className="block font-medium mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block font-medium mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
      >
        Register
      </button>
    </form>
  );
};


export default Registration

