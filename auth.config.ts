import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
 
export default { 
    providers: [GitHub, Google, Credentials]
 } satisfies NextAuthConfig