import HeaderLink from "@/src/components/fragments/HeaderLink";
import Link from "next/link";

const HeaderPage = ({ title }) => {
  return (
    <header className="flex sm:flex-row flex-col justify-between items-start sm:items-center bg-slate-800 px-3 py-2 rounded-b-md w-full h-full container">
      <HeaderLink />
      <h1 className="sm:block hidden w-1/3 font-bold text-center text-slate-100 sm:text-2xl md:text-3xl lg:text-4xl uppercase transition-all">
        {title}
      </h1>
      <div className="flex justify-end items-center w-1/3">
        <Link
          className="sm:block border-2 hidden bg-blue-900 hover:bg-blue-700 active:bg-slate-200 px-3 py-0.5 border-blue-300 rounded-md font-semibold text-center text-white"
          href={"/"}
        >
          Home
        </Link>
      </div>
    </header>
  );
};

export default HeaderPage;
