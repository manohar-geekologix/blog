import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const header = (
  // <header className='grid bg-sakura-light rounded-lg'>
  //   <div className='flex items-center'>
  //     <Image className='' src="/animated.png" width={100} height={100} alt='logo' />
  //     <div className='ml-4 items-center justify-center'>
  //       <Link href="/blog">
  //         <h1 className='text-lg font-bold'>
  //           My Personal blog
  //         </h1>
  //       </Link>
  //       <h1 className='text-sm'>
  //         A mixture of thought and experiences...
  //       </h1>
  //     </div>
  //   </div>
  // </header>
  null
)

const footer = (
  <footer className='grid border-t border-sakura justify-center items-center rounded-lg mt-12 py-12'>
    <div>
      <p>
        Developed  By Manohar Bhadu
      </p>
    </div>
  </footer>
)

const BlogLayout = ({ children }) => {
  return (
    <div className='container mx-auto'>
      {header}
      {children}
      {footer}
    </div>
  )
}

export default BlogLayout