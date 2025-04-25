import styles from './session.module.scss';

interface ISectionProps extends IChildren {
  variant?: VariantType;
  className?: string;
}

function Section(props: ISectionProps) {
  const css = [styles.section];

  props.variant && css.push(styles[props.variant]);
  props.className && css.push(props.className);

  return <section className={css.join(' ')}>{props.children}</section>;
}

export default Section;
