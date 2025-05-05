import Image from 'next/image';
import styles from './itemCard.module.scss';

const IMG_URL = process.env.NEXT_PUBLIC_ENTROPEDIA_IMG_BASE_URL;

interface IItemCardProps {
  item: IAppItem;
  className?: string;
}
function ItemCard({ item, className }: IItemCardProps) {
  const css = [styles.itemCard];
  className && css.push(className);

  return (
    <div className={css.join(' ')}>
      <div className={styles.imageContainer}>
        <Image
          src={`${IMG_URL}${item?.imgUrlId}Original.png`}
          alt="ressource"
          objectFit="contain"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.cardContent}>
        <h4>{item.name}</h4>
        <div className={styles.cardContentBody}>
          <div className={styles.bloc}>
            <p>
              Valeur: <span>{item.value + ' ped(s)'}</span>
            </p>
            <p>
              Actif: <span>{item.isActive ? 'Oui' : 'Non'}</span>
            </p>
          </div>
          <div className={styles.rightBloc}>
            <p>
              limited: <span>{item.isLimited ? 'Oui' : 'Non'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
