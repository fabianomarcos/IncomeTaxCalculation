import { ActionTypes, IEmployee, IEmployeeList } from './types';

export function editEmployeeRequest(
  employee: IEmployee,
  employersList: IEmployeeList,
) {
  return {
    type: ActionTypes.editEmployeeRequest,
    payload: {
      ...employee,
      isUpdateRoute: `/employers/${employee.employee.id}`,
      employers: [{ ...employersList, employee }],
    },
  };
}

export function setEmptyFormEmployee(employee: IEmployee) {
  return {
    type: ActionTypes.resetForm,
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
