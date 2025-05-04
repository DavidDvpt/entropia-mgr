'use client';

import { sellBuyContext } from '@/app/(auth)/transaction/layout';
import ItemCategorySelect from '@/modules/itemCategory/components/itemCategorySelect/ItemCategorySelect';
import { useGenericStateContext } from '@/shared/components/GenericContext';
import Section from '@/shared/components/ui/section/Section';
import ItemTypeSelect from '../itemType/components/itemTypeSelect/ItemTypeSelect';
import styles from './searchItemEngine.module.scss';
interface ISearchItemEnginePrps {
  className?: string;
}
function SearchItemEngine({ className }: ISearchItemEnginePrps) {
  const { ctxState, setCtxState } = useGenericStateContext(sellBuyContext);
  const css = [styles.searchItemEngine];
  className && css.push(className);

  const handleChange = (key: string, value: IObjectBase) => {
    setCtxState({ ...ctxState, [key]: value });
  };

  return (
    <Section className={css.join(' ')}>
      <ItemCategorySelect onChange={(e) => handleChange('itemCategory', e)} />
      <ItemTypeSelect
        onChange={(e) => handleChange('itemType', e)}
        itemCategoryId={ctxState.itemCategory?.id}
      />
    </Section>
  );
}

export default SearchItemEngine;
