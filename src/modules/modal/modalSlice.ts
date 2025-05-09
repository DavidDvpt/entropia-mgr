import { RootState } from '@/lib/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ModalReduxState = { itemCategoryFormModal: null };
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setItemCategoryForm: (
      state,
      action: PayloadAction<IAppItemCategory | null>
    ) => {
      state.itemCategoryFormModal = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const getModalState = (state: RootState) => state.modal;
