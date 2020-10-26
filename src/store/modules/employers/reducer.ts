import produce from 'immer';
import { Reducer } from 'redux';
import { string } from 'yup';
import { ActionTypes, IEmployee } from './types';

const INITIAL_STATE: IEmployee = {
  id: '',
  nome: '',
  cpf: '',
  salario: 0,
  desconto: 0,
  dependentes: 0,
  isUpdateRoute: '',
};

const employee: Reducer<IEmployee> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.editEmployeeRequest: {
      return {
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default employee;
