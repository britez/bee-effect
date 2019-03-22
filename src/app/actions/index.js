import { CALL_API } from '../middleware/api'
import auth0 from 'auth0-js'


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'


export const SECURITY_AUTH0_DOMAIN = 'leutthe.auth0.com'
export const SECURITY_AUTH0_CLIENTID = '0y190giyUi5jFOTHsx51TGoiLV64dqXZ'
export const SECURITY_AUTH0_REDIRECTURI = 'http://localhost:3000/callback'
export const SECURITY_AUTH0_AUDIENCE = 'https://api.leutthe.com'
export const SECURITY_AUTH0_RESPONSETYPE = 'token id_token'


const lock = new auth0.WebAuth({
  domain:  SECURITY_AUTH0_DOMAIN ,
  clientID: SECURITY_AUTH0_CLIENTID,
  redirectUri: SECURITY_AUTH0_REDIRECTURI,
  audience: SECURITY_AUTH0_AUDIENCE,
  responseType: SECURITY_AUTH0_RESPONSETYPE,
  scope: 'openid user_metadata'

})

function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function login() {
  // display the lock widget
  return dispatch => {
    lock.show();
  }
}


export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function logoutSuccess(profile) {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    return dispatch(logoutSuccess());
  }
}

export const JEDIS_REQUEST = 'JEDIS_REQUEST'
export const JEDIS_SUCCESS = 'JEDIS_SUCCESS'
export const JEDIS_FAILURE = 'JEDIS_FAILURE'

function fetchJedis() {
  return {
    [CALL_API]: {
      types: [ JEDIS_REQUEST, JEDIS_SUCCESS, JEDIS_FAILURE ],
      endpoint: 'jedis',
      authenticatedRequest: false
    }
  }
}

export function loadJedis() {
  return dispatch => {
    return dispatch(fetchJedis())
  }
}

export const JEDI_REQUEST = 'JEDI_REQUEST'
export const JEDI_SUCCESS = 'JEDI_SUCCESS'
export const JEDI_FAILURE = 'JEDI_FAILURE'

function fetchJedi(id) {
  return {
    [CALL_API]: {
      types: [ JEDI_REQUEST, JEDI_SUCCESS, JEDI_FAILURE ],
      endpoint: `jedis/${id}`,
      authenticatedRequest: true
    }
  }
}

export function loadJedi(id) {
  return dispatch => {
    return dispatch(fetchJedi(id))
  }
}

// Listen to authenticated event and get the profile of the user
export function doAuthentication() {
    return dispatch => {
      lock.on("authenticated", function(authResult) {
            lock.getProfile(authResult.idToken, function(error, profile) {

              if (error) {
                // handle error
                return dispatch(loginError(error))
              }

              localStorage.setItem('profile', JSON.stringify(profile))
              localStorage.setItem('id_token', authResult.idToken)
              return dispatch(loginSuccess(profile))
            });
      });
    }
}