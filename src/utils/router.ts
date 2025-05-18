export type Route = {
  path: string;
  params?: Record<string, string>;
};

export function parseRoute(pathname: string): Route {
  // Define route patterns with parameter placeholders
  const routePatterns = [
    { pattern: /^\/category\/([^\/]+)$/, name: '/category/:category' },
    { pattern: /^\/product\/(\d+)$/, name: '/product/:id' },
  ];
  
  // Try to match current pathname with defined patterns
  for (const { pattern, name } of routePatterns) {
    const match = pathname.match(pattern);
    if (match) {
      // Extract parameter names from the route pattern
      const paramNames = name.match(/:[^\/]+/g) || [];
      
      // Create params object by mapping parameter names to matched values
      const params: Record<string, string> = {};
      paramNames.forEach((param, index) => {
        const paramName = param.substring(1); // Remove the leading ':'
        params[paramName] = match[index + 1];
      });
      
      return { path: name, params };
    }
  }
  
  // If no pattern matches, return the pathname as is
  return { path: pathname };
}