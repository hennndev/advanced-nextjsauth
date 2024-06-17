"use client"
import React from 'react'
import { MdOutlineWarningAmber, MdOutlineCheck } from "react-icons/md";


interface FormStatusProps {
    status: "success" | "error"
    message: string
}

const FormStatus = ({status, message}: FormStatusProps) => {
    return (
        <div className={`w-full py-3 px-5 rounded-md space-x-2 flexx ${status === "success" ? "bg-emerald-500/15 text-emerald-500" : "bg-destructive/15 text-red-500"}`}>
            {status === "success" ? <MdOutlineCheck className="text-emerald-500 text-xl"/> : <MdOutlineWarningAmber className="text-destructive text-xl"/>}
            <p className="text-[15px]">{message}</p>
        </div>
    )
}

export default FormStatus