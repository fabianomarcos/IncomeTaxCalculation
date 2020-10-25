/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable react/prop-types */
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import { IEmployee } from '../../store/modules/employers/types';
import api from '../../services/api';
import Input from '../../components/Input';
import { Container, Content, AnimationContainer } from './styles';
import Dashboard from '../Dashboard';
import Button from '../../components/Button';

const Employee: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: IEmployee) => {
      formRef.current?.setErrors({});

      const message = 'Campo obrigatório';

      try {
        const schema = Yup.object().shape({
          nome: Yup.string().required(message),
          cpf: Yup.string().required(message),
          salario: Yup.string().required(message),
          desconto: Yup.string().required(message),
          dependentes: Yup.string().required(message),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/employers', data);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );
  return (
    <>
      <Container>
        <Content>
          <AnimationContainer>
            <h1>Cadastro de Funcionários</h1>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="input-content">
                <div>
                  <span>Nome</span>
                  <Input name="nome" placeholder="Funcionário" />
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
                <Button type="submit">Cadastrar</Button>
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
