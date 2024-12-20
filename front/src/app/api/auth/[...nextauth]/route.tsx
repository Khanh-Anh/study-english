import http from "@/config/axios";
import axios from "axios";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
const handler = nextAuth({
  providers: [CredentialsProvider({
    name: 'credentials',
    type: 'credentials',
    id: 'credentials',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      try {
        const user = await http.post('/auth/login', {
          username: credentials?.username,
          password: credentials?.password,
        })
        if (user.status === 201) {
          return user.data
        }
        return null
      } catch (error) {
        console.log("🚀 ~ authorize ~ error:", error)
        return null
      }
    }
  })],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  }
});
export { handler as GET, handler as POST }

