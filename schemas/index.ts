import * as z from "zod"

export const SigninFormSchema = z.object({
    email: z.string().min(1, {message: 'Email field is required'}).email('Email not valid'),
    password: z.string().min(1, {message: "Password field is required"}).min(7, {message: "Minimum password length is 7 characters"})
})

export const SignupFormSchema = z.object({
    username: z.string().min(1, {message: "Username field is required"}),
    email: z.string().min(1, {message: 'Email field is required'}).email('Email not valid'),
    password: z.string().min(1, {message: "Password field is required"}).min(7, {message: "Minimum password length is 7 characters"}),
    passwordConfirmation: z.string().min(1, {message: "Password confirmation is required"}).min(7, {message: "Minimum password confirmation length is 7 characters"})
}).superRefine((schema, ctx) => {
    if(schema.passwordConfirmation) {
        if(schema.password !== schema.passwordConfirmation) {
            ctx.addIssue({
                code: "custom",
                message: "Password confirmation not match with password",
                path: ["passwordConfirmation"]
            })
        } 
    }
}) 


export const ChangePasswordSchema = z.object({
    password: z.string().min(1, {message: "Password field is required"}).min(7, {message: "Minimum password length is 7 characters"}),
    passwordConfirmation: z.string().min(1, {message: "Password confirmation is required"}).min(7, {message: "Minimum password confirmation length is 7 characters"}),
    newPassword: z.string().min(1, {message: "New password field is required"}).min(7, {message: "Minimum new password length is 7 characters"})
})