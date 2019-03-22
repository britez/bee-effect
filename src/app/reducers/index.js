import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'
import { areasReducer } from '../stores/areas';
import { userReducer } from '../stores/users';
var localStorage = require('local-storage');

const jwtDecode = require('jwt-decode')

function checkTokenExpiry() {
  let jwt = localStorage.get('id_token')
  if(jwt) {
    let jwtExp = jwtDecode(jwt).exp;
    let expiryDate = new Date(0);
    expiryDate.setUTCSeconds(jwtExp);

    if(new Date() < expiryDate) {
      return true;
    }
  }
  return false;
}

function getProfile() {
  return JSON.parse(localStorage.get('profile'));
}


function auth(state = {
    isAuthenticated: checkTokenExpiry(),
    profile: getProfile(),
    error: ''
  }, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        profile: action.profile,
        error: ''
      })
    case ActionTypes.LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        profile: null,
        error: action.error
      })
    case ActionTypes.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        profile: null
      })
    default:
      return state
    }
}

export const initializeSession = ( ) => ( {
  type: "INITIALIZE_SESSION",
} );

const storeData = ( data ) => ( {
  type: "STORE_DATA",
  data,
} );

const authReducer = ( state = false, action ) => {
  switch ( action.type ) {
      case "INITIALIZE_SESSION":
          return true;
      default: return state;
  }
};

const dataReducer = ( state = [ ], action ) => {
  switch ( action.type ) {
      case "STORE_DATA":
          return action.data;
      default: return state;
  }
};


const rootReducer = combineReducers({
  auth,
  data: dataReducer,
  user: userReducer,
  areas: areasReducer
})

export default rootReducer