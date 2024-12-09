"use client";

import Navbar from "../components/Navbar";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
          <Navbar/>
          <Homepage/>
          

        </>
    );
} 
