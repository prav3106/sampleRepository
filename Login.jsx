import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
      <div className="bg-white bg-opacity-10 backdrop-blur-md shadow-2xl rounded-3xl px-10 py-12 w-full max-w-md text-white">
        <h2 className="text-4xl font-bold mb-8 text-center drop-shadow-lg">Welcome Back</h2>
        <form className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-purple-600 font-semibold py-3 rounded-xl shadow-lg hover:bg-purple-100 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-white/80">
          Don't have an account? <a href="#" className="underline hover:text-white">Sign up</a>
        </p>
      </div>
    </div>
  );
}

