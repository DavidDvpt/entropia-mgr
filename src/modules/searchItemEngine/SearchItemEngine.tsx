'use client';

import { sellBuyContext } from '@/app/(auth)/transaction/layout';
import ItemCategorySelect from '@/modules/itemCategory/components/ItemCategorySelect';
import CardList from '@/shared/components/cardList/CardList';
import Section from '@/shared/components/ui/section/Section';
import { useGenericStateContext } from '@/shared/contexts/GenericContext';
import ItemCard from '../item/components/itemCard/ItemCard';
import ItemSelect from '../item/components/ItemSelect';
import ItemTypeSelect from '../itemType/components/ItemTypeSelect';
import styles from './searchItemEngine.module.scss';
interface ISearchItemEnginePrps {
  className?: string;
}
function SearchItemEngine({ className }: ISearchItemEnginePrps) {
  const { ctxState, setCtxState } = useGenericStateContext(sellBuyContext);

  const css = [styles.searchItemEngine];
  className && css.push(className);

  const handleChange = (key: string, value: IObjectBase) => {
    const v = { ...ctxState };
    switch (key) {
      case 'itemCategory':
        v.itemCategory = value as IAppItemCategory;
        v.itemType = null;
        v.item = null;
        break;
      case 'itemType':
        v.itemType = value as IAppItemType;
        v.item = null;
        break;
      case 'item':
        v.item = value as IAppItem;
        break;
      default:
        break;
    }
    setCtxState(v);
  };

  return (
    <Section className={css.join(' ')}>
      <h1>Choix d'un item</h1>

      <div className={styles.selectContainer}>
        <ItemCategorySelect
          onChange={(e) => handleChange('itemCategory', e)}
          value={ctxState.itemCategory?.id}
          className={styles.selects}
        />
        <ItemTypeSelect
          onChange={(e) => handleChange('itemType', e)}
          itemCategoryId={ctxState.itemCategory?.id}
          value={ctxState.itemType?.id}
          className={styles.selects}
        />
        <ItemSelect
          onChange={(e) => handleChange('item', e)}
          itemTypeId={ctxState.itemType?.id}
          value={ctxState.item?.id}
          className={styles.selects}
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
