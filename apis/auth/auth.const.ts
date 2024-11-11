const authConstants = {
    keycloak: {
        clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID!,
        clientSecret: process.env.NEXT_PUBLIC_KEYCLOAKE_CLIENT_SECRET!,
        redirectUri: process.env.NEXT_PUBLIC_KEYCLOAK_REDIRECT_URI!,
        keycloakServer: process.env.NEXT_PUBLIC_KEYCLOAK_SERVER!
    }
}

export default authConstants;