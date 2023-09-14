import React from "react";
import Link from "next/link";
import HeaderLink from "@/src/components/fragments/HeaderLink";

const HeaderPage = ({ title }) => {
  return (
    <header className="container flex flex-col items-start justify-between w-full h-full px-3 py-2 sm:flex-row sm:items-center bg-slate-800 rounded-b-md">
      <HeaderLink />
      <TitleMatrix title={title} />
      <HomeLinkButton />
    </header>
  );
};

export default HeaderPage;

const HomeLinkButton = () => {
  return (
    <div className="flex items-center justify-end w-1/3">
      <Link
        className="hidden px-3 py-0.5 font-semibold text-center text-white bg-blue-900 border-2 border-blue-300 rounded-md sm:block hover:bg-blue-700 active:bg-slate-200"
        href={"/"}
      >
        Home
      </Link>
    </div>
  );
};

const TitleMatrix = ({ title }) => {
  return (
    <h1 className="hidden w-1/3 font-bold text-center uppercase transition-all sm:block sm:text-2xl md:text-3xl lg:text-4xl text-slate-100">
      {title}
    </h1>
  );
};
