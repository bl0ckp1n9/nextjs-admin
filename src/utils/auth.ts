export function setAuthCredentials(accessToken: string, tokenType: string) {
  localStorage.setItem(
    'accessToken',
    JSON.stringify({ accessToken: accessToken, tokenType: tokenType })
  )
}
