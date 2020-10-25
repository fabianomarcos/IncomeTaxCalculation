import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="GoFinances" />
          <span>Gerenciador</span>
        </div>
      </Link>
      <nav>
        <Link to="/form-employee">Inserir Funcionário</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
