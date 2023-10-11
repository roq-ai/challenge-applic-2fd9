const mapping: Record<string, string> = {
  accounts: 'account',
  challenges: 'challenge',
  'challenge-responses': 'challenge_response',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
