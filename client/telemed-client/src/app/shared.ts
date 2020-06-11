// services 

export const REST = location.hostname + (location.port ? ':' + location.port : '') + '/rest';
console.log("rest URL", REST);
export const CHAT = location.hostname + (location.port ? ':' + location.port : '') + '/chat';
console.log("rest URL", CHAT);
export const AUTH = location.hostname + (location.port ? ':' + location.port : '') + '/auth';
console.log("rest URL", AUTH);