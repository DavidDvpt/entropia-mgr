import { cloneElement, isValidElement } from 'react';
import { useFormContext } from 'react-hook-form';

import { mergeRefs } from '@/lib/RHFutils';
import styles from './formField.module.scss';

interface IFormFieldProps extends IChildren {
  label?: string;
  name: string;
  className?: string;
  children: AllowedElements & React.RefAttributes<AllowedElements>;
  labelPosition?: PositionType;
}

const FormField = (props: IFormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { labelPosition = 'top', name } = props;

  const id = `field-${name}`;
  const error = errors[name]?.message as string;

  const css = [styles.formField, styles[labelPosition], props.className];

  const { ref, ...rest } = register(name);

  const mergedRef = mergeRefs(ref, props.children.ref);
  const registeredChild = isValidElement(props.children)
    ? cloneElement(props.children, {
        ...rest,
        ref: mergedRef,
        id: name,
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
        {registeredChild}

        {error && <p className={styles.errorText}>{error}</p>}
      </div>
    </div>
  );
};

export default FormField;
