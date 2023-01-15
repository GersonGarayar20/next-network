import Image from 'next/image'
import { Inter } from '@next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='w-full h-full bg-red-300'>
        hola mundo
    </div>
  )
}
