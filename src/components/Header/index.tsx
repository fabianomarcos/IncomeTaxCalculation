import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';
import { setEmptyFormEmployee } from '../../store/modules/employers/actions';
import { IEmployee } from '../../store/modules/employers/types';

const Header: React.FC = () => {
  const [isUpdate, setIsUpdate] = useState(true);
  const dispatch = useDispatch();

  const resetForm = useCallback(
    (employee: IEmployee) => {
      dispatch(setEmptyFormEmployee(employee));
      setIsUpdate(false);
    },
    [dispatch],
  );

  return (
    <Container>
      <header>
        <Link onClick={() => setIsUpdate(true)} to="/">
          <div className="logo">
            <img src={Logo} alt="Gerenciador IRRF" />
            <span>Gerenciador</span>
          </div>
        </Link>
        <nav>
          {isUpdate && (
            <Link
              onClick={() =>
                resetForm({
                  employee: {
                    id: '',
                    nome: '',
                    cpf: '',
                    salario: 0,
                    desconto: 0,
                    dependentes: 0,
                  },
                  isUpdateRoute: '',
                })
              }
              to="/form-employee"
            >
              Novo Funcionário
            </Link>
          )}
        </nav>
      </header>
    </Container>
  );
};

export default Header;
