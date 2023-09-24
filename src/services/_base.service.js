class Service {
    constructor(path){
        this.URL = 'http://localhost:3000';
        this.path = '/api' + path;
    }
    async test(){
        console.log(this.URL + this.path);
    }
    get(id) {
        return fetch(`${this.URL}${this.path}/id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).catch((error) => {
            console.log(error);
        })
    }
    getAll() {
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
    create(model) {
        return fetch(`${this.URL}${this.path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        });
    }
    update(id, model) {
        return fetch(`${this.URL}${this.path}/id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        });
    }
    delete(id) {
        return fetch(`${this.URL}${this.path}/id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        });
    }
}

export default Service;