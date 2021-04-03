import { IEmployersResponse } from '../../../pages/Dashboard';
import { ActionTypes, IEmployee, IEmployeeList } from './types';

export function editEmployeeRequest(
  employee: IEmployee,
  employersList?: IEmployeeList,
) {
  return {
    type: ActionTypes.editEmployeeRequest,
    payload: {
      ...employee,
      isUpdateRoute: `/employers/${employee.employee.id}`,
      employers: { ...employersList },
    },
  };
}

export function addEmployeeSuccess(
  employers: IEmployee[],
  employee: IEmployee,
) {
  const result = {
    type: ActionTypes.addEmployeeRequest,
    payload: {
      employee,
      isUpdateRoute: '',
      employers,
    },
  };

  console.log('addSuccess', result);

  return result;
}

export function addEmployeeRequest(
  employers: IEmployee[],
  employee: IEmployee,
) {
  const result = {
    type: ActionTypes.addEmployeeRequest,
    payload: {
      employee,
      isUpdateRoute: '',
      employers,
    },
  };

  console.log('add', result);

  return result;
}

export function employeeFailure(
  employeeList: IEmployersResponse,
  hasFailure: boolean,
) {
  const result = {
    type: ActionTypes.employeeFailure,
    payload: {
      employeeName: employeeList.nome,
      hasFailure,
    },
  };

  console.log('failure', result);

  return result;
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
