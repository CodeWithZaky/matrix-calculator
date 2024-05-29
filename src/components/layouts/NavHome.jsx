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
    <nav className="mt-10 flex w-full flex-col items-center justify-start gap-2 md:flex-row">
      {NavLink.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={index}
            className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-slate-50 bg-blue-900/90 py-3 text-center shadow-lg shadow-slate-500 hover:bg-blue-900 md:w-[200px] lg:w-[300px]"
          >
            <h1 className="ld:text-lg whitespace-nowrap text-sm font-bold text-slate-50">
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
