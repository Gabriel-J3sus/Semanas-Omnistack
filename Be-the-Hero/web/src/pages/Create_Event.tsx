import React, { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Wrapper, Left, Right } from '../styles/pages/create_Event';
import api from '../services/api';

import logoImg from '../images/Logo.svg';

interface OngParams {
    id: string;
}

function RegisterEvent() {
    const params = useParams<OngParams>();
    const { goBack } = useHistory();
    const history = useHistory();
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const ong = params.id;

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        try {
            const data = {
                name,
                description,
                price,
                ong,
            };
            
            await api.post('events', data);
            
            history.push(`/home/${params.id}`);
            
        } catch(err) {

            alert('Erro ao cadastrar');
        }
    }

    return (
        <Container id="page-create">
            <Wrapper className="content-wrapper">
                <Left className="left">
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>

                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <button onClick={goBack}>
                        <FiArrowLeft size={24} color="#E02041" />
                        <span>Voltar para a home</span>
                    </button>
                </Left>

                <Right onSubmit={handleSubmit} className="right">
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
                
                    <div>
                        <button type="reset" className="cancel">Cancelar</button>
                        <button type="submit">Cadastrar</button>
                    </div>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default RegisterEvent;