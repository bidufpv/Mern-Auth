import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function Signup() {
    const [formData, SetFormData] = useState({});
    const [loading, SetLoading] = useState(false);
    const [error, SetError] = useState(false);

    const handleChange = (e) => {
        SetFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            SetLoading(true);
            SetError(false);
            const res = await fetch("http://localhost:4000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            SetLoading(false);

            if (data.success === false) {
                SetError(true);
                return;
            }
        } catch (error) {
            SetLoading(false);
            SetError(true);
        }
    };

    return (
      
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center text-blue-400 font-semibold my-10">SIGN UP</h1>
            <AuthForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleFormSubmit}
                loading={loading}
                buttonText="Sign Up"
            />

            <OAuth/>

         <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to='/Signin'>
          <span className="text-blue-500">SignIn</span>
          </Link>
            {error && <p className="text-red-600 mt-5">Something went wrong!</p>}
        </div>
        </div>
    );
}
