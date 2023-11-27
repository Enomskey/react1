import React from 'react'
import Link from 'next/link'

export default function Courses() {
  return (
    <div>
        <ul className='flex justify-between h-10 bg-blue-800 text-white text-2xl'>
            <Link href='/course'>  <li>All</li>
            </Link>
            <Link href='/course/drama'>  <li>Drama</li> 
            </Link>
            <Link href='/course/prose'>  <li>Prose</li>
            </Link>
            <Link href='/course/novel'> <li>Novel</li>
            </Link>
           
           
            
            
            
        </ul>

    </div>
  )
}
