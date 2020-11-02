import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    const [accidents, setAccidents] = useState<Accident[]>([]);

    useEffect(() => {
        api.get('events').then(response => {
            setAccidents(response.data);
        });
    }, []);

    return (
        <div id="page-home">
            <header>
                <div className="header-left">
                    <img src={logoImg} alt="Be The Hero"/>

                    <h2>Bem vinda, APAD</h2>
                </div>

                <div className="header-right">
                    <Link to="/create" className="new">
                        Cadastrar novo caso
                    </Link>

                    <Link to="#" className="logout">
                        <CgLogOff size={24} color="#E02041" />
                    </Link>
                </div>
            </header>

            <h1> Casos Cadastrados </h1>

            
            <ul>
                {accidents.map(accident => {
                    return (
                        <li key={accident.id}>
                            <button style={{cursor:"pointer", border: 0}}>
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