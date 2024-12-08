"use client";

import Navbar from "../components/Navbar";
import Homepage from "../pages/Homepage";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        console.log(new Date().toISOString());
    }, []); // This will log the timestamp to the console on component mount.

    if (!isClient) {
        return null;
    }

    return (
        <>
          <Navbar/>
          <Homepage/>
        </>
    );
} 
