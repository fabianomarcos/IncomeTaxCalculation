import React, { useState, useEffect, useCallback } from 'react';

import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { IEmployee } from '../../store/modules/employers/types';
import calculateDiscountIRRF from '../../utils/CalculateIRRF';
import formatValue from '../../utils/formatValue';
import { cpfMask } from '../../utils/cpfMask';

import { Container, TableContainer } from './styles';
import { editEmployeeRequest } from '../../store/modules/employers/actions';

interface IEmployersResponse {
  id: string;
  nome: string;
  cpf: string;
  salario: number;
  desconto: number;
  dependentes: number;
  descontoFormatted: string;
  salarioFormatted: string;
}

const Dashboard: React.FC = () => {
  const [isUpdate, setIsUpdate] = useState(true);
  const dispatch = useDispatch();

  const [employers, setEmployers] = useState<IEmployersResponse[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    api.get<IEmployersResponse[]>('/employers').then(response => {
      const employersFormatted = response.data.map(item => {
        return {
          ...item,
          cpf: cpfMask(item.cpf),
          salarioFormatted: formatValue(item.salario),
          descontoFormatted: formatValue(
            calculateDiscountIRRF(item.salario, item.dependentes),
          ),
        };
      });
      setEmployers(employersFormatted);
    });
  }, []);

  async function handleDeleteEmployee(id: string): Promise<void> {
    try {
      setModalOpen(!modalOpen);

      await api.delete(`/employers/${id}`);

      setEmployers(employers.filter(findEmployee => findEmployee.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdateEmployee = useCallback(
    (employee: IEmployee, employersList: any) => {
      dispatch(editEmployeeRequest(employee, employersList));
      setIsUpdate(false);
    },
    [dispatch],
  );

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
                <th>Desconto INSS</th>
                <th>Dependentes</th>
                <th>Desconto IRPF</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {employers.map(
                ({
                  id,
                  nome,
                  cpf,
                  desconto,
                  salario,
                  salarioFormatted,
                  descontoFormatted,
                  dependentes,
                }: any) => (
                  <tr key={id}>
                    <td className="name">{nome}</td>
                    <td>{cpf}</td>
                    <td>{salarioFormatted}</td>
                    <td>{desconto}</td>
                    <td>{dependentes}</td>
                    <td>{descontoFormatted}</td>
                    <td>
                      <FiTrash2
                        onClick={() => handleDeleteEmployee(id)}
                        color="#ff0b0b"
                        size={20}
                      />
                      {isUpdate && (
                        <Link
                          to={{
                            pathname: `/form-employee/${id}`,
                            state: { id },
                          }}
                        >
                          <FiEdit
                            onClick={() =>
                              handleUpdateEmployee(
                                {
                                  employee: {
                                    id,
                                    nome,
                                    cpf,
                                    desconto,
                                    salario,
                                    dependentes,
                                  },
                                },
                                employers,
                              )
                            }
                            color="#3e863e"
                            size={20}
                          />
                        </Link>
                      )}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>

          {!employers.length && (
            <p className="empty">Ops! Não foi encontrado nenhum funcionário</p>
          )}
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
