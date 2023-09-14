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
    <nav className="flex flex-col md:flex-row justify-center items-center gap-2 mt-10 w-[80%]">
      {NavLink.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={index}
            className="flex flex-col justify-center items-center border-2 border-blue-100 bg-blue-900 rounded-lg text-center py-3 w-full md:w-[200px] lg:w-[300px]"
          >
            <h1 className="text-sm font-bold ld:text-lg whitespace-nowrap text-slate-50">
              {item.label}
            </h1>
            <p className="text-4xl font-bold text-slate-50">{item.symbol}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavHome;
