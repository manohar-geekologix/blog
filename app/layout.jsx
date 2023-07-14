'use client';
import './globals.css'
import Header from '../components/Header';
import Intro from '../components/Intro';
import Wrapper from '../components/Wrapper';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html 
    lang="en"
    //className={localStorage.getItem("darkMode")=== "true" ? "dark" : "light"}
    //className={typeof window !== 'undefined' && localStorage.getItem("darkMode") === "true" ? "dark" : "light"}
    >
      <body className='dark:bg-dark-color dark:text-white'>
        <Header />
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  )
}