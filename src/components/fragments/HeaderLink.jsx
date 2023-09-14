"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-start w-1/3 gap-1 italic">
      <Link
        className="block px-1 italic tracking-wide text-center underline rounded-lg sm:hidden text-slate-200"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`px-1 rounded-lg tracking-wide underline whitespace-nowrap ${
          pathname == "/matrix-addition"
            ? "text-blue-400/90 hover:text-blue-400/95"
            : "text-slate-200 hover:text-slate-200/90"
        }`}
        href="/matrix-addition"
      >
        Matrix Addition
      </Link>
      <Link
        className={`px-1 rounded-lg tracking-wide underline whitespace-nowrap ${
          pathname == "/matrix-subtraction"
            ? "text-blue-400/90 hover:text-blue-400/95"
            : "text-slate-200 hover:text-slate-200/90"
        }`}
        href="/matrix-subtraction"
      >
        Matrix Subtraction
      </Link>
      <Link
        className={`px-1 rounded-lg tracking-wide underline whitespace-nowrap ${
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
