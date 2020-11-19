import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { CgLogOff } from 'react-icons/cg';
import { FiTrash2 } from 'react-icons/fi';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, Header, Left, Right } from '../styles/pages/home'
import api from '../services/api';

import logoImg from '../images/Logo.svg';

interface Props {
    toggleTheme(): void;
}

interface Ong {
    id: string;
    name: string;
    events: Array<{
        id: number;
        name: string;
        description: string;
        price: number;
    }>;
}

interface OngParams {
    id: string;
}

function Home({ toggleTheme }:Props) {
    const { colors, title } = useContext(ThemeContext);
    const params = useParams<OngParams>();
    const history = useHistory();
    console.log(title);
    
    const [ong, setOng] = useState<Ong>()
    
    useEffect(() => {
        api.get(`ongs/${params.id}`).then(response => {
            setOng(response.data);
        })
    }, [params.id]);

    if (!ong) {
        return <p>Carregando...</p>;
    }

    async function handleDeleteIncident(id: number) {
        try {
            await api.delete(`events/${id}`);

            ong?.events.filter(event => event.id === id);
            history.go(0);
            
        } catch(err) {

            alert('Erro ao deletar caso, tente novamente.');
        }

    }

    function handleLogout() {
        history.push('/');
    }

    return (
        <Container id="page-home">
            <Header>
                <Left>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h2>Bem vindo(a), {ong.name}</h2>
                </Left>

                <Right>
                    <Switch 
                        className='switch'
                        onChange={() => toggleTheme}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={15}
                        width={40}
                        handleDiameter={20}
                        offColor={colors.secondaryTitle}
                        onColor={colors.primary}
                    />

                    <Link to={`/create/${ong.id}`} className="new">
                        Cadastrar novo caso
                    </Link>
                    
                    <button type="button" onClick={handleLogout}>
                        <CgLogOff size={24} color="#E02041" />
                    </button>
                </Right>
            </Header>

            <h1> Casos Cadastrados </h1>

            
            <ul>
                {ong.events.map(event => {
                    return (
                        <li key={event.id}>
                            <button type="button" style={{cursor:"pointer", border: 0}} onClick={() => handleDeleteIncident(event.id)}>
                                    <FiTrash2 size={20} color="#a8a8b3" />
                            </button>

                            <strong>Caso:</strong>
                            <p>{event.name}</p>
                                
                            <strong>Descrição:</strong>
                            <p>{event.description}</p>
                                
                            <strong>Valor:</strong>
                            <p>R${event.price}</p>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
}

export default Home;