import data from '../assets/data.js'
import OptionIcon from './misc/OptionIcon.jsx';
let count_cards = data.decks[0].cards.length;
console.log(count_cards)


export default function Deck() {
    return (
        <>
            <div className="bg-baltic-900 text-baltic-50 flex m-4">
                <div>
                    <div>
                        <h1 className="text-2xl font-bold">Falsos Cognatos</h1>
                        <h2 className="text-xl font-bold text-fuchsia-100">Inglês</h2>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius animi, voluptates dolore quaerat.
                    </div>
                </div>
                <div>
                    <OptionIcon className="w-full h-4" />
                    <div className="bg-white h-4 w-full my-2 rounded-md">
                        <div className={`bg-fuchsia-350 w-1/2 h-full rounded-md`}></div>
                    </div>
                    <button className="bg-fuchsia-350 text-black text-4xl font-bold px-9 py-7 rounded-2xl">
                        Study
                    </button>
                </div>
            </div>
        </>
    )
}