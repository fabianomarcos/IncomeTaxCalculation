/* eslint-disable react/jsx-curly-newline */
import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';
import { setEmptyFormEmployee } from '../../store/modules/employers/actions';
import { IEmployee } from '../../store/modules/employers/types';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const resetForm = useCallback(
    (employee: IEmployee) => {
      dispatch(setEmptyFormEmployee(employee));
    },
    [dispatch],
  );

  return (
    <Container>
      <header>
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="GoFinances" />
            <span>Gerenciador</span>
          </div>
        </Link>
        <nav>
          <Link
            onClick={() =>
              resetForm({
                id: '',
                nome: '',
                cpf: '',
                salario: 0,
                desconto: 0,
                dependentes: 0,
                isUpdateRoute: '',
              })
            }
            to="/form-employee"
          >
            Inserir Funcionário
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
