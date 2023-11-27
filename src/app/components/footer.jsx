import React from 'react'
import Socialicons from './Socialicons'

export default function Footer() {
  return (
    <footer className='bg-[gold] flex md:flex-row flex-col items-center justify-between h-[20vh] px-10'>
        <p>&copy; univelcity {new Date().getFullYear()} </p>

       <Socialicons />
    </footer>
  )
}
