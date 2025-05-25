interface IPaginationBtnProps {
  display?: string;
  value: number;
  disabled?: boolean;
  onClick: (value: number) => void;
}
function PaginationBtn({
  display,
  value,
  disabled,
  onClick,
}: IPaginationBtnProps) {
  return (
    <button disabled={disabled} onClick={() => onClick(value)}>
      {display ?? value}
    </button>
  );
}

export default PaginationBtn;
