import Popup from 'reactjs-popup';
import OptionIcon from '../misc/OptionIcon.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Deck = (props) => {
    return (
        <>
            <div className="px-5 py-4 mx-4 mt-4 rounded-md bg-baltic-900 text-baltic-50 max-h-48">
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold'>
                        <Link to={`/deck/${props.deck._id}`}>{props.deck.name}</Link>
                    </h1>

                    {/* Config Pop Up */}
                    <Popup position={'left center'} trigger={<button><OptionIcon /></button>}>
                        <div className='p-0 m-auto rounded-md bg-zinc-300'>
                            <ul className='m-2 text-2xl text-zinc-400'>
                                <li>EDITAR</li>
                                <li className='text-red-500'>EXCLUIR</li>
                            </ul>
                        </div>
                    </Popup>
                    {/* Config Pop Up */}

                </div>
                <div className='flex justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h2 className="text-xl font-bold text-fuchsia-100">{props.deck.type}</h2>
                        </div>
                        <div className='line-clamp-4'>
                            {props.deck.text}
                        </div>
                    </div>
                    <div className='flex-col justify-center w-1/2 align-middle'>
                        <div className="w-full h-4 my-2 bg-white rounded-md">
                            <div className={`bg-fuchsia-350 w-1/2 h-full rounded-md`}></div>
                        </div>
                        <div className='flex justify-center'>
                            <Link to={`/study/${props.deck._id}`}>
                            <button className="text-4xl font-bold text-black bg-fuchsia-350 px-9 py-7 rounded-2xl">
                                Study
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deck;