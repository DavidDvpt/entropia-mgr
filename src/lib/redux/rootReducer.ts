import { combineReducers } from '@reduxjs/toolkit';
import modalSlice from '../../modules/modals/modalSlice';
const reducers = combineReducers({
  modal: modalSlice,
});

export default reducers;
