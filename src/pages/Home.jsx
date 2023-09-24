import Navbar from '../components/Navbar'
import Deck from '../components/Deck'
import CsvBtn from '../components/utils/CsvBtn';

import deckService from '../services/deck.service';

const decks = await deckService.getAll();

const Home = () => {
    return (
        <>
            <Navbar />
            <CsvBtn />
            <div className='grid lg:mx-24 md:grid-cols-2'>
                { decks.map((item, index) => {
                    return <Deck key={index} deck={item} />
                })
                }
            </div>
        </>
        )
}

export default Home;