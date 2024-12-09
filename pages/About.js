"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Joinus from "../components/Joinus";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }); // Logs timestamp to the console on component mount.

  return (
    <>
      <Navbar/>
    </>
  );
};
