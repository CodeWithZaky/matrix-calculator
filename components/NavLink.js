import Link from "next/link";
import React from "react";

const NavLink = () => {
  return (
    <nav className="flex items-start flex-col gap-1 italic">
      <Link
        className="block sm:hidden px-1 rounded-lg text-center font-semibold text-blue-800 underline italic"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="px-1 rounded-lg text-center font-semibold text-blue-900 underline"
        href={"/matrix-addition-112210010"}
      >
        Matrix Addition
      </Link>
      <Link
        className="px-1 rounded-lg text-center font-semibold text-blue-900 underline"
        href={"/matrix-reduction-112210010"}
      >
        Matrix Reduction
      </Link>
      <Link
        className="px-1 rounded-lg text-center font-semibold text-blue-900 underline"
        href={"/matrix-multiplication-112210010"}
      >
        Matrix Multiplication
      </Link>
    </nav>
  );
};

export default NavLink;
