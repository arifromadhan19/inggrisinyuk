import { createRemoteJWKSet, jwtVerify } from "jose"

const AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth"
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token"
const JWKS_ENDPOINT = "https://www.googleapis.com/oauth2/v3/certs"

const jwks = createRemoteJWKSet(new URL(JWKS_ENDPOINT))

function getClientId() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  if (!clientId) throw new Error("GOOGLE_CLIENT_ID is not set")
  return clientId
}

function getClientSecret() {
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  if (!clientSecret) throw new Error("GOOGLE_CLIENT_SECRET is not set")
  return clientSecret
}

function getRedirectUri() {
  const redirectUri = process.env.GOOGLE_REDIRECT_URI
  if (!redirectUri) throw new Error("GOOGLE_REDIRECT_URI is not set")
  return redirectUri
}

export function getGoogleAuthUrl(): string {
  const params = new URLSearchParams({
    client_id: getClientId(),
    redirect_uri: getRedirectUri(),
    response_type: "code",
    scope: "openid email profile",
    access_type: "online",
    prompt: "select_account",
  })
  return `${AUTH_ENDPOINT}?${params.toString()}`
}

export async function exchangeCodeForTokens(code: string): Promise<{ idToken: string }> {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: getClientId(),
      client_secret: getClientSecret(),
      redirect_uri: getRedirectUri(),
      grant_type: "authorization_code",
    }),
  })

  if (!res.ok) {
    throw new Error(`Google token exchange failed: ${res.status} ${await res.text()}`)
  }

  const data = await res.json()
  if (typeof data.id_token !== "string") {
    throw new Error("Google token exchange response missing id_token")
  }
  return { idToken: data.id_token }
}

export interface GoogleIdentity {
  sub: string
  email: string
  name: string | null
}

export async function verifyGoogleIdToken(idToken: string): Promise<GoogleIdentity> {
  const { payload } = await jwtVerify(idToken, jwks, {
    issuer: ["https://accounts.google.com", "accounts.google.com"],
    audience: getClientId(),
  })

  if (typeof payload.sub !== "string" || typeof payload.email !== "string") {
    throw new Error("Google id_token missing sub or email claim")
  }

  return {
    sub: payload.sub,
    email: payload.email,
    name: typeof payload.name === "string" ? payload.name : null,
  }
}
