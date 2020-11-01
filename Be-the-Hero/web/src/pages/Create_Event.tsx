import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/create_Event.css';

import logoImg from '../images/Logo.svg';

function RegisterEvent() {
    return (
        <div id="page-create">
            <div className="content-wrapper">
                <div className="left">
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>

                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/home" className="return">
                        <FiArrowLeft size={24} color="#E02041" />
                        <span>Voltar para a home</span>
                    </Link>
                </div>

                <div className="right">
                    <input type="text" placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input type="text" placeholder="Valor em reais" />
                
                    <div className="buttons">
                        <button className="cancel">Cancelar</button>
                        <button className="register">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterEvent;