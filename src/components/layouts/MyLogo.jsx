import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MyLogo() {
  return (
    <Link href="/" className='flex items-center gap-2'>
        <Image src="/assets/logo.png" alt="Hero Kidz Logo" width={50} height={40} />
      <div className="text-xl font-bold">Hero <span className="text-primary">Kidz</span> </div>
    </Link>
  )
}
