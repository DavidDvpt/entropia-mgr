interface IAppItemType extends IObjectBase {
  itemCategoryId: string;
  isStackable: boolean;
}
type AppItemTypes = IItemType[];
