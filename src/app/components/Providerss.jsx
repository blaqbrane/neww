'use client'
import { SessionProvider } from 'next-auth/react'
const Providerss = ({children,session}) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default Providerss;