import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Employee } from '../../store/modules/employers/types';

import { Container, TableContainer } from './styles';

const Dashboard: React.FC = () => {
  const [employers, setEmployee] = useState<Employee[]>([]);

  useEffect(() => {
    api.get('/employers').then(response => {
      setEmployee(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th className="center">CPF</th>
                <th>Salário</th>
                <th>Desconto</th>
                <th>Dependentes</th>
                <th>Desconto IRPF</th>
              </tr>
            </thead>

            <tbody>
              {employers.map(
                ({
                  id,
                  nome,
                  cpf,
                  salario,
                  desconto,
                  dependentes,
                }: Employee) => (
                  <tr key={id}>
                    <td className="name">{nome}</td>
                    <td>{cpf}</td>
                    <td>{salario}</td>
                    <td>{desconto}</td>
                    <td>{dependentes}</td>
                    <td>{dependentes}</td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
