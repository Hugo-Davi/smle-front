import React from "react"
import { useState } from "react";

const CreateDeckPanel = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    return (
        <>
            <div>
                <div>
                    <form>
                        <label htmlFor='name'>Nome do Deck</label>
                        <input type="text" value={name} name='name'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateDeckPanel;