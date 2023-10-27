import React, { useEffect, useState } from "react";
import Deck from '../components/home/Deck';
import AddBtn from "../components/misc/AddBtn";
import CreateDeckPanel from "../components/controll/CreateDeckPanel";

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
            <div className='static'>
                <div className='absolute left-0 right-0 mx-auto'>
                    <CreateDeckPanel />
                </div>
                <div  className='absolute bottom-10 right-10'>
                    <AddBtn />
                </div>
            </div>
        </>
        )
}

export default Home;