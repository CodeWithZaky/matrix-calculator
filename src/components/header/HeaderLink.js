"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const HeaderLink = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-start flex-col gap-1 italic w-1/3">
      <Link
        className="block sm:hidden px-1 rounded-lg text-center font-semibold text-slate-200 underline italic"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`px-1 rounded-lg  font-semibold underline whitespace-nowrap ${
          pathname == "/matrix-addition"
            ? "text-blue-400/90 hover:text-blue-400/95"
            : "text-slate-200 hover:text-slate-200/90"
        }`}
        href="/matrix-addition"
      >
        Matrix Addition
      </Link>
      <Link
        className={`px-1 rounded-lg  font-semibold underline whitespace-nowrap ${
          pathname == "/matrix-subtraction"
            ? "text-blue-400/90 hover:text-blue-400/95"
            : "text-slate-200 hover:text-slate-200/90"
        }`}
        href="/matrix-subtraction"
      >
        Matrix Subtraction
      </Link>
      <Link
        className={`px-1 rounded-lg font-semibold underline whitespace-nowrap ${
          pathname == "/matrix-multiplication"
            ? "text-blue-400/90 hover:text-blue-400/95"
            : "text-slate-200 hover:text-slate-200/90"
        }`}
        href="/matrix-multiplication"
      >
        Matrix Multiplication
      </Link>
    </nav>
  );
};

export default HeaderLink;
