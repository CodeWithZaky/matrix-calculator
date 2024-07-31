import NavHome from "@/src/components/layouts/NavHome";
import Link from "next/link";

export const metadata = {
  title: "Matrix Calculator - Home",
  description: "...",
};
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto min-w-full min-h-screen font-bold text-blue-900 container">
      <div className="flex flex-col justify-center items-start w-fit">
        <h1 className="mb-1 text-center text-xl">MATRIX CALCULATOR</h1>
        <Link target="_blank" href={"https://zaky.vercel.app"}>
          <h1 className="mb-1 text-4xl text-center sm:text-3xl underline">
            AHMAD ZAKY UBAIDILLAH
          </h1>
        </Link>
        <h1 className="text-center text-xl">2023</h1>
        <NavHome />
      </div>
    </main>
  );
}
