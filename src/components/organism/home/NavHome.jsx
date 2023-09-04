"use client";
import Link from "next/link";

const NavHome = () => {
  const NavLink = [
    {
      href: "matrix-addition",
      h1: "matrix addition",
      p: "+",
    },
    {
      href: "matrix-subtraction",
      h1: "matrix subtraction",
      p: "-",
    },
    {
      href: "matrix-multiplication",
      h1: "matrix multiplication",
      p: "x",
    },
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-center items-center gap-2 mt-10 w-[80%]">
      {NavLink.map((e, i) => {
        return (
          <Link
            href={e.href}
            key={i}
            className="flex flex-col justify-center items-center border-2 border-blue-100 bg-blue-900 rounded-lg text-center py-3 w-full md:w-[200px] lg:w-[300px]"
          >
            <h1 className="text-sm font-bold ld:text-lg whitespace-nowrap text-slate-50">
              {e.h1}
            </h1>
            <p className="text-4xl font-bold text-slate-50">{e.p}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavHome;
