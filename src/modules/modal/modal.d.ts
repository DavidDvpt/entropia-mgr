type FormModalType = {
  item: IAppItemCategory | null;
  display: boolean;
};

type ModalReduxState = {
  itemCategoryFormModal: FormModalType;
  itemTypeFormModal: FormModalType;
};
