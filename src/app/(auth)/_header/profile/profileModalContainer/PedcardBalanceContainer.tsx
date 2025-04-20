import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';

import postPedcardOperationThunk from '@/modules/userDatas/services/postPedcardOperationThunk';
import { getUserDatasState } from '@/modules/userDatas/userDatasSlice';
import FieldSet from '@/shared/components/form/FieldSet';
import Input from '@/shared/components/form/Input';
import LabelForm from '@/shared/components/form/LabelForm';
import { FormEvent, useState } from 'react';
import styles from './profileModalContainer.module.scss';

function PedcardBalanceContainer() {
  const { pedCard } = useAppSelector(getUserDatasState);
  const [value, setValue] = useState<string>(pedCard.result.toFixed(2));
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const diff = parseFloat(value) - pedCard.result;

    dispatch(postPedcardOperationThunk({ sold: diff }));
  };

  return (
    <div className={styles.pedCardBalanceContainer}>
      <p className={styles.currentValue}>
        montant actuel mémorisé: <span>{pedCard.result.toFixed(2)}</span> peds
      </p>

      <form onSubmit={handleSubmit}>
        <LabelForm
          label='Valeur réelle'
          formComponentRender={
            <FieldSet
              name='pedCardValue'
              formComponent={
                <Input
                  value={value}
                  onInputChange={(e) => setValue(e.target.value)}
                  selectOnFocus
                />
              }
            />
          }
        />

        <div className={styles.buttonContainer}>
          <button type='submit' className='info'>
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
}

export default PedcardBalanceContainer;
