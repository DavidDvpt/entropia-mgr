import PaginationBtn from './PaginationBtn';

interface IPaginationBtnContainerProps {
  onPageChange: (page: number) => void;
  cPage: number;
  totalPages: number;
}
function PaginationBtnContainer({
  onPageChange,
  cPage,
  totalPages,
}: IPaginationBtnContainerProps) {
  const ffDisabled = totalPages <= 5 || cPage - 2 > 1;
  const fDisabled = cPage === 1;
  const nDisabled = cPage + 1 === totalPages;
  const nnDisabled = totalPages <= 5 || cPage + 2 < totalPages;

  return (
    <div>
      <PaginationBtn
        display="<<"
        value={1}
        onClick={onPageChange}
        disabled={ffDisabled}
      />
      <PaginationBtn
        display="<"
        value={1}
        onClick={onPageChange}
        disabled={fDisabled}
      />
      <PaginationBtn
        display=">"
        value={1}
        onClick={onPageChange}
        disabled={nDisabled}
      />
      <PaginationBtn
        display=">>"
        value={totalPages}
        onClick={onPageChange}
        disabled={nnDisabled}
      />
    </div>
  );
}

export default PaginationBtnContainer;
