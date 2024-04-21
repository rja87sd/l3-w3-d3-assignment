/*
  Credit: Assistance and comments by ChatGPT
*/

import Image from "next/image"; // Import the Image component from Next.js
import Link from "next/link"; // Import the Link component from Next.js

// Define the Home component
export default function Home() {
  return (
    <main>
      {/* Container for the Hero section */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        {/* Background image */}
        <div>
          <Image
            src="/background.png" // Source of the background image
            alt="Background" // Alternative text for accessibility
            width="600" // Width of the image
            height="300" // Height of the image
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {" "}
          {/* Container for the content */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {" "}
            {/* Headline */}
            Welcome to My Page!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {" "}
            {/* Description */}
            Come away in now!
          </p>
          <Link
            href="/dashboard" // Link destination
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out" // Button styles
          >
            Enter {/* CTA Button */}
          </Link>
        </div>
      </div>
    </main>
  );
}
