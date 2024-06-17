"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

interface BottomButtonProps {
    bottomButtonLabel: string
    bottomButtonHref: string
}


const BottomButton = ({bottomButtonLabel, bottomButtonHref}: BottomButtonProps) => {
    return (
        <Button variant="link" size="sm" asChild className="text-sm font-normal">
            <Link href={bottomButtonHref}>
                {bottomButtonLabel}
            </Link>
        </Button>
    )
}

export default BottomButton