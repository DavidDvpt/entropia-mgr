import GenericBackgroundModal from './GenericBackgroundModal';
import GenericModal from './GenericModal';

interface IGenericModalComponentProps extends IChildren {
  title?: string;
}

function GenericModalComponent({
  title,
  children,
}: IGenericModalComponentProps) {
  return (
    <GenericBackgroundModal>
      <GenericModal>
        {title && <h1>{title}</h1>}
        {children}
      </GenericModal>
    </GenericBackgroundModal>
  );
}

export default GenericModalComponent;
