import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord";

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || ''
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || ''

const handler = NextAuth({
    providers: [
        Discord({ clientId: DISCORD_CLIENT_ID, clientSecret: DISCORD_CLIENT_SECRET, authorization: { params: { scope: 'identify guilds' } }, })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            return { ...token, ...account, ...user }
        },
        async session({ session, token }) {
            session.user = token
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }