import React, { useEffect, useState } from "react";
import Deck from '../components/home/Deck'

import deckService from '../services/deck.service';
import HomeStats from '../components/home/HomeStats';

// const decks = await deckService.getAll();

const Home = () => {
    const [ decks, setDecks ] = useState([])
    useEffect(() => {
        async function fetchDecks(){
            try {
                const response = await deckService.getAll();
                setDecks(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDecks();
    }, [])
    if (!decks) {
        return <div>Carregando ...</div>
    }
    return (
        <>
            <div className='lg:mx-24' >
                <HomeStats />
                <div className='grid lg:mx-24 md:grid-cols-2'>
                    { decks.map((item) => {
                        return <Deck key={item._id} deck={item} />
                    })
                    }
                </div>
            </div>
        </>
        )
}

export default Home;