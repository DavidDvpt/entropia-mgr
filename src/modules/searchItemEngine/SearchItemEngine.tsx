import ItemCategorySelect from '@/modules/itemCategory/components/itemCategorySelect/ItemCategorySelect';
import Section from '@/shared/components/ui/section/Section';
import ItemTypeSelect from '../itemType/components/itemTypeSelect/ItemTypeSelect';
import styles from './searchItemEngine.module.scss';
interface ISearchItemEnginePrps {
  className?: string;
}
function SearchItemEngine({ className }: ISearchItemEnginePrps) {
  const css = [styles.searchItemEngine];
  className && css.push(className);

  return (
    <Section className={css.join(' ')}>
      <ItemCategorySelect />
      <ItemTypeSelect />
    </Section>
  );
}

export default SearchItemEngine;
