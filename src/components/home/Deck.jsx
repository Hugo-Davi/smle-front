import OptionIcon from '../misc/OptionIcon.jsx';
import { Link } from 'react-router-dom';


const Deck = (props) => {
    return (
        <>
            <div className="px-5 py-4 mx-4 mt-4 rounded-md bg-baltic-900 text-baltic-50 max-h-48">
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold'>
                        <Link to={`/deck/${props.deck._id}`}>{props.deck.name}</Link>
                    </h1>
                    <OptionIcon />
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
                            <button className="text-4xl font-bold text-black bg-fuchsia-350 px-9 py-7 rounded-2xl">
                                Study
                            </button>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default Deck;