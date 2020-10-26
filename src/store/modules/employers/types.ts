export enum ActionTypes {
  editEmployeeRequest = 'EDIT_EMPLOYEE_REQUEST',
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
  employers?: IEmployeeList;
}

export interface IEmployeeList {
  employers: IEmployee[];
}

export interface IEmployeeState {
  employee: IEmployee;
}
