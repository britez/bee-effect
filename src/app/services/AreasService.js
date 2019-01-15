import fetch from "isomorphic-fetch";

class AreasService {
  constructor() {
    this.BASE_URL = process.env.APP_URL
    // the class constructor
    if(! AreasService.instance){
      AreasService.instance = this;
    }
    return AreasService.instance;
  }

  findAll() {
      return fetch(`${this.BASE_URL}/api/areas`);
  }
}

const instance = new AreasService();

// prevents new properties from being added to the object
Object.freeze(instance);
export default instance;
