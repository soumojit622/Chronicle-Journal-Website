import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaAngleRight,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-200 to-orange-400 text-gray-700 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand & About */}
        <div>
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.svg"
              alt="Chronicle Logo"
              width={40}
              height={40}
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Chronicle
            </h2>
          </div>
          <p className="text-sm mt-3 text-gray-600 leading-relaxed">
            Capture your thoughts, memories, and moments effortlessly. Stay
            organized and inspired every day.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          {[
            { name: "About", href: "/about" },
            { name: "Features", href: "/features" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Contact", href: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group relative flex items-center transition-transform transform hover:scale-105 hover:text-black"
            >
              <FaAngleRight className="mr-2" />
              <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-800 after:transition-all after:duration-300 group-hover:after:w-full">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Extra Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">Explore</h3>
          {[
            { name: "Write a Journal", href: "/write" },
            { name: "Dashboard", href: "/dashboard" },
            { name: "Support", href: "/support" },
            { name: "Blog", href: "/blog" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group relative flex items-center transition-transform transform hover:scale-105 hover:text-black"
            >
              <FaAngleRight className="mr-2" />
              <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-800 after:transition-all after:duration-300 group-hover:after:w-full">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Stay Updated</h3>
          <p className="text-sm mt-3 text-gray-600 leading-relaxed">
            Subscribe to our newsletter for updates and inspiration.
          </p>
          <form className="mt-4 flex flex-col sm:flex-row">
            <div className="relative flex-grow">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="Mail..."
                className="pl-10 pr-4 py-2 w-full border border-orange-300 rounded-md sm:rounded-l-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md sm:rounded-r-md hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-orange-300 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Social Media Links */}
        <div className="flex space-x-4 sm:space-x-5">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebook className="h-6 w-6 text-gray-600 hover:text-blue-600 transition" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="h-6 w-6 text-gray-600 hover:text-blue-500 transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram className="h-6 w-6 text-gray-600 hover:text-pink-500 transition" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="h-6 w-6 text-gray-600 hover:text-blue-700 transition" />
          </Link>
          <Link href="https://github.com" target="_blank">
            <FaGithub className="h-6 w-6 text-gray-600 hover:text-gray-900 transition" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 mt-4 sm:mt-0">
          © {new Date().getFullYear()} Chronicle. All rights reserved.
        </p>
      </div>

      {/* Made with love */}
      <div className="mt-6 text-center text-gray-700 text-sm">
        Made with ❤️ by{" "}
        <span className="font-semibold text-gray-900 transition">
          Soumojit Banerjee
        </span>
      </div>
    </footer>
  );
}
