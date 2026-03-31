export function matchRoute(url: string): boolean {
  return location.pathname === url || location.pathname.startsWith(url)
}