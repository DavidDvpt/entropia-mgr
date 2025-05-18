interface IAppItem extends IObjectBase {
  isLimited: boolean;
  value: number;
  imgUrlId: string | null;
  itemTypeId: string;
  itemType?: IAppItemType;
}
type AppItems = IAppItem[];
