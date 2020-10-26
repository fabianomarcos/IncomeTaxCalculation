export enum ActionTypes {
  editEmployeeRequest = 'EDIT_EMPLOYEE_REQUEST',
  resetForm = 'RESET_FORM',
  deleteEmployeeRequest = 'DELETE_EMPLOYEE_REQUEST',
  registerEmployeeSuccess = 'REGISTER_EMPLOYEE_SUCCESS',
  registerEmployeeFailure = 'REGISTER_EMPLOYEE_FAILURE',
}

export interface IEmployee {
  id: string;
  nome: string;
  cpf: string;
  salario: number;
  desconto: number;
  dependentes: number;
  isUpdateRoute?: string;
}

export interface IEmployeeState {
  employee: IEmployee;
}
