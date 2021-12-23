import { useState, useEffect } from 'react';
import styled from 'styled-components';

import List from 'components/List';
import TypeTitleList from 'components/List/TypeTitleList';
import NoTitleList from 'components/List/NoTitleList';

import { CardInterface, ListInterface } from 'types/type';
import { itemStates } from 'constants/constants';
import {
  addNewCard,
  addNewList,
  archiveList,
  archiveCard,
  handleEditListTitle,
  handleEditCardTitle,
  moveCard,
  handleClearStorage,
} from 'utilities/boardHelpers';

const Container = styled.main`
  width: 100%;
  overflow: auto;
  height: ${({ theme }) => `calc(100vh - ${theme.spacing[5]})`};
  display: flex;

  /*  Add new List or typing list name state */
  > :last-child {
    margin: ${({ theme }) => theme.spacing[1]};
  }
`;
const ClearIcon = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing[1]};
  right: ${({ theme }) => theme.spacing[1]};
`;

function Board() {
  const [listStep, setListStep] = useState(itemStates.NO_TITLE);
  const [lists, setLists] = useState<ListInterface[]>();
  const [cards, setCards] = useState<CardInterface[]>();

  useEffect(() => {
    const stored_lists = JSON.parse(
      JSON.stringify(window.localStorage.getItem('list-card'))
    );

    if (lists) {
      window.localStorage.setItem(
        'list-card',
        JSON.stringify({ saved_list: lists, saved_cards: cards })
      );
    }

    if (!lists && stored_lists) {
      const { saved_list, saved_cards } = JSON.parse(stored_lists);
      console.log(`saved_list`, saved_list);
      console.log(`saved_cards`, saved_cards);
      setLists(saved_list);
      setCards(saved_cards);
    }
  }, [cards, lists]);

  return (
    <Container>
      {/* lists  */}
      {lists &&
        lists
          .filter((list) => !list.archived)
          .map((list) => (
            <List
              key={list.id}
              addNewCard={(card) => addNewCard(card, cards, setCards)}
              list={list}
              archiveList={(list) => archiveList(list, lists, setLists)}
              cards={cards}
              archiveCard={(card) => archiveCard(card, cards, setCards)}
              handleEditListTitle={(list) =>
                handleEditListTitle(list, lists, setLists)
              }
              handleEditCardTitle={(card) =>
                handleEditCardTitle(card, cards, setCards)
              }
              moveCard={(card, direction) =>
                moveCard(card, direction, lists, cards, setCards)
              }
            />
          ))}

      {/* Clear button */}
      <ClearIcon>
        <button
          onClick={() => {
            setCards(undefined);
            setLists(undefined);
            handleClearStorage('list-card');
          }}
        >
          clear board
        </button>
      </ClearIcon>

      {/* Add new list  */}
      {listStep === itemStates.NO_TITLE ? (
        <NoTitleList setListStep={setListStep} />
      ) : listStep === itemStates.TYPE_TITLE ? (
        <TypeTitleList
          setListStep={setListStep}
          addNewList={(newList) => addNewList(newList, lists, setLists)}
        />
      ) : null}
    </Container>
  );
}

export default Board;
