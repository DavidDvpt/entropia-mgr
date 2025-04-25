import DropdownList from './DropdownList';

function DropdownElement(props: DropDownElementType) {
  return (
    <li>
      <p>{props.label}</p>
      {props.childs && <DropdownList list={props.childs} />}
    </li>
  );
}

export default DropdownElement;
