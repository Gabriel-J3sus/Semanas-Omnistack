import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import '../styles/pages/login.css';

import logoImg from '../images/Logo.svg';
import peopleImg from '../images/People.svg';

function Login() {
    return (
        <div id="page-login">
            <div className="content-wrapper">
                <div className="left">
                    <img src={logoImg} alt="Be The Hero"/>

                    <form>
                        <legend> Faça seu Logon </legend>
                        <input type="text" placeholder="Sua ID" />

                        <button>
                            Entrar
                        </button>

                        <Link to="/register" className="return">
                            <FiLogIn size={24} color="#E02041" />
                            <span>Não tenho cadastro</span>
                        </Link>
                    </form>
                </div>

                <img src={peopleImg} alt="People"/>
            </div>
        </div>
    );
}

export default Login;