export const AUTHORIZATION_HEADER: string = 'Authorization';
export const TOKEN_KEY: string = 'token';
export const TOKEN_PREFIX: string = 'Bearer';

// Endpoints
export const AUTHENTICATION_LOGIN_ENDPOINT: string = '/authentication/login';
export const AUTHENTICATION_REGISTER_ENDPOINT: string = '/authentication/register';
export const DECK_DELETE_ENDPOINT: string = '/deck/delete/';
export const DECK_FIND_ALL_ENDPOINT: string = '/deck/all';
export const DECK_FIND_BY_ID_ENDPOINT: string = '/deck/get/';
export const DECK_FIND_RANDOM_ENDPOINT: string = '/deck/random/';
export const DECK_NEW_ENDPOINT: string = '/deck/new';
export const DECK_UPDATE_ENDPOINT: string = '/deck/update/';
export const GAME_DELETE_ENDPOINT: string = '/game/delete/';
export const GAME_FIND_ALL_ENDPOINT: string = '/game/all';
export const GAME_FIND_BY_ID_ENDPOINT: string = '/game/get/';
export const GAME_NEW_ENDPOINT: string = '/game/new';
export const GAME_UPDATE_ENDPOINT: string = '/game/update/';
export const MOXFIELD_ENDPOINT: string = '/moxfield/';
export const PLAYER_DELETE_ENDPOINT: string = '/player/delete/';
export const PLAYER_FIND_ALL_ENDPOINT: string = '/player/all';
export const PLAYER_FIND_BY_ID_ENDPOINT: string = '/player/get/';
export const PLAYER_NEW_ENDPOINT: string = '/player/new';
export const PLAYER_UPDATE_ENDPOINT: string = '/player/update/';
export const ROLE_DELETE_ENDPOINT: string = '/role/delete/';
export const ROLE_FIND_ALL_ENDPOINT: string = '/role/all';
export const ROLE_FIND_BY_ID_ENDPOINT: string = '/role/get/';
export const ROLE_NEW_ENDPOINT: string = '/role/new';
export const ROLE_UPDATE_ENDPOINT: string = '/role/update/';
export const USER_DELETE_ENDPOINT: string = '/user/delete/';
export const USER_FIND_ALL_ENDPOINT: string = '/user/all';
export const USER_FIND_BY_ID_ENDPOINT: string = '/user/get/';
export const USER_NEW_ENDPOINT: string = '/user/new';
export const USER_UPDATE_ENDPOINT: string = '/user/update/';

export function adminEndpoints(): string[] {
  return [
    AUTHENTICATION_REGISTER_ENDPOINT,
    DECK_DELETE_ENDPOINT,
    DECK_NEW_ENDPOINT,
    DECK_UPDATE_ENDPOINT,
    GAME_DELETE_ENDPOINT,
    GAME_UPDATE_ENDPOINT,
    MOXFIELD_ENDPOINT,
    PLAYER_DELETE_ENDPOINT,
    PLAYER_NEW_ENDPOINT,
    PLAYER_UPDATE_ENDPOINT,
    ROLE_DELETE_ENDPOINT,
    ROLE_FIND_ALL_ENDPOINT,
    ROLE_FIND_BY_ID_ENDPOINT,
    ROLE_NEW_ENDPOINT,
    ROLE_UPDATE_ENDPOINT,
    USER_DELETE_ENDPOINT,
    USER_FIND_ALL_ENDPOINT,
    USER_FIND_BY_ID_ENDPOINT,
    USER_NEW_ENDPOINT,
    USER_UPDATE_ENDPOINT
  ];
}

export function permittedEndpoints(): string[] {
  return [
    AUTHENTICATION_LOGIN_ENDPOINT,
    DECK_FIND_ALL_ENDPOINT,
    DECK_FIND_BY_ID_ENDPOINT,
    DECK_FIND_RANDOM_ENDPOINT,
    GAME_FIND_ALL_ENDPOINT,
    GAME_FIND_BY_ID_ENDPOINT,
    GAME_NEW_ENDPOINT,
    PLAYER_FIND_ALL_ENDPOINT,
    PLAYER_FIND_BY_ID_ENDPOINT
  ];
}

