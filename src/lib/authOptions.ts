import {NextAuthOptions} from 'next-auth';

import KeycloakProvider from 'next-auth/providers/keycloak';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
    providers: [
        KeycloakProvider({
            clientId: `${process.env.CLIENT_ID}` as string,
            clientSecret: `${process.env.CLIENT_SECRET}` as string,
            issuer: `${process.env.AUTH_ISSUER}` as string,
        }),
        GithubProvider({
            clientId: `${process.env.GITHUB_CLIENT_ID}` as string,
            clientSecret: `${process.env.GITHUB_CLIENT_SECRET}` as string,
        }),
    ]
}