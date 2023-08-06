import React from "react";
import Link from "next/link";
import HeaderLink from "@/src/components/header/HeaderLink";
import TitleMatrix from "@/src/components/header/TitleMatrix";

const HeaderPage = ({ title }) => {
  return (
    <section className="container flex flex-col items-start justify-between w-full h-full px-3 py-2 sm:flex-row sm:items-center bg-slate-800 rounded-b-md">
      <HeaderLink />
      <TitleMatrix title={title} />
      <div className="flex items-center justify-end w-1/3">
        <Link
          className="w-min hidden sm:block px-3 py-0.5 rounded-md text-center font-semibold border-2 border-blue-400/90 text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-200"
          href={"/"}
        >
          Home
        </Link>
      </div>
    </section>
  );
};

export default HeaderPage;
