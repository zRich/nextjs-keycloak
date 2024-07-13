import NextAuth from "next-auth/next";

import KeycloakProvider from 'next-auth/providers/keycloak';
import GithubProvider from 'next-auth/providers/github';
import { authOptions } from "@/lib/authOptions";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };