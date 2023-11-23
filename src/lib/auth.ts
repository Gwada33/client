import { authConfig } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const getAuthSession = () => {
    return getServerSession(authConfig)
}

export const getRequiredSession = async () => {
    const session = await getAuthSession()

    if(!session?.user){
        redirect('/api/auth/signin')
        //throw new Error("Session not found")
    }

    return session
}