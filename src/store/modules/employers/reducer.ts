import { Reducer } from 'redux';
import { ActionTypes, IEmployee } from './types';

const INITIAL_STATE: IEmployee = {
  employee: {
    id: '',
    nome: '',
    cpf: '',
    salario: 0,
    desconto: 0,
    dependentes: 0,
  },
  isUpdateRoute: '',
};

const employeeForm: Reducer<IEmployee> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.editEmployeeRequest: {
      const { employee, employers } = state;

      return {
        ...action.payload,
      };
    }

    case ActionTypes.resetForm: {
      return {
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default employeeForm;
