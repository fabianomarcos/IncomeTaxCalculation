import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { IEmployee, IEmployeeState } from '../../store/modules/employers/types';
import { Container, Content, AnimationContainer } from './styles';
import Dashboard from '../Dashboard';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useToast } from '../../hooks/toast';
import Header from '../../components/Header';
import { addEmployeeRequest } from '../../store/modules/employers/actions';

interface IHasCpf {
  hasFailure: boolean;
}

const Employee: React.FC = () => {
  const state = useSelector<IEmployeeState, IEmployee>(
    stateInitial => stateInitial.employee,
  );

  /*  const hasFailure = useSelector<IEmployeeState, boolean | undefined>(
    stateInitial => stateInitial.employee.hasFailure,
  ); */

  // console.log('hasFailure', hasFailure);

  const { isUpdateRoute, employee, employers, hasFailure } = state;

  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { addToast } = useToast();

  const handleAddEmployee = useCallback(
    (employersList: any, currentEmployee: IEmployee) => {
      dispatch(addEmployeeRequest(employersList, currentEmployee));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    async (data: IEmployee) => {
      formRef.current?.setErrors({});

      const message = 'Campo obrigatório';
      const yupRequired = Yup.string().required(message);
      const regex = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/g;

      try {
        const schema = Yup.object().shape({
          nome: yupRequired,
          cpf: yupRequired.matches(regex, `cpf inválido`),
          salario: yupRequired,
          desconto: yupRequired,
          dependentes: yupRequired,
        });

        if (employers) await handleAddEmployee(employers, data);

        const messageCpf = 'Cpf já cadastrado';

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log(hasFailure);

        if (hasFailure) {
          addToast({
            title: messageCpf,
            description: 'Favor verificar o CPF digitado',
            type: 'error',
          });

          return;
        }

        isUpdateRoute
          ? await api.put(isUpdateRoute, data)
          : await api.post('/employers', data);

        history.push('/');

        const messageToast = isUpdateRoute ? 'atualizado' : 'cadastrado';

        addToast({
          type: 'success',
          title: `Funcionário ${messageToast} com sucesso`,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: `Preenchimento incorreto`,
            description:
              'Favor verificar campos errados e preencher novamente.',
          });

          return;
        }

        addToast({
          type: 'error',
          title: `Ocorreu algum erro`,
          description:
            'Não foi possível inserir as informações do funcionário.',
        });
      }
    },
    [
      employers,
      handleAddEmployee,
      hasFailure,
      isUpdateRoute,
      history,
      addToast,
    ],
  );

  return (
    <>
      <Header showBtn={false} />
      <Container>
        <Content>
          <AnimationContainer>
            <h1>{isUpdateRoute === '' ? 'Cadastro' : 'Atualização'}</h1>

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
