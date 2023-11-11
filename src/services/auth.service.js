class AuthService{
    constructor(){
        this.URL = 'http://localhost:3000' + '/auth';
    }
    login(model) {
        return fetch(this.URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        }).then((response) => {

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

        }).catch((error) => {
            console.log(error);
        })
    }
}