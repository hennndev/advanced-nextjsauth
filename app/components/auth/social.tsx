"use client"
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc"
import { Button } from '@/app/components/ui/button'


const Social = () => {
    return (
        <div className="flex w-full gap-x-3">
            <Button size="lg" variant="outline" className="w-full flex-center">
                <FcGoogle className="text-lg"/>
            </Button>
            <Button size="lg" variant="outline" className="w-full flex-center">
                <FaGithub className="text-lg"/>
            </Button>
        </div>
    )
}

export default Social