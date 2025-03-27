import { dosis } from '@/scss/fonts';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, FocusEvent, forwardRef, Ref, useState } from 'react';
import styles from './inputComponent.module.scss';

interface IOnFocusProps {
  e: FocusEvent<HTMLInputElement>;
  selectOnFocus?: boolean;
}

export const InputComponent = forwardRef(
  (props: IInputComponentProps, ref: Ref<HTMLInputElement>) => {
    const [visible, setVisible] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      props.onInputChange && props.onInputChange(e, props.name ?? '');
    };
    const handleFocus = ({ e, selectOnFocus = false }: IOnFocusProps) => {
      if (selectOnFocus) e.target.select();
    };

    const Eye = () => (
      <FontAwesomeIcon
        icon={visible ? faEye : faEyeSlash}
        onClick={() => setVisible(!visible)}
      />
    );

    return (
      <div
        className={[
          styles.inputComponent,
          props.isVertical && props.label ? styles.flexColumn : '',
        ].join('')}
      >
        {props.label && <label>{props.label}</label>}
        <div className={styles.inputWithErrorConainer}>
          <div
            className={[
              styles.inputContainer,
              props.error ? styles.error : '',
              props.inputContainerClassName ?? '',
            ].join(' ')}
          >
            <input
              style={dosis.style}
              ref={ref}
              type={visible ? 'text' : props.type}
              name={props.name}
              value={props.value}
              placeholder={props.placeholder}
              disabled={props.disabled}
              onChange={handleChange}
              onFocus={(e) =>
                handleFocus({ e, selectOnFocus: props.selectOnFocus })
              }
              aria-invalid={Boolean(props.error)}
            />
            {props.type === 'password' && <Eye />}
          </div>
          {props.error && <p>{props.error}</p>}
        </div>
      </div>
    );
  }
);

export default InputComponent;
