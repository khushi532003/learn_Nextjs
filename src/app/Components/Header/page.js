"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {

  const router = useRouter()
  
  return (
    <div className='flex justify-between items-center px-5 py-4 bg-gray-800 text-white'>
      <Link href="/"><h2>Logo</h2></Link>
        <nav className="nav flex gap-20">
            <Link href="/home" className="nav-link active">Home</Link>
            <button onClick={()=> router.push("/about")}>About</button>
        </nav>
    </div>
  )
}

export default Header;