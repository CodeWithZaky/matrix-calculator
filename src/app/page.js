import NavHome from "@/src/components/home/NavHome";

export default function Home() {
  return (
    <main className="container min-w-full min-h-screen mx-auto flex flex-col justify-center items-center text-blue-900 font-bold font-mono">
      <h1 className="text-center text-4xl mb-1">MATRIX</h1>
      <h1 className="text-center text-xl sm:text-3xl mb-1">
        AHMAD ZAKY UBAIDILLAH
      </h1>
      <h1 className="text-center text-xl sm:text-3xl">112210010</h1>
      <NavHome />
    </main>
  );
}
