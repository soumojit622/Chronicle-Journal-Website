import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import { FiArrowLeft } from "react-icons/fi";

export default function EntryLayout({ children }) {
  return (
    <div className="px-4 py-8">
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-orange-600 font-medium hover:text-orange-700 hover:scale-105 transition-all duration-200"
        >
          <FiArrowLeft className="mr-2" size={16} /> Back to Dashboard
        </Link>
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
