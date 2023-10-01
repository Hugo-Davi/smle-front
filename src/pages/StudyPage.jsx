import React, { useEffect, useState } from "react";
import deckService from "../services/deck.service";
import { useParams } from 'react-router-dom';

const StudyPage = () => {
    const { id } = useParams();
    const [ cards, setCards ] = useState();

    useEffect(() => {
        async function getCards() {
            try {
                const response = await deckService.get(id);
                setCards(response.body.cards.filter((element) => Date.parse(element.nextReview) < Date.now()));
            } catch (error) {
                console.log(error);
            }
        }
        getCards();
    }, [id])
    if(!cards){
        return <div>carregando </div>
    }
    console.log(cards)
    return (
        <>
            <div className=''>
                {   

                    cards.map((element) => {
                        return <div key={element._id}>{element.front}</div>
                    })
                }
            </div>
        </>
    )
}

export default StudyPage;