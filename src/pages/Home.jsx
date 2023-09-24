import Navbar from '../components/Navbar'
import Deck from '../components/home/Deck'

import deckService from '../services/deck.service';
import HomeStats from '../components/home/HomeStats';

const decks = await deckService.getAll();

const Home = () => {
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