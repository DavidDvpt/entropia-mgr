import GenericBackgroundModal from './GenericBackgroundModal';
import GenericModal from './GenericModal';

function GenericModalComponent({ children }: IChildren) {
  return (
    <GenericBackgroundModal>
      <GenericModal>{children}</GenericModal>
    </GenericBackgroundModal>
  );
}

export default GenericModalComponent;
