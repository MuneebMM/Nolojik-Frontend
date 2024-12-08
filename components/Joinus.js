"use client";

import Image from "next/image";

export default function JoinUs() {
  return (
    <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: "url('/wallpaper1.jpg')" }}
        >
        {/* Content Wrapper */}
        <div className="text-center bg-transparent backdrop-blur-sm p-8 rounded-lg shadow-md max-w-2xl">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Join Us on <span className="text-blue-600">Your Innovation Journey</span>
            </h1>
            {/* Subtext */}
            <p className="text-gray-600 text-lg mb-8">
            Your vision is our blueprint. Together, <br /> let's bring it to life.
            </p>
            {/* Input and Button */}
            <div className="flex items-center border rounded-full overflow-hidden bg-white">
            <input
                type="email"
                placeholder="Email"
                className="py-3 px-4 flex-grow border-none outline-none text-gray-700 placeholder-gray-400"
            />
            <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-200"
            >
                Submit
            </button>
            </div>
        </div>
    </div>

  );
}
