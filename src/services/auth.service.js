import deckService from "./deck.service";

class AuthService{
    constructor(){
        this.URL = 'http://localhost:3000/api' + '/auth';
    }
    login(model) {
        return fetch(this.URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }
    register(model) {
        return fetch(this.URL + '/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        })
    }
}

const authService = new AuthService();

export default authService;