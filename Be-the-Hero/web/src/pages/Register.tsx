import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Wrapper, Left, Right } from '../styles/pages/register';
import api from '../services/api';

import logoImg from '../images/Logo.svg';

function Register() {
    const { goBack } = useHistory();
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleSubmit(event: FormEvent) {    
        event.preventDefault();        
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);
            
            alert(`Cadastro realizado com sucesso. Sua ID de acesso: ${response.data.id}.`);
            
            history.push('/');

        } catch(err) {
            alert('Error no cadastro, tente novamente.');

        }
    }
    
    return (
        <Container id="page-register">
            <Wrapper className="content-wrapper">
                <Left className="left">
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>

                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <button onClick={goBack}>
                        <FiArrowLeft size={24} color="#E02041" />
                        <span>Voltar para o logon</span>
                    </button>
                </Left>
                
                <Right onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={event => setName(event.target.value)}    
                    />
                    <input 
                        type="text"
                        placeholder="E-mail" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}    
                    />
                    <input 
                        type="text"
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}    
                    />

                    <div className="input-wrapper">
                        <input 
                            type="text"
                            style={{width: 370, height: 60}} 
                            placeholder="Cidade" 
                            value={city}
                            onChange={event => setCity(event.target.value)}    
                        />
                        <input 
                            type="text"
                            style={{width: 70, height: 60}} 
                            placeholder="UF" 
                            value={uf}
                            onChange={event => setUf(event.target.value)}    
                        />
                    </div>
                    
                    <button type="submit">
                        Cadastrar
                    </button>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Register;