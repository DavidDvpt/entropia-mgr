interface IAppItem extends IObjectBase {
  isLimited: boolean;
  value: number;
  imgUrlId: string | null;
  itemType?: IAppItemType;
}
type AppItems = IAppItem[];
