type NavigationElementType = {
  label: string;
  url: string | null;
  isSubElement?: boolean;
  childs?: NavigationElementsType;
};

type NavigationElementsType = NavigationElementType[];
