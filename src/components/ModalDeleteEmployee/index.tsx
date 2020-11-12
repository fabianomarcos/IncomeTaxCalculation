import React, { useRef, useCallback } from 'react';

import { FiCheckSquare, FiXCircle } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IEmployersResponse } from '../../pages/Dashboard';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  confirmDeleteEmployee: (employee: IEmployersResponse) => void;
  deletingEmployee: IEmployersResponse;
}

const ModalDeleteEmployee: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  deletingEmployee,
  confirmDeleteEmployee,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEmployersResponse) => {
      confirmDeleteEmployee(data);
      setIsOpen();
    },
    [confirmDeleteEmployee, setIsOpen],
  );

  function closeModal(): void {
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={deletingEmployee}
      >
        <h2>Deseja realmente deletar esse funcionário?</h2>

        <div className="input-content">
          <div>
            <span>Id</span>
            <Input name="id" disabled />
          </div>

          <div>
            <span>Nome</span>
            <Input name="nome" disabled />
          </div>

          <div>
            <span>CPF</span>
            <Input name="cpf" disabled />
          </div>

          <div>
            <span>Salário</span>
            <Input name="salario" disabled />
          </div>

          <div>
            <span>INSS</span>
            <Input name="desconto" disabled />
          </div>

          <div>
            <span>Dependentes</span>
            <Input name="dependentes" disabled />
          </div>
        </div>

        <div className="button-content">
          <button
            onClick={() => closeModal()}
            type="button"
            data-testid="cancel-food-button"
          >
            <div className="text">Cancelar</div>
            <div className="icon">
              <FiXCircle size={24} />
            </div>
          </button>

          <button type="submit" data-testid="delete-food-button">
            <div className="text">Deletar</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalDeleteEmployee;
