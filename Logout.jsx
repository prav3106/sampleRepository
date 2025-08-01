import React from 'react';

export default function Logout() {
  const handleLogout = () => {
    // Logic to clear session or token
    console.log('User logged out.');
    window.location.href = '/'; // Redirect to login or home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 via-pink-500 to-purple-500 text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6">You are Logged Out</h1>
        <p className="mb-8 text-white/80">Thank you for using our service. See you soon!</p>
        <button
          onClick={handleLogout}
          className="bg-white text-red-500 font-semibold px-6 py-3 rounded-xl hover:bg-red-100 transition duration-300 shadow-lg"
        >
          Login Again
        </button>
      </div>
    </div>
  );
}

