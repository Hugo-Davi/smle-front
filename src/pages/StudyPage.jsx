import React, { useEffect, useState } from "react";
import deckService from "../services/deck.service";
import { useParams } from 'react-router-dom';

const StudyPage = () => {
    const { id } = useParams();
    const [ cards, setCards ] = useState();
    const [ card, setCard ] = useState(null);

    const [ isAnswered, setIsAnswered ] = useState(false);

    const [ reviewInput, setReviewInput ] = useState();

    function updateDeck(n){
        const newDeck = cards.map( (deckCard) => {
            if(deckCard._id === card._id) {
                let newDate = new Date;
                newDate.setMinutes(newDate.getMinutes() + n);
                deckCard.nextReview = newDate.toISOString();
            }
            return deckCard;
        } );
        setCards(newDeck);
    }

    useEffect(() => {
        switch(reviewInput){
            case 1:
                console.log('Passou a carta');
                break;
            case 2:
                console.log('Hard');
                updateDeck(1);
                break;
            case 3:
                console.log('Ok');
                updateDeck(100)
                break;
            case 4:
                console.log('Easy')
                updateDeck(1000);
                break;
            default:
                return;
        }
        setIsAnswered(false);
        setReviewInput(0);
    }, [reviewInput])

    useEffect(() => {
        async function getCards() {
            try {
                const response = await deckService.get(id);
                setCards(response.body.cards.filter((element) => Date.parse(element.nextReview) < Date.now()));
            } catch (error) {
                return <div>Carregando</div>
            }
        }
        getCards();
    }, [id])

    useEffect(() => {
        async function getCard() {
            try {
                setCard(cards.find( (card) => Date.parse(card.nextReview) < Date.now() ));
            } catch (error) {
                return <div>Carregando</div>
            }
        }
        getCard();
    }, [cards])

    if(!cards){
        return <div>carregando </div>
    }
    if(card == undefined){
        return <div>Card undefined</div>
    }

    return (
        <>
            <div className='m-5 bg-baltic-900'>
                <div className='p-6 text-center' onClick={() => setIsAnswered(true)}>
                    {card ? card.front : 'aguarde'}
                </div>
                <div className={`pt-0 pb-6 px-6 ${isAnswered ? `block` : `hidden`}`}>
                    <p className='p-6 mx-2 mb-2 text-center rounded-md sm:m-4 bg-baltic-950'>
                        {card ? card.back : 'aguarde'}
                    </p>
                    <div className='flex justify-center align-middle'>
                        <button className='p-3 mr-3 bg-slate-500' onClick={() => setReviewInput(1)}>Pass</button>
                        <button className='p-3 bg-fuchsia-500 text-baltic-900' onClick={() => setReviewInput(2)}>Hard</button>
                        <button className='p-3 bg-yellow-300 text-baltic-900' onClick={() => setReviewInput(3)}>Ok</button>
                        <button className='p-3 bg-green-400 text-baltic-900' onClick={() => setReviewInput(4)}>Easy</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudyPage;