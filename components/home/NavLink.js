import React from "react";
import Link from "next/link";

const NavLinkHome = () => {
  const NavLink = [
    {
      href: "matrix-addition-112210010",
      h1: "matrix addition",
      p: "+",
    },
    {
      href: "matrix-subtraction-112210010",
      h1: "matrix subtraction",
      p: "-",
    },
    {
      href: "matrix-multiplication-112210010",
      h1: "matrix multiplication",
      p: "x",
    },
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-center items-center gap-2 mt-10 ">
      {NavLink.map((e, i) => {
        return (
          <Link
            href={e.href}
            key={i}
            className="flex flex-col justify-center items-center border-2 border-blue-800 bg-blue-100 rounded-lg text-center w-[300px] h-[100px]"
          >
            <h1 className="font-bold text-lg">{e.h1}</h1>
            <p className="text-4xl font-bold">{e.p}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinkHome;
