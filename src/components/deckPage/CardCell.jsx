
const CardCell = (props) => {
    return (
        <>
            <div className='text-black bg-fuchsia-350'>
                <div>
                    <h1>{props.card.front}</h1>
                </div>
                <div>
                    <h1>{props.card.back}</h1>
                </div>
            </div>
        </>
    )
}

export default CardCell;