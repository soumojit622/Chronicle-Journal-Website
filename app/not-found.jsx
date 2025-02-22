import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 text-center px-6">
      {/* Animated Floating Box */}
      <div className="bg-white/20 backdrop-blur-xl shadow-xl border border-orange-500 shadow-orange-400/50 rounded-2xl p-10 max-w-md w-full animate-float">
        <h1 className="text-9xl font-extrabold text-orange-600 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-700 mt-2">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-orange-600 text-white text-lg font-medium rounded-full shadow-lg hover:bg-orange-700 hover:scale-110 transition-all duration-300 ease-in-out">
            Return Home
          </button>
        </Link>
      </div>

      {/* Subtle Branding at the Bottom */}
      <div className="mt-10 text-gray-600 text-sm italic">
        &mdash; Crafted with ❤️ by Chronicle &mdash;
      </div>
    </div>
  );
}
