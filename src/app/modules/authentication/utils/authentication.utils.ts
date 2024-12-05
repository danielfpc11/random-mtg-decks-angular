import {
  AUTHENTICATION_LOGIN,
  AUTHENTICATION_REGISTER,
  DECK_DELETE_ENDPOINT,
  DECK_FIND_ALL_ENDPOINT,
  DECK_FIND_BY_ID_ENDPOINT,
  DECK_FIND_RANDOM_ENDPOINT,
  DECK_NEW_ENDPOINT,
  DECK_UPDATE_ENDPOINT,
  GAME_DELETE_ENDPOINT,
  GAME_FIND_ALL_ENDPOINT,
  GAME_FIND_BY_ID_ENDPOINT,
  GAME_NEW_ENDPOINT,
  GAME_UPDATE_ENDPOINT,
  MOXFIELD_ENDPOINT,
  PLAYER_DELETE_ENDPOINT,
  PLAYER_FIND_ALL_ENDPOINT,
  PLAYER_FIND_BY_ID_ENDPOINT,
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
} from '../constants';

export class AuthenticationUtils {

  public static adminEndpoints(): string[] {
    return [
      AUTHENTICATION_REGISTER,
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
      USER_UPDATE_ENDPOINT,

      DECK_FIND_RANDOM_ENDPOINT,
    ];
  }

  public static permittedEndpoints(): string[] {
    return [
      AUTHENTICATION_LOGIN,
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

}
