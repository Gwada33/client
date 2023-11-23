import prisma from '@/lib/prisma'
import NextAuth, {NextAuthOptions} from 'next-auth'
import { PrismaAdapter }from '@auth/prisma-adapter'
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

const DiscordID = process.env.DISCORD_CLIENT_ID 
const DiscordSecret = process.env.DISCORD_CLIENT_SECRET

const GoogleID = process.env.GOOGLE_CLIENT_ID 
const GoogleSecret = process.env.GOOGLE_CLIENT_SECRET


if (!DiscordID || !DiscordSecret || !GoogleID || !GoogleSecret) {
    throw new Error("DiscordID or DiscordSecret must be specified")
}
export const authConfig = {
    providers: [
        DiscordProvider({
            clientId: DiscordID as string,
            clientSecret: DiscordSecret as string
          }), 
           GoogleProvider({
            clientId: GoogleID as string,
            clientSecret: GoogleSecret as string
          })
    ],
    callbacks: {
        session: async({session, user}) => {
            console.log(session, user)
            if(session.user){
                session.user.id = user.id
            }
            return session
        }
    },
    adapter: PrismaAdapter(prisma)
} satisfies NextAuthOptions

const handler = NextAuth(authConfig)
export { handler as POST, handler as GET};