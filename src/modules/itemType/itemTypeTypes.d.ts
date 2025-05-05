interface IAppItemType extends IObjectBase {
  itemCategoryId: string;
  isStackable: boolean;
  itemCategory?: IAppItemCategory;
}
type AppItemTypes = IItemType[];
