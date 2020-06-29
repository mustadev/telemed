export const environment = {
  production: true,
  baseURL: location.origin,
  webSocketURL: 'ws://' + location.hostname + (location.port ? ':' + location.port : '') + '/socket'
};
