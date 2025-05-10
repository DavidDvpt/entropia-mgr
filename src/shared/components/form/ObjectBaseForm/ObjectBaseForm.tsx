import Checkbox from '../../ui/checkbox/Checkbox';
import FormField from '../../ui/formField/FormField';
import Input from '../../ui/input/Input';

function ObjectBaseForm() {
  return (
    <>
      <FormField name="name" label="Nom de catégorie">
        <Input />
      </FormField>
      <FormField
        name="isActive"
        label="Actif"
        labelPosition="left"
        childAlign="left"
      >
        <Checkbox />
      </FormField>
    </>
  );
}

export default ObjectBaseForm;
