import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import List from 'components/List';
import { CardInterface, ListInterface } from 'types/type';
import {
  addNewList,
  addNewCard,
  archiveList,
  archiveCard,
  handleEditListTitle,
  handleEditCardTitle,
  moveCard,
} from 'utilities/boardHelpers';
import Theme from 'theme';

const lists_template = [
  {
    id: 'id-l-1',
    title: 'list_1',
  },
  {
    id: 'id-l-2',
    title: 'list_2',
  },
];

const cards_template = [
  {
    id: 'id-c-1',
    title: 'card_1',
    list: 'id-l-1',
  },
  {
    id: 'id-c-2',
    title: 'card_2',
    list: 'id-l-1',
  },
  {
    id: 'id-c-3',
    title: 'card_3',
    list: 'id-l-1',
  },
  {
    id: 'id-c-4',
    title: 'card_1',
    list: 'id-l-2',
  },
];

const newList = {
  id: 'id-l-3',
  title: 'list_new',
};

const newCard = {
  id: 'id-c-5',
  title: 'card_new',
  list: 'list_1',
};

function Board() {
  const [lists, setLists] = useState<ListInterface[]>(lists_template);
  const [cards, setCards] = useState<CardInterface[]>(cards_template);

  return (
    <div>
      {lists
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
      <button onClick={() => addNewList(newList, lists, setLists)}>
        add-list
      </button>
      <button onClick={() => addNewCard(newCard, lists, setLists)}>
        add-card
      </button>
      <button onClick={() => archiveList(lists_template[1], lists, setLists)}>
        {/* archive list 2 */}
        archive-list
      </button>
      <button onClick={() => archiveCard(cards_template[2], cards, setCards)}>
        {/* archive card_3 */}
        archive-card
      </button>
    </div>
  );
}

test('render Board with prepared data', () => {
  render(
    <Theme>
      <Board />
    </Theme>
  );
  // should have the lists
  const list_title_1 = screen.getByText('list_1');
  expect(list_title_1).toBeInTheDocument();

  // should have the cards
  const card_title_2 = screen.getByText('card_2');
  expect(card_title_2).toBeInTheDocument();
});

test('add new list to the Board', () => {
  render(
    <Theme>
      <Board />
    </Theme>
  );
  const add_list_button = screen.getByText('add-list');
  fireEvent(
    add_list_button,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const card_title_new = screen.getByText('list_new');
  expect(card_title_new).toBeInTheDocument();
});

test('add new card to the list', () => {
  render(
    <Theme>
      <Board />
    </Theme>
  );
  const add_card_button = screen.getByText('add-card');
  fireEvent(
    add_card_button,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const card_title_new = screen.getByText('card_new');
  expect(card_title_new).toBeInTheDocument();
});

test('archive a list from board', () => {
  render(
    <Theme>
      <Board />
    </Theme>
  );
  const archive_list = screen.getByText('archive-list');
  fireEvent(
    archive_list,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const archived_list = screen.queryByText('list_2');
  expect(archived_list).toBeNull();
});

test('archive a card from list', () => {
  render(
    <Theme>
      <Board />
    </Theme>
  );
  const archive_card = screen.getByText('archive-card');
  fireEvent(
    archive_card,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const archived_card = screen.queryByText('card_3');
  expect(archived_card).toBeNull();
});
