'use client';

import React from 'react';

import useCssArray from '@/shared/hooks/useCssArray';
import useSafeFormContext from '../../form/hookForm/useSafeFormContext';
import styles from './formField.module.scss';

interface IFormFieldProps {
  label?: string;
  name: string;
  children: React.ReactElement<Partial<IFormElementType>>;
  className?: string;
  labelPosition?: PositionType;
  childAlign?: 'center' | 'left';
}

function FormField(props: IFormFieldProps) {
  const form = useSafeFormContext();
  const { labelPosition = 'top', name } = props;
  const id = `field-${name}`;
  const error = form?.errors?.[name]?.message as string | undefined;
  const css = useCssArray({
    cssArray: [
      styles.formField,
      styles[labelPosition],
      error && styles.error,
      props.className,
    ],
  });
  const cssChild = useCssArray({
    cssArray: [
      styles.childrenContainer,
      props.childAlign === 'left' ? styles.alignLeft : undefined,
    ],
  });

  const cloned = React.isValidElement(props.children)
    ? React.cloneElement(props.children, {
        ...props.children.props,
        id,
        name,
        error: Boolean(error),
      })
    : props.children;

  return (
    <div className={css}>
      {props.label && (
        <label htmlFor={id} className={styles.label}>
          {props.label}
        </label>
      )}
      <div className={cssChild}>
        {cloned}
        {error && <p className={styles.errorText}>{error}</p>}
      </div>
    </div>
  );
}

export default FormField;
