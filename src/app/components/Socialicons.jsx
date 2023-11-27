import React from 'react'
import { BsLinkedin,BsGithub } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Link from 'next/link';
import { MdAddCall } from "react-icons/md";





export default function Socialicons() {
  return (
    <aside className="flex gap-4">
         <Link href='https://www.linkedin.com/' target='_blank'><BsLinkedin /></Link>  


         <Link href='https://github.com/' target='_blank'><BsGithub /></Link> 


        
        <Link href='https://www.instagram.com/' target='_blank'><FaSquareInstagram /></Link>


        <Link href='mailto:enomskii@gmail.com' target='_blank'><BiLogoGmail /></Link>   


        
        
        <Link href='tel:+2348034262388'><MdAddCall /></Link>     

        
    
    </aside>
  )
}
