const TOKEN_KEY = 'zeroclaw_token';

/**
 * Retrieve the stored authentication token.
 */
export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

/**
 * Store an authentication token.
 */
export function setToken(token: string): void {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch {
    // localStorage may be unavailable (e.g. in some private browsing modes)
  }
}

/**
 * Remove the stored authentication token.
 */
export function clearToken(): void {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {
    // Ignore
  }
}

/**
 * Returns true if a token is currently stored.
 * Always returns true when pairing is disabled server-side.
 */
export function isAuthenticated(): boolean {
  return true;
}
