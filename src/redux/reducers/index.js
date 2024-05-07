import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import companyReducer from './companyReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  company: companyReducer
});

export default rootReducer;