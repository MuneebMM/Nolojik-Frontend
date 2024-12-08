"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Joinus from "../components/Joinus";
import Footer from "../components/Footer";

export default function Homepage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        console.log(new Date().toISOString());
    }, []); // Logs timestamp to the console on component mount.

    if (!isClient) {
        return null;
    }

    const cardsData = [
      {
        profileImage: '/Ellipse7.png',
        name: 'Zoeb Itarsiwala',
        username: 'WPSL',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        date: 'Jan 12, 2024',
      },
      {
        profileImage: '/Ellipse7.png',
        name: 'Saravanan Murugan',
        username: 'Wolf',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        date: 'Jan 12, 2024',
      },
      {
        profileImage: '/Ellipse7.png',
        name: 'Mohammed Myeen',
        username: 'CEO',
        comment: "Just started using Poppins for data analytics and it's a game-changer! The AI-powered calculations and predictions help me stay ahead of market trends. Just started using Poppins for data analytics and it's a game-changer! The AI-powered calculations and predictions help me stay ahead of market trends. #DataAnalytics #AI #Marketing",
        date: 'Jan 12, 2024',
      },
    ];
  
    // Reusable card component
    const Card = ({ profileImage, name, username, comment, date }) => (
      <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 mb-4">
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
            <Image
              src={profileImage || '/default-profile.png'}
              alt="Profile"
              width={48}
              height={48}
            />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm text-gray-500">@{username}</p>
          </div>
        </div>
        <p className="text-gray-700">{comment}</p>
        <p className="text-sm text-gray-400 mt-3">{date}</p>
      </div>
    );

    return (
        <>
          <section
            className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: "url('./wallpaper1.jpg')" }}
          >
              {/* Overlay */}
              <div className="absolute inset-0"></div>

              {/* Content on the Wallpaper */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                {/* Main Headline */}
                <h1 className="text-3xl md:text-6xl font-bold mb-6 font-sans">
                  Your Vision Our Expertise,<br/> Crafting Tomorrow's <span className="text-gray-400">Apps Today</span>
                </h1>
                {/* Sub Headline */}
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                  Empower Teams, Streamline Workflows, and Opt for the Right Tech. We Make Digital Transformation Seamless.
                </p>
                {/* Input and Button */}
                <div className="flex items-center justify-center space-x-2 max-w-lg w-full">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="flex-grow py-3 px-4 rounded-full border border-gray-200 outline-none bg-white text-black placeholder-gray-500" 
                  />
                  <button 
                    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-800">
                    Submit
                  </button>
                </div>
              </div>
          </section>

          {/* Trusted by Top-tier Companies Section */}
          <section className="w-full py-16 flex flex-col items-center">
              <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center">Trusted by Top-tier Product Companies</h2>
              <div className="flex flex-wrap justify-center items-center space-x-8">
                <div className="w-40 h-20 relative">
                  <Image src="/bcs.png" alt="Company Logo 1" layout="fill" objectFit="contain" />
                </div>
                <div className="w-40 h-20 relative">
                  <Image src="/wpsl.png" alt="Company Logo 2" layout="fill" objectFit="contain" />
                </div>
              </div>
          </section>

          <div className="flex flex-col items-center justify-start bg-gray-50">
            {/* Top Text */}
            <div className="pt-8">
              <p className="text-sm md:text-base text-gray-500 text-center">
                Your next-gen software partner
              </p>
            </div>
            {/* Main Heading */}
            <div className="mt-4 px-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Integrations to platforms that <span className="text-blue-500">power your</span>
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold py-1 text-blue-500">
                business
              </h1>
            </div>

            {/* Subtext */}
            <div className="mt-4 px-4 max-w-3xl text-center">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We seamlessly integrate Design, Coding, Business Strategy, and Data
                Analytics to fast-track your Digital transformation journey.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-50 w-full py-11"> {/* Removed unnecessary padding/margin */}
              <div className="w-full px-4 md:px-6 flex flex-col md:flex-row items-center justify-center max-w-6xl">
                {/* Left Div */}
                <div className="flex-1 px-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                    Advance Analytics
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">
                    Say goodbye to endless hours spent searching for solutions and struggling with syntax.
                  </p>
                  <div className="space-y-2 flex flex-col">
                    <button className="w-full md:w-auto px-6 py-3 rounded-md bg-white text-black border border-gray-300 hover:bg-gray-100 transition">
                      Innovative Design
                    </button>
                    <button className="w-full md:w-auto px-6 py-3 rounded-md bg-white text-black border border-gray-300 hover:bg-gray-100 transition">
                      Agile Development
                    </button>
                    <button className="w-full md:w-auto px-6 py-3 rounded-md bg-white text-black border border-gray-300 hover:bg-gray-100 transition">
                      Customer Focus
                    </button>
                  </div>
                </div>

                {/* Right Div */}
                <div className="flex-1 relative h-80 px-6">
                  {/* First Image */}
                  <div className="absolute bottom-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/Rectangle16.jpg"
                      alt="Image 1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  {/* Second Image */}
                  <div className="absolute bottom-8 left-4 w-[90%] h-[90%] rounded-lg overflow-hidden shadow-lg z-10">
                    <img
                      src="/Rectangle18.jpg"
                      alt="Image 2"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  {/* Third Image */}
                  <div className="absolute bottom-16 left-8 w-[80%] h-[80%] rounded-lg overflow-hidden shadow-lg z-20">
                    <img
                      src="/Rectangle17.jpg"
                      alt="Image 3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
          </div>

          <div className="my-14 px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Elevate Your Digital Presence with Our Expert  
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Services Dynamic Web & Mobile Solutions
              </h2>
          </div>


          <div className="flex flex-wrap justify-center gap-1 p-8 bg-white">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-80 h-80">
              <Image
                src="/custom-software1.png"
                alt="Custom Software"
                width={96}
                height={96}
                className="object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2">Custom Software Development</h2>
              <p className="text-gray-600">
                Next-Generation Web Development: Harness the power of Node.js and React for sleek, responsive websites that captivate and engage.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-80 h-80">
              <Image
                src="/revolution1.png"
                alt="Strategic Product Management"
                width={96}
                height={96}
                className="object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2">Strategic Product Management</h2>
              <p className="text-gray-600">
                Tap into the future with our cutting-edge AI applications, transforming how you interact with data and customers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-80 h-80">
              <Image
                src="/mobile-mastry1.png"
                alt="Mobile Mastery"
                width={96}
                height={96}
                className="object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2">Mobile Mastery</h2>
              <p className="text-gray-600">
                From intuitive native apps to versatile cross-platform solutions, we're redefining mobile user experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-1 p-8 bg-white">
            {/* Card 4 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-80 h-auto">
              <Image
                src="/strategy1.png"
                alt="Strategic Product Management"
                width={96}
                height={96}
                className="object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2">Strategic Product Management</h2>
              <p className="text-gray-600">
                Your vision, our expertise. Guiding every step from ideation to launch, we ensure your product not only meets the market needs but sets new benchmarks. Assured Quality and Reliability.
              </p>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-80 h-auto">
              <Image
                src="/testing1.png"
                alt="QA and Testing"
                width={96}
                height={96}
                className="object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2">QA and Testing</h2>
              <p className="text-gray-600">
                Our comprehensive QA process guarantees that your product is not just bug-free but also exceeds the highest standards of performance and security. Robust Backend Development with Golang.
              </p>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-80 h-auto">
              <Image
                src="/cloud-integration1.png"
                alt="Cloud Integration"
                width={96}
                height={96}
                className="object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2">Cloud Integration</h2>
              <p className="text-gray-600">
                Experience unparalleled efficiency and scalability with our Golang-powered backend solutions, the backbone of high-performing applications. Discover How We Can Transform Your Business.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 hover:text-white flex items-center space-x-2">
              <span>Explore more</span>
              <Image src="/SendButton.png" alt="Arrow" width={16} height={12} />
            </button>
          </div>


            <div className="mt-16 px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                  Experience the Marvel of Collaboration
                
                </h1>
                <h1 className="text-3xl md:text-5xl font-bold py-1">
                  Where Wonders Unfold in Our <span className=" text-blue-500">Partnership</span>
                </h1>
            </div>

            <div className="flex justify-center gap-6 p-4 mt-10 bg-gray-50">
              <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-6 h-auto">
                <Image
                  src="/Ideal.png"
                  alt="The ideal individuals"
                  width={96}
                  height={96}
                  className="object-contain mb-4"
                />
                <h2 className="text-lg font-bold mb-2">The ideal individuals</h2>
                <p className="text-gray-600">
                  Our thorough recruitment procedure guarantees that only highly competent and reliable candidates successfully navigate through the process.
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-6 h-auto">
                <Image
                  src="/Vector1.png"
                  alt="The optimal location"
                  width={96}
                  height={96}
                  className="object-contain mb-4"
                />
                <h2 className="text-lg font-bold mb-2">The optimal location</h2>
                <p className="text-gray-600">
                  Our teams align with your online presence, ensuring availability when you need them. Seamless communication in English.
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-6 p-4 bg-white">
              <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-3 h-auto">
                <Image
                  src="/Vector2.png"
                  alt="The perfect team"
                  width={96}
                  height={96}
                  className="object-contain mb-4"
                />
                <h2 className="text-lg font-bold mb-2">The perfect team</h2>
                <p className="text-gray-600">
                  From individual engineers to collaborative multi-team endeavors. Diverse project management options for added flexibility.
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md p-6 h-auto">
                <Image
                  src="/Vector3.png"
                  alt="The opportune moment"
                  width={96}
                  height={96}
                  className="object-contain mb-4"
                />
                <h2 className="text-lg font-bold mb-2">The opportune moment</h2>
                <p className="text-gray-600">
                  Initiate teams precisely when required. Effortlessly adjust your scale, either up or down.
                </p>
              </div>
            </div>


            <div className="mt-16 px-4 text-center py-8">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                  Just hear what they're
                </h1>
                <h1 className="text-3xl md:text-5xl font-bold py-1">
                  saying <span className=" text-blue-500">about us</span>
                </h1>
            </div>

            <div className="container mx-auto p-8 bg-gray-100">
              <div className="flex space-x-2">
                {/* First div: 3 cards */}
                <div>
                  {cardsData.slice(0, 3).map((card, index) => (
                    <Card key={index} {...card} />
                  ))}
                </div>

                {/* Second div: 2 cards */}
                <div>
                  {cardsData.slice(1, 3).map((card, index) => (
                    <Card key={index} {...card} />
                  ))}
                </div>

                {/* Third div: 3 cards */}
                <div>
                  {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center p-4">
                <button className="flex items-center justify-center rounded-md px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white">
                  View All
                </button>
              </div>

            </div>

            <div className="border-t-2 border-dashed border-gray-300 mb-8"></div>
            
            <div className="container mx-auto p-8 mt-20">
              {/* Heading */}
              <h1 className=" text-center justtext-3xl md:text-5xl font-bold mb-6 font-sans">
                Read resources written by <span className="text-blue-500">professionals.</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-center text-gray-700 max-w-2xl mx-auto">
                Our AI-powered tool takes your ideas and turns them <br/>into captivating, reader-friendly content that resonates with your audience.
              </p>
            </div>

            <div className="container mx-auto px-16">
              {/* Cards Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {/* Card 1 */}
                <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/RectangleImage1.png"
                      alt="Rectangle Image 1"
                      width={320}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
                    <span>Blog</span>
                    <span>Jan 12, 2024</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2">First iOS App (Hello World)</h2>
                  <p className="text-gray-700 mb-4">
                    Imagine you're a painter. Your canvas is a blank screen, your brush is the Swift programming language...
                  </p>
                  <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
                    Read Now
                  </button>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/RectangleImage2.png"
                      alt="Rectangle Image 2"
                      width={320}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
                    <span>Blog</span>
                    <span>Feb 5, 2024</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2">Setting Up Android Studio</h2>
                  <p className="text-gray-700 mb-4">
                    Imagine you're a chef, ready to create a culinary masterpiece. But before you can start cooking...
                  </p>
                  <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
                    Read Now
                  </button>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/RectangleImage3.png"
                      alt="Rectangle Image 3"
                      width={320}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
                    <span>Blog</span>
                    <span>Mar 20, 2024</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2">Random Forests: Ensemble Learning</h2>
                  <p className="text-gray-700 mb-4">
                    Imagine you're trying to decide on a movie to watch. You could ask a single friend for a recommendation...
                  </p>
                  <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
                    Read Now
                  </button>
                </div>
              </div>
            </div>

            <Joinus/>

            <Footer/>


        </>
    );
}

