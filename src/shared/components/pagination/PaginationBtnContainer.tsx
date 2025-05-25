import PaginationBtn from './PaginationBtn';

interface IPaginationBtnContainerProps {
  onPageChange: (page: number) => void;
  cPage: number;
  tPages: number;
}

function PaginationBtnContainer({
  onPageChange,
  cPage,
  tPages,
}: IPaginationBtnContainerProps) {
  const ffDisabled = tPages <= 5 || cPage - 2 > 1;
  const fDisabled = cPage === 1;
  const nDisabled = cPage + 1 === tPages;
  const nnDisabled = tPages <= 5 || cPage + 2 < tPages;

  let buttons: number[] = [];

  const fillButtons = (start: number, round: number) => {
    let c = start;
    while (c <= round) {
      buttons.push(c);
      c++;
    }
  };

  if (tPages <= 5) {
    fillButtons(1, tPages);
  } else {
    if (cPage - 2 < 1) {
      fillButtons(1, 5);
    } else {
      fillButtons(cPage - 2, cPage + 2);
    }
  }

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
      {buttons.map((m) => (
        <PaginationBtn
          key={m}
          onClick={onPageChange}
          value={m}
          selected={cPage === m}
        />
      ))}
      <PaginationBtn
        display=">"
        value={1}
        onClick={onPageChange}
        disabled={nDisabled}
      />
      <PaginationBtn
        display=">>"
        value={tPages}
        onClick={onPageChange}
        disabled={nnDisabled}
      />
    </div>
  );
}

export default PaginationBtnContainer;
