import Link from "next/link";

export default function Home() {
const NavLink = [
  {
    href : "/matrix-addition",
    h1 : "matrix additions",
    p : "+"
  },
  {
    href : "/matrix-reduction",
    h1 : "matrix reduction",
    p : "-"
  },
  {
    href : "/matrix-multiplication",
    h1 : "matrix multiplication",
    p : "x"
  }
]

const view = NavLink.map((e,i)=>{
  return (
    <Link href={e.href} key={i} className="flex flex-col justify-center items-center border border-black px-4 py-10 rounded-xl bg-slate-300">
      <h1 className="font-bold">
        {e.h1}
      </h1>
      <p className="text-2xl font-bold">{e.p}</p>
    </Link>
  )
})

  return (
    <main className="container min-w-full min-h-screen mx-auto flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold">AHMAD ZAKY UBAIDILLAH</h1>
      <h1 className="font-bold">112210010</h1>
      <nav className="flex justify-center items-center gap-2">
        {view}
      </nav>
    </main>
  );
}
