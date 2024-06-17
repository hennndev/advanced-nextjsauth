"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

interface AuthButtonProps {
    children: React.ReactNode
    route: string
    mode?: "modal" | "redirect",
    asChild?: boolean
}

const AuthButton = ({children, route, mode = "redirect", asChild}: AuthButtonProps) => {
   const router = useRouter()
   
   const handleClick = () => {
        router.push(route)
   }
    return (
        <span onClick={handleClick}>
            {children}
        </span>
    )
}

export default AuthButton