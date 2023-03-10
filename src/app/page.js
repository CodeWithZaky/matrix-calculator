import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="flex flex-col">
        <Link href="/matrix-addition">matrix additions</Link>
        <Link href="/matrix-reduction">matrix reduction</Link>
        <Link href="/matrix-multiplication">matrix multiplication</Link>
      </nav>
    </main>
  );
}
