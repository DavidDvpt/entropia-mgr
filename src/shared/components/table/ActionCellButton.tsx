import { HTMLAttributes } from 'react';
import Button from '../ui/button/Button';
import styles from './table.module.scss';
interface IActionCellButton extends HTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
}
function ActionCellButton({ label, onClick }: IActionCellButton) {
  return (
    <td className={styles.actionCellButton}>
      <Button variant="primary" onClick={onClick} className={styles.cellButton}>
        {label}
      </Button>
    </td>
  );
}

export default ActionCellButton;
