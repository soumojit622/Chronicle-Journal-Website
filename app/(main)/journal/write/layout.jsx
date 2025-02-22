import Link from "next/link";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import { FiArrowLeft } from "react-icons/fi"; // Importing React Icons

export default function WriteLayout({ children }) {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      {/* Back to Dashboard Button with Icon */}
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-orange-600 font-medium hover:text-orange-700 hover:scale-105 transition-all duration-200"
        >
          <FiArrowLeft className="mr-2" size={16} /> Back to Dashboard
        </Link>
      </div>

      {/* Suspense Fallback Loader with an Icon */}
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-32 gap-3">
            <BarLoader color="#ea580c" width={"100%"} />
            <p className="text-sm text-gray-600">Loading your journal...</p>
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
