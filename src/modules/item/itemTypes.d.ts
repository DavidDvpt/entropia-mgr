interface IAppItem extends IObjectBase {
  isLimited: boolean;
  value: number;
  imgUrlId: string | null;
}
type AppItems = IAppItem[];
