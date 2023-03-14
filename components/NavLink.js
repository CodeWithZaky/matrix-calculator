import Link from 'next/link'
import React from 'react'

const NavLink = () => {
  return (
    <nav className='absolute top-1 left-1 flex flex-col gap-1'>
        <Link className='px-1 border rounded-lg text-center bg-green-400' href={"/"}>Home</Link>
        <Link className='px-1 border rounded-lg text-center bg-sky-400' href={"/matrix-addition-112210010"}>Matrix Addition</Link>
        <Link className='px-1 border rounded-lg text-center bg-sky-400' href={"/matrix-reduction-112210010"}>Matrix Reduction</Link>
        <Link className='px-1 border rounded-lg text-center bg-sky-400' href={"/matrix-multiplication-112210010"}>Matrix Multiplication</Link>
    </nav>
  )
}

export default NavLink