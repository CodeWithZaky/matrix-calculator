import NavHome from "@/src/components/layouts/NavHome";
import Link from "next/link";

export const metadata = {
  title: "Matrix Calculator - Home",
  description: "...",
};
export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen min-w-full flex-col items-center justify-center font-bold  text-blue-900">
      <div className="flex w-fit flex-col items-start justify-center">
        <h1 className="mb-1 text-center text-xl">MATRIX CALCULATOR</h1>
        <Link target="_blank" href={"https://zaky.vercel.app"}>
          <h1 className="mb-1 text-center text-4xl underline sm:text-3xl">
            AHMAD ZAKY UBAIDILLAH
          </h1>
        </Link>
        <h1 className="text-center text-xl">2023</h1>
        <NavHome />
      </div>
    </main>
  );
}
