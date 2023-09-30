import React, { useEffect, useState } from "react";
import deckService from "../services/deck.service";
import { useParams } from 'react-router-dom';

const StudyPage = () => {
    const { id } = useParams();
    const [ deck, setDeck ] = useState(null);

    useEffect(() => {
        async function getCards() {
            try {
                const response = await deckService.get(id);
                setDeck(response);
            } catch (error) {
                console.log(error);
            }
        }
        getCards();
    }, [])

    return (
        <>
            <div className=''>
            </div>
        </>
    )
}

export default StudyPage;