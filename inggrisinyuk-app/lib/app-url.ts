export function getAppUrl(): string {
  const appUrl = process.env.APP_URL
  if (!appUrl) throw new Error("APP_URL is not set")
  return appUrl.replace(/\/$/, "")
}
