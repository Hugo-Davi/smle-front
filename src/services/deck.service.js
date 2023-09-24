import Service from "./_base.service";

class DeckService extends Service{
    constructor(){
        super('/deck')
    }
}

const deckService = new DeckService();

export default deckService;

