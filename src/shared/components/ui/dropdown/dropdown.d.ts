type DropDownElementType = {
  label: string;
  url: string | null;
  childs?: DropDownElementsType;
};

type DropDownElementsType = DropDownElementType[];
