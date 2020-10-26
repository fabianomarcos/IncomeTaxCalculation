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
      const { employers } = state;
      const { employee } = state;
      const { isUpdateRoute } = state;
      // const { employee } = state;

      console.log('employer', employee);
      console.log('state', isUpdateRoute);
      console.log('lista', employers);

      //  const employeeRegisteredIndex = employers?.employers.findIndex(employee => employee.cpf === )
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
