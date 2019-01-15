import fetch from "isomorphic-fetch";

class UserService {
  constructor() {
    this.BASE_URL = process.env.APP_URL
    // the class constructor
    if(! UserService.instance){
      UserService.instance = this;
    }
    return UserService.instance;
  }

  findByMe() {
    return fetch(`${this.BASE_URL}/api/users/me`).then(res => res.json());
  }
}

const instance = new UserService();

// prevents new properties from being added to the object
Object.freeze(instance);
export default instance;
