import NavHome from "@/src/components/organism/home/NavHome";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center min-w-full min-h-screen mx-auto font-bold text-blue-900">
      <h1 className="mb-1 text-xl text-center">MATRIX CALCULATOR</h1>
      <h1 className="mb-1 text-4xl text-center sm:text-3xl">
        AHMAD ZAKY UBAIDILLAH
      </h1>
      <h1 className="text-xl text-center">2023</h1>
      <NavHome />
    </main>
  );
}
