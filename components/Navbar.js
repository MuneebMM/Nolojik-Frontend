import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-4 bg-white shadow-md">
      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden flex justify-between w-full items-center">
        <div className="flex-grow flex justify-center">
          <Image src="/Logo.png" alt="Logo" width={180} height={50} />
        </div>
        <button onClick={toggleNav} className="text-3xl focus:outline-none">
          {navOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Links Section - Left */}
      <div
        className={`${
          navOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center gap-y-6 md:gap-x-8 mt-4 md:mt-0 md:order-none space-x-8`}>
        <Link href="/Homepage" className="nav-link hover:text-blue-400">
          Home
        </Link>
        <Link href="/services" className="nav-link hover:text-blue-400">
          Service
        </Link>
        <Link href="/About" className="nav-link hover:text-blue-400">
          About Us
        </Link>
        <Link href="/blog" className="nav-link hover:text-blue-400">
          Blog
        </Link>
      </div>

      {/* Center Section - Logo/Image */}
      <div className="hidden md:flex-grow md:flex justify-start my-4 md:my-0 md:pl-48">
        <Image src="/Logo.png" alt="Logo" width={180} height={50} />
      </div>


      {/* Right Section - Buttons */}
      <div className={`${
          navOpen ? 'flex' : 'hidden'
        } md:flex space-x-4 mt-4 md:mt-0`}>
        <button className="px-8 py-2 rounded hover:bg-blue-700 hover:text-white border border-blue-500">
          Request a Demo
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 hover:text-white flex items-center space-x-2">
          <span>Contact</span>
          <img src="/SendButton.png" alt="Arrow" className="w-4 h-3" />
        </button>

      </div>
    </nav>
  );
}

