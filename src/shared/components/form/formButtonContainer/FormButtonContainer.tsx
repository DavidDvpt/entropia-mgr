import Button from '../../ui/button/Button';
import styles from './formButtoncontainer.module.scss';

interface IFormButtonContainerProps {
  type: 'update' | 'create' | 'valid';
  noCancel?: boolean;
  onCancel?: () => void;
  onValid?: () => void;
  className?: string;
}
function FormButtonContainer(props: IFormButtonContainerProps) {
  const css = [styles.formButtonContainer];
  !props.noCancel && css.push(styles.singleBtn);
  props.className && css.push(props.className);

  return (
    <div className={css.join(' ')}>
      {!props.noCancel && (
        <Button variant="error" onClick={props.onCancel} type="reset">
          Annuler
        </Button>
      )}
      <Button variant="primary" type="submit" onClick={props.onValid}>
        {props.type === 'update' && 'Modifier'}
        {props.type === 'create' && 'Créer'}
        {props.type === 'valid' && 'Valider'}
      </Button>
    </div>
  );
}

export default FormButtonContainer;
