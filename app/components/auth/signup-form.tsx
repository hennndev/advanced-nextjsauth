"use client"
import { useState, useTransition } from 'react'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { SignupFormSchema } from "@/schemas"
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
  import { signup } from '@/lib/actions/authActions'

const SignupForm = () => {
    const [isPending, startTransition] = useTransition()
    const [isSuccess, setIsSuccess] = useState<null | string>(null)
    const [isError, setIsError] = useState<null | string>(null)
    const form = useForm<z.infer<typeof SignupFormSchema>>({
        resolver: zodResolver(SignupFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }
    })

    const onSubmit = (values: z.infer<typeof SignupFormSchema>) =>  {
        setIsSuccess(null)
        setIsError(null)
        startTransition(async() =>{
            try {
                const response = await signup(values)
                if(response.message) {
                    setIsSuccess(response.message)
                    setIsError(null)
                } 
            } catch (error: any) {
                setIsSuccess(null)
                setIsError(error.message as string)
            }
        })
    }

    return (
        <CardWrapper
            headerTitle="👤 Signup"
            headerLabel="Signup new account"
            bottomButtonLabel="Already have an account?"
            bottomButtonHref="/signin"
            classes="w-[550px] mt-10 mb-10"
            showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        disabled={isPending}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Input your username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    <FormField
                        control={form.control}
                        name="email"
                        disabled={isPending}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Input your email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    <div className="flexx gap-x-3 w-full">
                        <FormField
                            control={form.control}
                            name="password"
                            disabled={isPending}
                            render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField
                            control={form.control}
                            name="passwordConfirmation"
                            disabled={isPending}
                            render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Password Confirmation</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                    </div>
                    {isError && (
                        <FormStatus status="error" message={isError as string}/>
                    )}
                    {isSuccess && (
                        <FormStatus status="success" message={isSuccess as string}/>
                    )}
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? "Loading..." : "Submit"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default SignupForm