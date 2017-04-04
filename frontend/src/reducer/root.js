import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import dashboardReducer from '../components/dashboard/dashboardReducer';
import tabReducer from '../components/util/tabs/tabReducer';
import billingReducer from '../components/billing/billingReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billing: billingReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
