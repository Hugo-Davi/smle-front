import React, { useEffect, useState } from "react";
import deckService from "../services/deck.service";
import { useParams } from 'react-router-dom';

const StudyPage = () => {
    const { id } = useParams();
    const [ cards, setCards ] = useState();

    const [ isAnswered, setIsAnswered ] = useState(false);

    const [ reviewInput, setReviewInput ] = useState();

    useEffect(() => {
        switch(reviewInput){
            case 1:
                console.log('Passou a carta');
                // let passedCards = cards;
                // passedCards = passedCards.push(passedCards.shift())
                // setCards(passedCards);
                break;
            case 2:
                console.log('Hard');
                break;
            case 3:
                console.log('Ok');
                break;
            case 4:
                console.log('Easy')
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
            <div className='bg-baltic-900 m-5'>
                <div className='text-center' onClick={() => setIsAnswered(true)}>
                    {cards[0].front}
                </div>
                <div className={isAnswered ? `block` : `hidden`}>
                    <br />
                    <p className='text-center'>{cards[0].back}</p>
                    <div className='flex justify-center align-middle'>
                        <button className='bg-slate-500 p-3 mr-3' onClick={() => setReviewInput(1)}>Pass</button>
                        <button className='bg-fuchsia-500 p-3 text-baltic-900' onClick={() => setReviewInput(2)}>Hard</button>
                        <button className='bg-yellow-300 p-3 text-baltic-900' onClick={() => setReviewInput(3)}>Ok</button>
                        <button className='bg-green-400 p-3 text-baltic-900' onClick={() => setReviewInput(4)}>Easy</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudyPage;