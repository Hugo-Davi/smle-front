import axios from "axios";

class BaseService {
    constructor(path){
        this.URL = 'http://localhost:3000';
        this.path = path;
    }
    async test(){
        console.log(this.URL + this.path);
    }
}

export default BaseService;