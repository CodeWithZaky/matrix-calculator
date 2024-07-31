"use client";
import Link from "next/link";

const NavHome = () => {
  const NavLink = [
    {
      href: "matrix-addition",
      label: "matrix addition",
      symbol: "+",
    },
    {
      href: "matrix-subtraction",
      label: "matrix subtraction",
      symbol: "-",
    },
    {
      href: "matrix-multiplication",
      label: "matrix multiplication",
      symbol: "x",
    },
  ];

  return (
    <nav className="flex md:flex-row flex-col justify-start items-center gap-2 mt-10 w-full">
      {NavLink.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={index}
            className="flex flex-col justify-center items-center border-2 border-slate-50 bg-blue-900/90 hover:bg-blue-900 shadow-lg shadow-slate-500 py-3 rounded-lg w-full md:w-[200px] lg:w-[300px] text-center"
          >
            <h1 className="font-bold text-slate-50 text-sm ld:text-lg whitespace-nowrap">
              {item.label}
            </h1>
            <p className="font-bold text-4xl text-slate-50">{item.symbol}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavHome;
