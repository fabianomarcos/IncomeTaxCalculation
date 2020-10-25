/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionTypes, IEmployee } from './types';

export function editEmployeeRequest(employee: IEmployee) {
  return {
    type: ActionTypes.editEmployeeRequest,
    payload: {
      employee,
    },
  };
}

export function registerEmployeeSuccess() {
  return {
    type: ActionTypes.registerEmployeeSuccess,
    payload: {
      product: '',
    },
  };
}

export function registerEmployeeFailure(productId: number) {
  return {
    type: ActionTypes.registerEmployeeFailure,
    payload: {
      productId,
    },
  };
}
