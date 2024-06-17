import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className='min-h-screen w-full bg-[#040D12] flex-center px-5'>
            {children}
        </main>
    )
}

export default AuthLayout