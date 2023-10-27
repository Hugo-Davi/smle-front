import React from "react"
import { useState } from "react";

const CreateDeckPanel = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    return (
        <>
            <div className='bg-baltic-900 border-gray-200 p-6'>
                <div>
                    <h1 className='text-2xl font-bold'>Criar deck</h1>
                </div>
                <div>
                    <form className='inline-block text-xl'>
                        <div className=''>
                            <label htmlFor='name'>Nome do Deck</label>
                            <input className='w-full' type="text" value={name} name='name'/>
                        </div>
                        <div>
                            <label htmlFor='teste'>Teste</label>
                            <input className='w-full' type="text" name='teste' />
                        </div>
                        <div>
                            <button className='bg-red-400 p-4 font-bold rounded-md'>Cancelar</button>
                            <button className='bg-fuchsia-350 p-4 rounded-md font-bold text-baltic-950' type='submit'>Criar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateDeckPanel;