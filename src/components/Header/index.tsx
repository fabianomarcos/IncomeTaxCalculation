import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <header>
      <div className="logo">
        <img src={Logo} alt="GoFinances" />
        <span>Gerenciador</span>
      </div>
      <nav>
        <Link to="/">Listagem</Link>
        <Link to="/import">Importar</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
