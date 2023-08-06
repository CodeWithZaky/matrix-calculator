import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import TitleMatrix from "./TitleMatrix";

const HeaderPage = ({ title }) => {
  return (
    <section className="container flex flex-col sm:flex-row justify-between items-start sm:items-center w-full h-full px-3 py-1">
      <NavLink />
      <TitleMatrix title={title} />
      <Link
        className="hidden sm:block px-3 py-0.5 rounded-md text-center font-semibold border-2 border-blue-800 text-blue-800 bg-slate-50 hover:bg-slate-100 active:bg-slate-200"
        href={"/"}
      >
        Home
      </Link>
    </section>
  );
};

export default HeaderPage;
