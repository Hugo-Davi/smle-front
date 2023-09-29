import OptionIcon from '../misc/OptionIcon.jsx';

const DeckHeader = (props) => {
    return (
        <>
            <div className='rounded-md bg-baltic-900'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold'>
                        {props.deck.name}
                    </h1>
                    <OptionIcon />
                </div>
                <div>
                    <h2>{props.deck.type}</h2>
                </div>
                <div>
                    <p >
                        {/* {props.deck.text} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum, placeat, optio consectetur accusantium voluptatibus vitae eaque illo perferendis facilis eos dolore voluptatem! Rem in deserunt error voluptate repellendus modi.
                    </p>
                </div>
                <div className='flex'>
                    <div className='flex w-1/2 text-xl font-bold text-black'>
                        <button className='rounded-md w-36 bg-fuchsia-350'>Study</button>
                        <button className='rounded-md w-36 bg-slate-100'>Add</button>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex justify-around text-2xl'>
                            <h1>{props.deck.cards.length}</h1>
                            <h1>0</h1>
                        </div>
                        <div className="hidden w-full h-4 my-2 bg-white rounded-md sm:block">
                            <div className={`bg-fuchsia-350 w-1/2 h-full rounded-md`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeckHeader;