import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CgLogOff } from 'react-icons/cg';
import { FiTrash2 } from 'react-icons/fi';

import '../styles/pages/home.css';
import api from '../services/api';

import logoImg from '../images/Logo.svg';


interface Accident {
    id: number;
    name: string;
    description: string;
    price: number;
}

function Home() {
    const history = useHistory();

    const [accidents, setAccidents] = useState<Accident[]>([]);

    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('events').then(response => {
            setAccidents(response.data);
        });
    }, []);

    async function handleDeleteIncident(id: number) {
        try {
            await api.delete(`events/${id}`);

            setAccidents(accidents.filter(accident => accident.id !== id));
            
        } catch(err) {

            alert('Erro ao deletar caso, tente novamente.');
        }

    }

    function handleLogout() {
        localStorage.clear();


        history.push('/');
    }

    return (
        <div id="page-home">
            <header>
                <div className="header-left">
                    <img src={logoImg} alt="Be The Hero"/>

                    <h2>Bem vindo(a), {ongName}</h2>
                </div>

                <div className="header-right">
                    <Link to="/create" className="new">
                        Cadastrar novo caso
                    </Link>

                    <button type="button" onClick={handleLogout} className="logout">
                        <CgLogOff size={24} color="#E02041" />
                    </button>
                </div>
            </header>

            <h1> Casos Cadastrados </h1>

            
            <ul>
                {accidents.map(accident => {
                    return (
                        <li key={accident.id}>
                            <button type="button" style={{cursor:"pointer", border: 0}} onClick={() => handleDeleteIncident(accident.id)} >
                                    <FiTrash2 size={20} color="#a8a8b3" />
                            </button>

                            <strong>Caso:</strong>
                            <p>{accident.name}</p>
                                
                            <strong>Descrição:</strong>
                            <p>{accident.description}</p>
                                
                            <strong>Valor:</strong>
                            <p>R${accident.price}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Home;