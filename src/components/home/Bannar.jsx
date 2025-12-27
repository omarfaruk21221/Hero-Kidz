import Image from 'next/image'
import React from 'react'
import localFont from "next/font/local";

export default function Bannar() {
  return (
    <div className='flex justify-between items-center '>
        <aside className='flex-1 space-y-6'>
        <h1 className= {` text-4xl font-bold text-center`}>
            আপনার সন্তানের জন্য সেরা খেলনা খুঁজুন!
        </h1>
        <p>Buy Every toy with up to 15% discount</p>
        <button className="bg-primary hover:bg-secondary font-bold py-2 px-4 rounded">  Expore Products </button>

        </aside>
        <aside className='flex-1'>
            <Image src="/assets/hero.png" alt="bannar" width={1200} height={400} />
        </aside>
    </div>
  )
}
