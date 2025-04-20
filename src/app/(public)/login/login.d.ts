type LoginFormValues = { email: string; password: string };

interface IInputComponentProps {
  isVertical?: boolean;
  label?: string;
  name?: string;
  value?: string;
  type?: 'text' | 'number' | 'password' | 'email';
  placeholder?: string;
  disabled?: boolean;
  onInputChange?: (
    value: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
  selectOnFocus?: boolean;
  inputContainerClassName?: string;
  error?: string;
}
