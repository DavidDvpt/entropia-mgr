type DropDownElementType = {
  label: string;
  url: string | null;
  isSubElement?: boolean;
  childs?: DropDownElementsType;
};

type DropDownElementsType = DropDownElementType[];
