'use client';

import { sellBuyContext } from '@/app/(auth)/transaction/layout';
import ItemCategorySelect from '@/modules/itemCategory/components/itemCategorySelect/ItemCategorySelect';
import CardList from '@/shared/components/cardList/CardList';
import Section from '@/shared/components/ui/section/Section';
import { useGenericStateContext } from '@/shared/contexts/GenericContext';
import ItemCard from '../item/components/itemCard/ItemCard';
import ItemSelect from '../item/components/itemSelect/ItemSelect';
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
      <h1>Choix d'un item</h1>

      <div className={styles.selectContainer}>
        <ItemCategorySelect
          onChange={(e) => handleChange('itemCategory', e)}
          value={ctxState.itemCategory?.id}
        />
        <ItemTypeSelect
          onChange={(e) => handleChange('itemType', e)}
          itemCategoryId={ctxState.itemCategory?.id}
          value={ctxState.itemType?.id}
        />
        <ItemSelect
          onChange={(e) => handleChange('item', e)}
          itemTypeId={ctxState.itemType?.id}
          value={ctxState.item?.id}
        />
      </div>

      <div className={styles.itemDetail}>
        {ctxState.item && (
          <CardList
            cards={[ctxState.item]}
            renderCard={(card) => (
              <ItemCard item={card} className={styles.cardDetail} />
            )}
            className={styles.itemDetail}
          />
        )}
      </div>
    </Section>
  );
}

export default SearchItemEngine;
