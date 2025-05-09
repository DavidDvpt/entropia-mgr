import { combineReducers } from '@reduxjs/toolkit';
import modalSlice from '../../modules/modal/modalSlice';
const reducers = combineReducers({
  modal: modalSlice,
});

export default reducers;
