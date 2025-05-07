import itemCategoryApi from '@/modules/itemCategory/itemCategoryApi';
import { combineReducers } from '@reduxjs/toolkit';

const reducers = combineReducers({
  [itemCategoryApi.reducerPath]: itemCategoryApi.reducer,
});

export default reducers;
