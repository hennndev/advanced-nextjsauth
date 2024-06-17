"use client"
import { useState, useTransition } from 'react'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { SigninFormSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import CardWrapper from '@/app/components/auth/card-wrapper'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/app/components/ui/form"
import { Input } from '@/app/components/ui/input'
import { Button } from '@/app/components/ui/button'
import FormStatus from '@/app/components/auth/form-status'


const SigninForm = () => {
    const [isPending, startTransition] = useTransition()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<null | string>(null)
    const form = useForm<z.infer<typeof SigninFormSchema>>({
        resolver: zodResolver(SigninFormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof SigninFormSchema>) =>  {
        console.log(values)
    }

    return (
        <CardWrapper
            headerTitle="🔓 Signin"
            headerLabel="Welcome back"
            bottomButtonLabel="Don't have an account?"
            bottomButtonHref="/signup"
            showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Input your email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Input your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    {isError && (
                        <FormStatus status="error" message={isError as string}/>
                    )}
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default SigninForm