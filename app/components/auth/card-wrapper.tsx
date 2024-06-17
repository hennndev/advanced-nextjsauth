"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import Social from '@/app/components/auth/social'
import HeaderCard from '@/app/components/auth/header-card'
import BottomButton from '@/app/components/auth/bottom-button'
import { Card, CardContent, CardHeader, CardFooter } from '@/app/components/ui/card'

interface CardWrapperProps {
    children: React.ReactNode
    headerTitle: string
    headerLabel: string
    bottomButtonLabel: string
    bottomButtonHref: string
    classes?: string
    showSocial?: boolean
}

const CardWrapper = ({children, headerTitle, headerLabel, bottomButtonLabel, bottomButtonHref, classes = "", showSocial}: CardWrapperProps) => {
    return (
        <Card className={cn("w-[400px]", classes)}>
            <CardHeader>
                <HeaderCard headerTitle={headerTitle} headerLabel={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
            <CardFooter className="flex-center">
                <BottomButton bottomButtonLabel={bottomButtonLabel} bottomButtonHref={bottomButtonHref}/>
            </CardFooter>
        </Card>
    )
}

export default CardWrapper