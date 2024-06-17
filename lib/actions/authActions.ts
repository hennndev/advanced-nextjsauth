"use server"
import * as z from "zod"
import bcrypt from "bcryptjs"
import { SignupFormSchema } from "@/schemas"
import { db } from "@/lib/db"

export const signup = async (values: z.infer<typeof SignupFormSchema>) => {
    try {
        const fields = SignupFormSchema.parse(values)
        if(!fields) {
            throw new Error("Invalidate fields")
        }
        const { username, email, password } = fields
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        await db.user.create({
            data: {
                username,
                email,
                password: hashPassword
            }
        })
        return {
            message: "New user has created. Verified your email to logged in this account"
        }
    } catch (error: any) {
        throw new Error(error.code === "P2002" ? "Email already used. Try again" : "Failed create new account")
    }
}

export const changePassword = async (email: string, newPassword: string) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(newPassword, salt)
        await db.user.update({
            where: {
                email: email
            },
            data: {
                password: hashPassword
            }
        })
        return {
            message: "Success change new password"
        }
    } catch (error) {
        throw new Error("Failed change new password")
    }
}