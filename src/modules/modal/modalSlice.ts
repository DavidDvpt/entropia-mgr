import { RootState } from '@/lib/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ModalReduxState = {
  itemCategoryFormModal: { display: false, item: null },
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setItemCategoryForm: (
      state,
      action: PayloadAction<ItemCategoryFormModalType>
    ) => {
      state.itemCategoryFormModal = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;
export const getModalState = (state: RootState) => state.modal;
