import styles from './cardList.module.scss';

interface ICardListProps<T> {
  cards: T[];
  renderCard: (card: T) => React.ReactNode;
  className?: string;
  displayType?: 'wrap' | 'fullWith';
}

function CardList<T extends IId>({
  cards,
  renderCard,
  className,
  displayType = 'fullWith',
}: ICardListProps<T>) {
  const css = [styles.cardList];
  className && css.push(className);

  const cardCss = [styles.card];
  cardCss.push(displayType === 'wrap' ? styles.wrap : styles.fullWidth);

  return (
    <div className={css.join(' ')}>
      {cards?.map((m) => (
        <div key={m.id} className={cardCss.join(' ')}>
          {renderCard(m)}
        </div>
      ))}
    </div>
  );
}

export default CardList;
