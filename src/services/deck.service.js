import Service from "./_base.service";

class DeckService extends Service{
    constructor(){
        super('/deck')
    }
    getReview(id) {
        return fetch(`${this.URL}${this.path}/review/id=${id}`, {
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
}

const deckService = new DeckService();

export default deckService;

