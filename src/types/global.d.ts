interface IChildren {
  children: React.ReactNode;
}
type VariantType = 'primary' | 'warning' | 'error' | 'success';

type PositionType = 'top' | 'right' | 'left' | 'bottom';

type InputType = 'text' | 'number' | 'password' | 'email';

type AppUserRole = 'USER' | 'ADMIN';
interface IFormeElementType {
  name: string;
  id: string;
  error?: boolean;
}

interface IId {
  id: string;
}

interface IName {
  name: string;
}
interface IIsActive {
  isActive: boolean;
}

interface IObjectBase extends IId, IName, IIsActive {}
