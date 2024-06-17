import React from 'react'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import { Button } from '@/app/components/ui/button'
import AuthButton from './components/auth/auth-button'

const fontPoppins = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export const metadata = {
    title: "Advanced Next.js Authentication"
}

const HomePage = () => {
    return (
        <main className='min-h-screen w-full bg-[#040D12] flex-center px-5'>
            <div className='flex-center'>
                <div className='flexx flex-col text-white'>
                    <h1 className={cn(
                        "text-4xl font-bold",
                        fontPoppins.className
                    )}>🔐 Advanced Authentication</h1>
                    <p className='mt-3 text-lg text-center'>Do advanced next authentication and <br /> role access management service</p>
                    <AuthButton route="/signin">
                        <Button variant="secondary" className="mt-5">Get started</Button>
                    </AuthButton>
                </div>
            </div>
        </main>
    )
}

export default HomePage