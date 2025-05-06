import { HTMLAttributes } from 'react';
import Button from '../ui/button/Button';

interface IActionCellButton extends HTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
}
function ActionCellButton({ label, onClick }: IActionCellButton) {
  return (
    <td>
      <Button variant="primary" onClick={onClick}>
        {label}
      </Button>
    </td>
  );
}

export default ActionCellButton;
