"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-start flex-col gap-1 italic">
      <Link
        className="block sm:hidden px-1 rounded-lg text-center font-semibold text-blue-800 underline italic"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`px-1 rounded-lg  font-semibold underline ${
          pathname == "/matrix-addition" ? "text-slate-800" : "text-blue-900"
        }`}
        href="/matrix-addition"
      >
        Matrix Addition
      </Link>
      <Link
        className={`px-1 rounded-lg  font-semibold underline ${
          pathname == "/matrix-subtraction" ? "text-slate-800" : "text-blue-900"
        }`}
        href="/matrix-subtraction"
      >
        Matrix Subtraction
      </Link>
      <Link
        className={`px-1 rounded-lg font-semibold underline ${
          pathname == "/matrix-multiplication"
            ? "text-slate-800"
            : "text-blue-900"
        }`}
        href="/matrix-multiplication"
      >
        Matrix Multiplication
      </Link>
    </nav>
  );
};

export default NavLink;
