import Navbar from '../components/Navbar'
import Deck from '../components/Deck'

export default function Home(){
    return (
        <>
            <Navbar />
            <div className='grid gap-0 grid-rows-2 md:grid-rows-3 sm:flex md:mx-4'>
                <Deck />
                <Deck/>
            </div>
        </>
        )
}