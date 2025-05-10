interface IUseCssArrayProps {
  cssArray: (string | undefined)[];
}
function useCssArray({ cssArray }: IUseCssArrayProps) {
  const finalCss: string[] = [];

  cssArray.forEach((e) => {
    if (e) finalCss.push(e);
  });

  return finalCss.join(' ');
}

export default useCssArray;
