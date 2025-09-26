import React, { useState } from "react";

const TwoWayBinding = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=> {
        e.preventDefault();
        console.log(email)
        console.log(password)

        setEmail('')
        setPassword('')
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
      onSubmit={(e)=>{
        submitHandler(e)
      }}
       className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login Form
        </h2>

        {/* Email Input */}
        <input
        value={email}
        onChange={(e)=> {
            setEmail(e.target.value);
        }}
          type="email"
          placeholder="Enter your email..."
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Input */}
        <input
        value={password}
        onChange={(e)=> {
            setPassword(e.target.value);
        }}
          type="password"
          placeholder="Enter your password..."
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default TwoWayBinding;

