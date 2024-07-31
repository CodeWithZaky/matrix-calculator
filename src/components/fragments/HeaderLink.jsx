"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-start gap-1 w-1/3 italic">
      <Link
        className="block sm:hidden px-1 rounded-lg text-center text-slate-200 underline italic tracking-wide"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`whitespace-nowrap rounded-lg px-1 tracking-wide underline ${
          pathname == "/matrix-addition"
            ? "text-blue-400/90 hover:text-blue-400/95"
            : "text-slate-200 hover:text-slate-200/90"
        }`}
        href="/matrix-addition"
      >
        Matrix Addition
      </Link>
      <Link
        className={`whitespace-nowrap rounded-lg px-1 tracking-wide underline ${
          pathname == "/matrix-subtraction"
            ? "text-blue-400/90 hover:text-blue-400/95"
            : "text-slate-200 hover:text-slate-200/90"
        }`}
        href="/matrix-subtraction"
      >
        Matrix Subtraction
      </Link>
      <Link
        className={`whitespace-nowrap rounded-lg px-1 tracking-wide underline ${
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
