export enum ActionTypes {
  editEmployeeRequest = 'EDIT_EMPLOYEE_REQUEST',
  editEmployeeSuccess = 'EDIT_EMPLOYEE_SUCCESS',

  employeeFailure = 'EMPLOYEE_FAILURE',

  addEmployeeRequest = 'ADD_EMPLOYEE_REQUEST',
  addEmployeeSuccess = 'ADD_EMPLOYEE_SUCCESS',

  resetForm = 'RESET_FORM',

  deleteEmployeeRequest = 'DELETE_EMPLOYEE_REQUEST',
  registerEmployeeSuccess = 'REGISTER_EMPLOYEE_SUCCESS',
  registerEmployeeFailure = 'REGISTER_EMPLOYEE_FAILURE',
}

export interface IEmployee {
  employee: {
    id: string;
    nome: string;
    cpf: string;
    salario: number;
    desconto: number;
    dependentes: number;
  };
  isUpdateRoute?: string;
  employers?: IEmployee[];
  hasFailure?: boolean;
}

export interface IEmployeeList {
  listEmployers: {
    employers: IEmployee[];
  };
}

export interface IEmployeeState {
  employee: IEmployee;
  isUpdateRoute?: string;
  employers?: IEmployee[];
  hasFailure?: boolean;
}
