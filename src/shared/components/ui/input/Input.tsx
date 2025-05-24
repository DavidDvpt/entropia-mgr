import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputHTMLAttributes, useState } from 'react';
import useSafeFormContext from '../../form/hookForm/useSafeFormContext';
import styles from './input.module.scss';
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  error?: boolean;
}

function Input(props: IInputProps) {
  const { error = false, value, onChange } = props;
  const form = useSafeFormContext();
  const [visible, setVisible] = useState(false);

  const register = form?.register?.(props.name as string);
  const isControlledByForm = !!register;

  if (!props.name) return null;

  const css = [styles.inputContainer];
  props.className && css.push(props.className);
  props.error && css.push(styles.error);

  const Eye = () => (
    <FontAwesomeIcon
      icon={visible ? faEye : faEyeSlash}
      onClick={() => setVisible(!visible)}
    />
  );

  return (
    <div className={css.join(' ')}>
      <input
        id={props.id}
        type={visible ? 'text' : props.type}
        {...(isControlledByForm
          ? {
              ...register,
            }
          : {
              value,
              onChange,
            })}
      />
      {props.type === 'password' && <Eye />}
    </div>
  );
}

export default Input;
