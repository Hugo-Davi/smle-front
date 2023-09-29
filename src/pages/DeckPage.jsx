import React, { useEffect, useState } from "react";
import deckService from "../services/deck.service";
import { useParams } from 'react-router-dom';

// 650f2595a62ae7c1443a4d97
import DeckHeader from "../components/deckPage/DeckHeader";
import CardCell from "../components/deckPage/CardCell";


const DeckPage = () => {
    const { id } = useParams();
    const [ deck, setDeck ] = useState(null);

    useEffect(() => {
        async function fetchDeck(){
            try {
                const response = await deckService.get(id);
                setDeck(response);
                console.log(response)
            } catch (error) {
                console.log(error);
            }
        }
        fetchDeck();
    }, [id])

    if (!deck) {
        return <div>Carregando ...</div>
    }


    return(
        <>
            <div className='lg:mx-24'>
                <div className=''>
                    <DeckHeader key={deck._id} deck={deck} />
                </div>
                <div className='mx-24'>
                {
                    deck.cards.map((element) => {
                        // return <div key={element._id}>{element.front}</div>
                        return <CardCell key={element._id} card={element} />
                    })
                }
                </div>
            </div>
        </>
    )
}

export default DeckPage;