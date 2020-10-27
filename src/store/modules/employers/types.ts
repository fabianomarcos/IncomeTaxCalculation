export enum ActionTypes {
  editEmployeeRequest = 'EDIT_EMPLOYEE_REQUEST',
  editEmployeeSuccess = 'EDIT_EMPLOYEE_SUCCESS',
  editEmployeeFailure = 'EDIT_EMPLOYEE_FAILURE',
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
}

export interface IEmployeeList {
  listEmployers: {
    employers: IEmployee[];
  };
}

export interface IEmployeeState {
  employee: IEmployee;
}
