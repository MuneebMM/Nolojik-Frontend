"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/Logo.png" // Replace with your actual logo path
              alt="Nolojik Logo"
              width={220}
              height={40}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Navigation Section */}
          <nav className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-12 text-gray-800">
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
            <a href="#" className="hover:text-blue-500">
              Services
            </a>
            <a href="#" className="hover:text-blue-500">
              About us
            </a>
            <a href="#" className="hover:text-blue-500">
              Blog
            </a>
          </nav>
        </div>

        {/* Middle Section */}
        <div className="mt-6 text-center lg:text-left px-4">
          <p className="text-gray-600 mb-4 leading-relaxed">
            Empower Teams, Streamline Workflows, and <br />
            Opt for the Right Tech- We Make Digital <br />
            Transformation Seamless
          </p>
          <p className="text-gray-800 font-medium">
            Contact us <br /> +91 9008108650
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center text-center px-4">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 text-gray-600 text-sm">
            <a href="#" className="hover:text-blue-500">
              Terms & Conditions
            </a>
            <span className="hidden lg:inline">|</span>
            <a href="#" className="hover:text-blue-500">
              Privacy Policy
            </a>
          </div>
          <p className="mt-4 lg:mt-0 text-gray-500 text-sm">
            © Copyright 2024 Nolojik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
