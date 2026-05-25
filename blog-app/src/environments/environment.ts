export const environment = {
  production: false,
  useBackend: true,
  apiUrl: '/api',
  graphqlUrl: '/graphql',
  useWebSocket: true,
  websocketUrl: 'http://localhost:3000/events',
  nativeWsUrl: 'ws://localhost:3000',
  websocketType: 'socket.io' as 'socket.io' | 'native',
};
