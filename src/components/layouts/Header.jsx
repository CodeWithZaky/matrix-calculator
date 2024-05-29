import React from "react";
import Link from "next/link";
import HeaderLink from "@/src/components/fragments/HeaderLink";

const HeaderPage = ({ title }) => {
  return (
    <header className="container flex h-full w-full flex-col items-start justify-between rounded-b-md bg-slate-800 px-3 py-2 sm:flex-row sm:items-center">
      <HeaderLink />
      <h1 className="hidden w-1/3 text-center font-bold uppercase text-slate-100 transition-all sm:block sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <div className="flex w-1/3 items-center justify-end">
        <Link
          className="hidden rounded-md border-2 border-blue-300 bg-blue-900 px-3 py-0.5 text-center font-semibold text-white hover:bg-blue-700 active:bg-slate-200 sm:block"
          href={"/"}
        >
          Home
        </Link>
      </div>
    </header>
  );
};

export default HeaderPage;
