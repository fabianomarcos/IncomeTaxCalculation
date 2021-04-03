import { all, put, takeLatest } from 'redux-saga/effects';
import { IEmployersResponse } from '../../../pages/Dashboard';
import { cpfMask } from '../../../utils/cpfMask';
import { addEmployeeSuccess } from './actions';
import { ActionTypes } from './types';

// type CheckEmployee = ReturnType<typeof employeeFailure>;

function* checkIfExistingEmployer({ payload }: any) {
  const { employee, employers } = payload;

  const indexCPf: number = employers.findIndex(
    ({ cpf }: IEmployersResponse) => cpfMask(employee.cpf) === cpfMask(cpf),
  );

  console.log(indexCPf);

  if (indexCPf >= 0) {
    console.log('falha');
    // yield put(employeeFailure(employee, indexCPf > -1));
    yield put(addEmployeeSuccess(employers, employee));
  } else {
    console.log('ok');
    yield put(addEmployeeSuccess(employers, employee));
  }
}

export default all([
  takeLatest(ActionTypes.addEmployeeRequest, checkIfExistingEmployer),
]);
