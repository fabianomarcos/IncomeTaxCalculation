import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { editEmployeeFailure, editEmployeeRequest } from './actions';
import { ActionTypes, IEmployee, IEmployeeState } from './types';

type CheckEmployee = ReturnType<typeof editEmployeeRequest>;

interface IEmployeeResponse {
  employee: IEmployee;
  id: string;
  cpf: string;
  employers: IEmployee[];
}

function* checkIfExistingEmployer({ payload }: CheckEmployee) {
  const existingCPf = yield select((state: IEmployeeState) => {
    return state.employee.employers?.filter(
      item =>
        item.employee.cpf === payload.employee.cpf &&
        item.employee.id !== payload.employee.id,
    );
  });

  const employeeItem: AxiosResponse<IEmployeeResponse> = yield call(
    api.get,
    `employers/${payload.employee.id}`,
  );

  if (!existingCPf) {
    yield put(editEmployeeRequest(employeeItem.data.employee));
  } else {
    yield put(editEmployeeFailure(employeeItem.data.id));
  }
}

export default all([
  takeLatest(ActionTypes.editEmployeeRequest, checkIfExistingEmployer),
]);
