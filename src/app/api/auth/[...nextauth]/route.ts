import prisma from '@/lib/prisma';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

const DiscordID = process.env.DISCORD_CLIENT_ID;
const DiscordSecret = process.env.DISCORD_CLIENT_SECRET;

const GoogleID = process.env.GOOGLE_CLIENT_ID;
const GoogleSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!DiscordID || !DiscordSecret || !GoogleID || !GoogleSecret) {
  throw new Error("DiscordID, DiscordSecret, GoogleID, or GoogleSecret must be specified");
}

export const authConfig: NextAuthOptions = {
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
    session: async ({ session, user }) => {
      console.log(session, user);
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async signIn({ user }) {
      // Créer un lien de base pour le nouvel utilisateur
      await prisma.link.create({
        data: {
          title: 'My Link',
          url: 'https://example.com',
          background: '#ffffff', // Remplacez par votre couleur de fond souhaitée
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      return true;
    },
  },
  adapter: PrismaAdapter(prisma),
};

const handler = NextAuth(authConfig);

export { handler as POST, handler as GET };
