import { useState } from 'react';
import styled from 'styled-components';

import HasTitleList from 'components/List/HasTitleList';
import Card from 'components/Card';
import TypeTitleCard from 'components/Card/TypeTitleCard';
import NoTitleCard from 'components/Card/NoTitleCard';

import { itemStates } from 'constants/constants';
import {
  CardInterface,
  itemStatesTypes,
  ListInterface,
  moveDirectionsTypes,
} from 'types/type';

interface ListComponentInterface {
  list: ListInterface;
  addNewCard: (card: CardInterface) => void;
  cards: CardInterface[] | undefined;
  archiveList: (list: ListInterface) => void;
  archiveCard: (card: CardInterface) => void;
  handleEditListTitle: (list: ListInterface) => void;
  handleEditCardTitle: (card: CardInterface) => void;
  moveCard: (card: CardInterface, direction: moveDirectionsTypes) => void;
}

const Container = styled.div`
  margin: ${({ theme }) => theme.spacing[1]};
`;

function List({
  list,
  addNewCard,
  cards,
  archiveList,
  archiveCard,
  handleEditListTitle,
  handleEditCardTitle,
  moveCard,
}: ListComponentInterface) {
  const [cardStep, setCardStep] = useState<itemStatesTypes>(
    itemStates.NO_TITLE
  );

  console.log(`cards`, cards);

  return (
    <Container>
      {/* List title  */}
      <HasTitleList
        list={list}
        archiveList={archiveList}
        handleEditListTitle={handleEditListTitle}
      />

      {/* Cards */}
      {cards &&
        cards
          .filter((item) => !item.archived && item.list === list.id)
          .map((card) => (
            <Card
              key={card.id}
              card={card}
              archiveCard={archiveCard}
              handleEditCardTitle={handleEditCardTitle}
              moveCard={moveCard}
            />
          ))}

      {/* Add new Card  */}
      {cardStep === itemStates.NO_TITLE ? (
        <NoTitleCard setCardStep={setCardStep} />
      ) : cardStep === itemStates.TYPE_TITLE ? (
        <TypeTitleCard
          list={list}
          addNewCard={addNewCard}
          setCardStep={setCardStep}
        />
      ) : null}
    </Container>
  );
}

export default List;
