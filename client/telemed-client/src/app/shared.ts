// services 

// export const BASE_URL = location.hostname + (location.port ? ':' + location.port : '')
export const BASE_URL = location.origin;
export const BASE_SOCKET_URL = 'ws://' + location.hostname + (location.port ? ':' + location.port : '')
export const REST = BASE_URL + '/rest';
console.log("rest URL", REST);
export const CHAT = BASE_URL + '/chat';
console.log("rest URL", CHAT);
export const AUTH = BASE_URL + '/auth';
console.log("rest URL", AUTH);