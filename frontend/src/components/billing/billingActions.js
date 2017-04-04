import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../util/tabs/tabActions';

const BASE_URL = 'http://localhost:3000/api/billing';
const INITIAL_VALUES = { credits: [{}], debits: [{}] };

const submit = (values, method) => {
  return dispatch => {
    const id = values._id ? values._id : '';
    axios[method](`${BASE_URL}/${id}`, values)
      .then(response => {
        toastr.success('Sucesso', 'Operação realizada com sucesso');
        dispatch(init())
      })
      .catch(err => {
        err.response.data.errors.forEach(err => toastr.error('Erro', err));
      });
  }
};

export function getList() {
  const request = axios.get(BASE_URL);
  return {
    type: 'BILLING_FETCHED',
    payload: request
  }
};

export function create(values) {
  return submit(values, 'post');
};

export function update(values) {
  return submit(values, 'put');
};

export function remove(values) {
  return submit(values, 'delete');
}

export function showUpdate(billing) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingForm', billing)
  ]
};

export function showDelete(billing) {
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingForm', billing)
  ]
};

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingForm', INITIAL_VALUES)
  ]
};
