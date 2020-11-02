import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/create_Event.css';
import api from '../services/api';

import logoImg from '../images/Logo.svg';

function RegisterEvent() {
    const { goBack } = useHistory();
    const history = useHistory();
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            name,
            description,
            price,
        };
        
        await api.post('events', data);
        
        alert('ok');
        
        history.push('/home');
    }

    return (
        <div id="page-create">
            <div className="content-wrapper">
                <div className="left">
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>

                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <button onClick={goBack} className="return">
                        <FiArrowLeft size={24} color="#E02041" />
                        <span>Voltar para a home</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="right">
                    <input 
                        type="text" 
                        placeholder="Título do caso" 
                        value={name}
                        onChange={event => setName(event.target.value)}    
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input 
                        
                        placeholder="Valor em reais" 
                        value={price}
                        onChange={event => setPrice(event.target.value)}
                    />
                
                    <div className="buttons">
                        <button className="cancel">Cancelar</button>
                        <button type="submit" className="register">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterEvent;