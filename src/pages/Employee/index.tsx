import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { IEmployee, IEmployeeState } from '../../store/modules/employers/types';
import { Container, Content, AnimationContainer } from './styles';
import Dashboard from '../Dashboard';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Employee: React.FC = () => {
  const state = useSelector<IEmployeeState, IEmployee>(
    stateInitial => stateInitial.employee,
  );

  const { isUpdateRoute, employee } = state;

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: IEmployee) => {
      formRef.current?.setErrors({});

      const message = 'Campo obrigatório';
      const yupRequired = Yup.string().required(message);

      try {
        const schema = Yup.object().shape({
          nome: yupRequired,
          cpf: yupRequired,
          salario: yupRequired,
          desconto: yupRequired,
          dependentes: yupRequired,
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (!isUpdateRoute) {
          await api.post('/employers', data);
        } else {
          await api.put(isUpdateRoute, data);
        }

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, isUpdateRoute],
  );
  return (
    <>
      <Container>
        <Content>
          <AnimationContainer>
            <h1>Cadastro de Funcionários</h1>

            <Form ref={formRef} onSubmit={handleSubmit} initialData={employee}>
              <div className="input-content">
                <div>
                  <span>Nome</span>
                  <Input name="nome" placeholder="Nome do Funcionário" />
                </div>
                <div>
                  <span>CPF</span>
                  <Input name="cpf" placeholder="CPF" />
                </div>
                <div>
                  <span>Salário</span>
                  <Input name="salario" placeholder="Salario" />
                </div>
                <div>
                  <span>Desconto</span>
                  <Input name="desconto" placeholder="Desconto" />
                </div>
                <div>
                  <span>Dependentes</span>
                  <Input name="dependentes" placeholder="Dependentes" />
                </div>
              </div>

              <div className="button-content">
                <Link to="/">
                  <Button>Cancelar</Button>
                </Link>
                <Button className="success" type="submit">
                  {isUpdateRoute === '' ? 'Cadastrar' : 'Atualizar'}
                </Button>
              </div>
            </Form>
          </AnimationContainer>
        </Content>
      </Container>

      <AnimationContainer>
        <Dashboard />
      </AnimationContainer>
    </>
  );
};

export default Employee;
