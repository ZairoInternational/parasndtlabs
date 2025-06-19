import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const QuoteButton = () => {
  return (
    <button>
      <Link
        href="/quote"
        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors mt-4"
      >
        Get Testing Quote <ArrowRight className=" ml-2" />
      </Link>
    </button>
  );
};

export default QuoteButton;
