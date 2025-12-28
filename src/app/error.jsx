"use client";

import Link from "next/link";
import { BiSolidError } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

export default function error() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-base-100 to-base-200 text-base-content transition-colors duration-300">
      <div className="text-center p-8 glass-effect shadow-2xl rounded-3xl max-w-lg w-full mx-4">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <BiSolidError className="text-error w-24 h-24 animate-bounce" />
        </div>

        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-error tracking-widest mb-4">
          404
        </h1>

        {/* Error Badge */}
        <div className="inline-block bg-error/20 px-4 py-2 text-sm font-semibold rounded-lg mb-6">
          <MdErrorOutline className="inline mr-2 w-5 h-5" />
          Page Not Found
        </div>

        {/* Error Message */}
        <h2 className="text-2xl font-semibold md:text-3xl mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-base-content/70 mb-8">
          Sorry, we could not find the page you are looking for.
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white transition-all bg-primary rounded-full hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-primary shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
          <IoHomeSharp className="w-5 h-5" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
