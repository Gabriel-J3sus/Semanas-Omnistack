import React from 'react';
import { Link } from 'react-router-dom';
import { CgLogOff } from 'react-icons/cg';
import { FiTrash2 } from 'react-icons/fi';

import '../styles/pages/home.css';

import logoImg from '../images/Logo.svg';

function List() {
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
                <li>
                    <button style={{cursor:"pointer", border: 0}}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                    </button>

                    <strong>Caso:</strong>
                    <p>Cadelinha atropelada</p>
                        
                    <strong>Descrição:</strong>
                    <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.</p>
                        
                    <strong>Valor:</strong>
                    <p>R$ 120,00 reais</p>
                </li>

                <li>
                    <button>
                            <FiTrash2 size={20} color="#a8a8b3" />
                    </button>

                    <strong>Caso:</strong>
                    <p>Cadelinha atropelada</p>
                        
                    <strong>Descrição:</strong>
                    <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.</p>
                        
                    <strong>Valor:</strong>
                    <p>R$ 120,00 reais</p>
                </li>

                <li>
                    <button>
                            <FiTrash2 size={20} color="#a8a8b3" />
                    </button>

                    <strong>Caso:</strong>
                    <p>Cadelinha atropelada</p>
                        
                    <strong>Descrição:</strong>
                    <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.</p>
                        
                    <strong>Valor:</strong>
                    <p>R$ 120,00 reais</p>
                </li>
            </ul>
        </div>
    );
}

export default List;