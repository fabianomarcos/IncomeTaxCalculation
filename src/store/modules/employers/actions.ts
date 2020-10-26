import { ActionTypes, IEmployee } from './types';

export function editEmployeeRequest(employee: IEmployee) {
  return {
    type: ActionTypes.editEmployeeRequest,
    payload: {
      ...employee,
      isUpdateRoute: `/employers/${employee.id}`,
    },
  };
}

export function setEmptyFormEmployee(employee: IEmployee) {
  return {
    type: ActionTypes.registerEmployeeSuccess,
    payload: {
      ...employee,
      isUpdateRoute: '',
    },
  };
}

export function registerEmployeeFailure() {
  return {
    type: ActionTypes.registerEmployeeFailure,
    payload: {
      employee: {},
    },
  };
}
