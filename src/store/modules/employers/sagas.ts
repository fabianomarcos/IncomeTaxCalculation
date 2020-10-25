/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ActionTypes } from './types';

// type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

/* interface IStockResponse {
  id: number;
  quantity: number;
} */

function* checkProductStock(/* { payload } : CheckProductStockRequest */) {
  /* const { employee } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find(item => item.product.id === product.id)?.quantity ??
      0
    );
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `employers/${id}`,
  );
 */
  /*  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  } */
}

export default all([
  // takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
]);
