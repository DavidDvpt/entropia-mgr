import { RootState } from '@/lib/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ModalReduxState = {
  itemCategoryFormModal: { display: false, item: null },
  itemTypeFormModal: { display: false, item: null },
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setItemCategoryForm: (state, action: PayloadAction<FormModalType>) => {
      state.itemCategoryFormModal = action.payload;
    },
    resetItemCategoryForm: (state) => {
      state.itemCategoryFormModal = { display: false, item: null };
    },
    setItemTypeForm: (state, action: PayloadAction<FormModalType>) => {
      state.itemTypeFormModal = action.payload;
    },
    resetItemTypeForm: (state) => {
      state.itemTypeFormModal = { display: false, item: null };
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;
export const getModalState = (state: RootState) => state.modal;
