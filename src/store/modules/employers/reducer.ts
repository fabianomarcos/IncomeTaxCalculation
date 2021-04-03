import produce from 'immer';
import { Reducer } from 'redux';
import { cpfMask } from '../../../utils/cpfMask';
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
  hasFailure: false,
};

const employeeForm: Reducer<IEmployee> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.editEmployeeRequest: {
        return {
          ...action.payload,
        };
      }

      case ActionTypes.addEmployeeSuccess: {
        console.log('add', action.payload);
        const { employee, employers } = draft;

        const indexCPf = employers?.findIndex(
          item => cpfMask(employee.cpf) === cpfMask(item.employee.cpf),
        );

        if (indexCPf) {
          if (indexCPf > -1) {
            console.log('erro');
            throw new Error('Cpf já cadastrado');
          }
        }

        console.log(indexCPf);

        return {
          hasFailure: indexCPf,
          ...action.payload,
        };
      }

      case ActionTypes.employeeFailure: {
        const result = {
          ...action.payload,
        };
        console.log('failure', action.payload);
        console.log('failure state', state);

        return result;
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
  });
};

export default employeeForm;
