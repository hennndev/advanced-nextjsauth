"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const fontPoppins = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

interface HeaderCardProps {
    headerTitle: string
    headerLabel: string
}

const HeaderCard = ({headerTitle, headerLabel}: HeaderCardProps) => {
    return (
        <div className="flex-center flex-col gap-y-4 text-primary">
            <h1 className={cn(
                "text-2xl font-bold",
                fontPoppins.className
            )}>{headerTitle}</h1>
            <p className="text-gray-500 text-center">{headerLabel}</p>
        </div>
    )
}

export default HeaderCard