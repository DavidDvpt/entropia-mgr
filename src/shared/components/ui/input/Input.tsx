import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputHTMLAttributes, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input.module.scss';
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  error?: boolean;
}

function Input(props: IInputProps) {
  const { error = false } = props;
  const { register, watch } = useFormContext();
  const [visible, setVisible] = useState(false);

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
        {...register(props.name)}
      />
      {props.type === 'password' && <Eye />}
    </div>
  );
}

export default Input;
