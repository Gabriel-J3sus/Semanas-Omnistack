import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Wrapper, Left } from '../styles/pages/login';
import api from '../services/api';

import logoImg from '../images/Logo.svg';
import peopleImg from '../images/People.svg';

function Login() {
    const history = useHistory();

    const [id, setId] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        try {
            await api.get(`ongs/${id}`);

            history.push(`home/${id}`);
        
        } catch(err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <Container id="page-login">
            <Wrapper>
                <Left>
                    <img src={logoImg} alt="Be The Hero"/>

                    <form onSubmit={handleSubmit}>
                        <legend> Faça seu Logon </legend>
                        <input 
                            type="text"
                            placeholder="Sua ID" 
                            value={id}
                            onChange={event => setId(event.target.value)}
                        />

                        <button type="submit">
                            Entrar
                        </button>

                        <Link to="/register" className="return">
                            <FiLogIn size={24} color="#E02041" />
                            <span>Não tenho cadastro</span>
                        </Link>
                    </form>
                </Left>

                <img src={peopleImg} alt="People"/>
            </Wrapper>
        </Container>
    );
}

export default Login;