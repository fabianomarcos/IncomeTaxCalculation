import React, { useCallback, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';
import { setEmptyFormEmployee } from '../../store/modules/employers/actions';
import { IEmployee } from '../../store/modules/employers/types';

interface IHeaderProps {
  showBtn: boolean;
  employersList?: IEmployee[];
}

const Header: React.FC<IHeaderProps> = ({ showBtn, employersList }) => {
  const [showButton, setShowButton] = useState(true);
  const [employers, setEmployers] = useState(employersList);
  const dispatch = useDispatch();

  const resetForm = useCallback(
    (employee: IEmployee) => {
      dispatch(setEmptyFormEmployee(employee));
    },
    [dispatch],
  );

  useEffect(() => setShowButton(showBtn), [showBtn]);
  useEffect(() => setEmployers(employersList), [employersList]);

  return (
    <Container>
      <header>
        <Link onClick={() => setShowButton(true)} to="/">
          <div className="logo">
            <img src={Logo} alt="Gerenciador IRRF" />
            <span>Gerenciador</span>
          </div>
        </Link>
        <nav>
          {showButton && (
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
                  employers,
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
