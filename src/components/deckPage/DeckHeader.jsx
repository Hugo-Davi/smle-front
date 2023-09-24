const DeckHeader = (props) => {
    return (
        <>
            <div className='mx-2 my-2 rounded-md bg-baltic-900'>
                <div className='text-2xl font-bold'>
                    {props.deck.name}
                </div>
            </div>
        </>
    )
}

export default DeckHeader;