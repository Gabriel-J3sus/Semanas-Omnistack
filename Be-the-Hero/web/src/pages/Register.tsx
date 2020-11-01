import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/register.css';

import logoImg from '../images/Logo.svg';

function Register() {
    return (
        <div id="page-register">
            <div className="content-wrapper">
                <div className="left">
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>

                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="return">
                        <FiArrowLeft size={24} color="#E02041" />
                        <span>Voltar para o logon</span>
                    </Link>
                </div>
                
                <div className="right">
                    <input type="text" placeholder="Nome da ONG" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="WhatsApp" />

                    <div className="input-wrapper">
                        <input type="text" style={{width: 370, height: 60}} placeholder="Cidade" />
                        <input type="text" style={{width: 70, height: 60}} placeholder="UF" />
                    </div>
                    
                    <button>
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;