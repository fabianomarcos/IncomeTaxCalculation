/* eslint-disable @typescript-eslint/interface-name-prefix */
export enum ActionTypes {
  editEmployeeRequest = 'REGISTER_EMPLOYEE_REQUEST',
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
}
