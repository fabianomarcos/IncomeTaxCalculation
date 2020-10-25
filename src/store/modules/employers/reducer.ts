/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Reducer } from 'redux';
import { IEmployee } from './types';

const INITIAL_STATE: IEmployeeState = {
  employee: {
    id: '',
    nome: '',
    cpf: '',
    salario: 0,
    desconto: 0,
    dependentes: 0,
  },
};
interface IEmployeeState {
  employee: IEmployee;
}

const employee: Reducer<IEmployeeState> = () => {
  return INITIAL_STATE;
};

export default employee;
