import React from "react"
import { useState } from "react";
import { useForm } from "react-hook-form";

import deckService from "../../services/deck.service";

import AddBtn from "../misc/AddBtn";

const CreateDeckPanel = () => {
    const [modal, setModal] = useState(false);

    const { register, handleSubmit } = useForm();

    const toggleModal = () => {
        setModal(!modal);
    }
    const onSubmit = (data) => {
        console.log(data);
        setModal(false);
    }
    return (
        <>
            <button className='absolute bottom-10 right-10' onClick={toggleModal}>
                <AddBtn/>
            </button>
            {modal && (
                <div className='bg-baltic-900 border-gray-200 p-6 absolute left-0 right-0 mx-auto'>
                    <div>
                        <h1 className='text-2xl font-bold'>Criar deck</h1>
                    </div>
                    <div>
                        <form
                            className='inline-block text-xl'
                            onSubmit={handleSubmit(onSubmit)}>
                            <div className=''>
                                <label htmlFor='name'>Nome do Deck</label>
                                <input
                                    className='w-full'
                                    type="text"
                                    name='name'
                                    { ... register('name') }/>
                            </div>
                            <div>
                                <label htmlFor='teste'>Teste</label>
                                <input className='w-full' type="text" name='teste' />
                            </div>
                            <div>
                                <button
                                    className='bg-red-400 p-4 font-bold rounded-md'
                                    onClick={toggleModal}>
                                        Cancelar
                                </button>
                                <button
                                    className='bg-fuchsia-350 p-4 rounded-md font-bold text-baltic-950'
                                    type='submit'
                                    >
                                        Criar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default CreateDeckPanel;