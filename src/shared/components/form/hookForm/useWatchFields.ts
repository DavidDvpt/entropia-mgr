import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';

interface Props {
  control: any;
  errorState: ErrorStatesType | null;
  onFieldChange: (fieldName: string, value: any) => void;
}

const useWatchFields = ({ errorState, onFieldChange, control }: Props) => {
  // Récupère les noms des champs à surveiller
  const fieldNames = errorState?.map((e) => e.key);

  // Utilise useWatch pour surveiller tous ces champs
  const watchedValues = useWatch({
    control,
    name: fieldNames ?? [],
  });

  useEffect(() => {
    if (fieldNames) {
      watchedValues.forEach((value, index) => {
        const fieldName = fieldNames[index];
        onFieldChange(fieldName, value);
      });
    }
  }, [watchedValues.join('|')]); // join pour forcer le re-render si une valeur change
};

export default useWatchFields;
