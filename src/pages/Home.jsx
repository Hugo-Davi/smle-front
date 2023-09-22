import Navbar from '../components/Navbar'
import Deck from '../components/Deck'

import Data from '../assets/data.js'
let data = Data.decks


import DeckService from '../services/deck.service';
const deckService = new DeckService();


export default function Home(){
    deckService.test()
    return (
        <>
            <Navbar />
            <div className='grid lg:mx-24 md:grid-cols-2'>
                {data.map((item, index) => {
                    return <Deck key={index} deck={item} />
                })
                }
            </div>
        </>
        )
}