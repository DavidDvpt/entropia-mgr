import React from 'react';
import styles from './button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
}

function Button(props: IButtonProps) {
  const css = [styles.button];
  props.variant && css.push(styles[props.variant]);
  props.className && css.push(props.className);

  return <button className={css.join(' ')}>{props.children}</button>;
}

export default Button;
