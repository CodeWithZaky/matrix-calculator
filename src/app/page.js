import NavHome from "@/src/components/home/NavHome";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center min-w-full min-h-screen mx-auto font-mono font-bold text-blue-900">
      <h1 className="mb-1 text-4xl text-center">MATRIX</h1>
      <h1 className="mb-1 text-xl text-center sm:text-3xl">
        AHMAD ZAKY UBAIDILLAH
      </h1>
      <h1 className="text-xl text-center sm:text-3xl">112210010</h1>
      <NavHome />
    </main>
  );
}
