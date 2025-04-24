import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './formField.module.scss';

interface IFormFieldProps {
  label?: string;
  name: string;
  children: React.ReactElement<Partial<IFormeElementType>>;
  className?: string;
  labelPosition?: PositionType;
}

function FormField<T extends object>(props: IFormFieldProps) {
  const {
    formState: { errors },
  } = useFormContext();
  const { labelPosition = 'top', name } = props;

  const id = `field-${name}`;
  const error = errors[name]?.message as string;

  const css = [styles.formField, styles[labelPosition], props.className];

  const cloned = React.isValidElement(props.children)
    ? React.cloneElement(props.children, {
        ...props.children.props,
        id,
        name,
        error: Boolean(error),
      })
    : props.children;

  return (
    <div className={css.join(' ')}>
      {props.label && (
        <label htmlFor={id} className={styles.label}>
          {props.label}
        </label>
      )}
      <div className={styles.childrenContainer}>
        {cloned}

        {error && <p className={styles.errorText}>{error}</p>}
      </div>
    </div>
  );
}

export default FormField;
