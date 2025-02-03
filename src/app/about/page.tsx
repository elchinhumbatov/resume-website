import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div>
      <p className='p-100'>About page</p>
      <Link href={'./'}> Home</Link>
    </div>
  )
}
