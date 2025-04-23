import styles from './button.module.scss';

interface IButtonProps extends IChildren {
  className?: string;
  variant?: VariantType;
}

function Button(props: IButtonProps) {
  const css = [styles.button];

  if (props.variant === 'primary') css.push(styles.primary);
  if (props.variant === 'warning') css.push(styles.warning);
  if (props.variant === 'error') css.push(styles.error);
  if (props.variant === 'success') css.push(styles.success);

  return <button className={css.join(' ')}>{props.children}</button>;
}

export default Button;
