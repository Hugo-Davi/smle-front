class Service {
    constructor(path){
        this.URL = 'http://localhost:3000';
        this.path = '/api' + path;
    }
    async test(){
        console.log(this.URL + this.path);
    }
    findAll() {
        return fetch(`${this.URL}${this.path}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).catch((error) => {
            console.log(error);
        });
    }
}

export default Service;