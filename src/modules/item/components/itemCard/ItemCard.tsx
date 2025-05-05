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
      <h4>{item.name}</h4>
      <p>
        Valeur : <span>{item.value + ' ped(s)'}</span>
      </p>
      <p>
        Actif : <span>{item.isActive ? 'Oui' : 'Non'}</span>
      </p>
      <p>
        limited : <span>{item.isLimited ? 'Oui' : 'Non'}</span>
      </p>
      {item.itemType && (
        <p>
          Type : <span>{item.itemType?.name}</span>
        </p>
      )}
    </div>
  );
}

export default ItemCard;
