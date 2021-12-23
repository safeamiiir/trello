import styled from 'styled-components';

import HasTitleCard from 'components/Card/HasTitleCard';
import { CardInterface, moveDirectionsTypes } from 'types/type';

interface CardComponentInterface {
  card: CardInterface;
  archiveCard: (card: CardInterface) => void;
  handleEditCardTitle: (card: CardInterface) => void;
  moveCard: (card: CardInterface, direction: moveDirectionsTypes) => void;
}

const Container = styled.div`
  margin: ${({ theme }) => `${theme.spacing[0]} 0`};
`;

function Card({
  card,
  archiveCard,
  handleEditCardTitle,
  moveCard,
}: CardComponentInterface) {
  return (
    <Container>
      <HasTitleCard
        card={card}
        archiveCard={archiveCard}
        handleEditCardTitle={handleEditCardTitle}
        moveCard={moveCard}
      />
    </Container>
  );
}

export default Card;
