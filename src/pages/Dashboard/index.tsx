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
import ModalDeleteEmployee from '../../components/ModalDeleteEmployee';
import { useToast } from '../../hooks/toast';

export interface IEmployersResponse {
  id: string;
  nome: string;
  cpf: string;
  salario: number;
  salarioFormatted: string;
  desconto: number;
  descontoIRRFFormatted: string;
  descontoINSSFormatted: string;
  dependentes: number;
}

const Dashboard: React.FC = () => {
  const [isUpdate, setIsUpdate] = useState(true);
  const dispatch = useDispatch();
  const { addToast } = useToast();

  const [employers, setEmployers] = useState<IEmployersResponse[]>([]);

  const [deletingEmployee, setDeletingEmployee] = useState<IEmployersResponse>(
    {} as IEmployersResponse,
  );
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    api.get<IEmployersResponse[]>('/employers').then(response => {
      const employersFormatted = response.data.map(item => {
        return {
          ...item,
          cpf: cpfMask(item.cpf),
          salarioFormatted: formatValue(item.salario),
          descontoINSSFormatted: formatValue(item.desconto),
          descontoIRRFFormatted: formatValue(
            calculateDiscountIRRF(item.salario, item.dependentes),
          ),
        };
      });
      setEmployers(employersFormatted);
    });
  }, []);

  function toggleDeleteModal(): void {
    setDeleteModalOpen(!deleteModalOpen);
  }

  function handleDeleteEmployee(employee: IEmployersResponse): void {
    setDeletingEmployee({ ...employee });
    toggleDeleteModal();
  }

  async function confirmDeleteEmployee(
    employee: IEmployersResponse,
  ): Promise<void> {
    try {
      await api.delete(`/employers/${employee.id}`);

      setEmployers(
        employers.filter(findEmployee => findEmployee.id !== employee.id),
      );

      addToast({
        title: 'Funcionário deletado com sucesso.',
        type: 'success',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao tentar deletar o funcionário.',
        description:
          'Nao foi possível realizar a operação, tente novamente mais tarde.',
      });
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
      <ModalDeleteEmployee
        isOpen={deleteModalOpen}
        setIsOpen={toggleDeleteModal}
        deletingEmployee={deletingEmployee}
        confirmDeleteEmployee={confirmDeleteEmployee}
      />
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
                <th>Desconto IRRF</th>
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
                  descontoIRRFFormatted,
                  descontoINSSFormatted,
                  dependentes,
                }: any) => (
                  <tr key={id}>
                    <td className="name">{nome}</td>
                    <td>{cpf}</td>
                    <td>{salarioFormatted}</td>
                    <td>{descontoINSSFormatted}</td>
                    <td>{dependentes}</td>
                    <td>{descontoIRRFFormatted}</td>
                    <td>
                      <FiTrash2
                        onClick={() =>
                          handleDeleteEmployee({
                            id,
                            nome,
                            cpf,
                            desconto,
                            salario,
                            salarioFormatted,
                            descontoIRRFFormatted,
                            descontoINSSFormatted,
                            dependentes,
                          })
                        }
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
                                    cpf: cpfMask(cpf),
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
