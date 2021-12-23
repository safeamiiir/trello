import { CardInterface, ListInterface, moveDirectionsTypes } from 'types/type';
import { moveDirections } from 'constants/constants';

type SetListsType = (lists: ListInterface[]) => void;
type SetCardsType = (cards: CardInterface[]) => void;

export function addNewList(
  newList: ListInterface,
  lists: ListInterface[] | undefined,
  setLists: SetListsType
): ListInterface[] | undefined {
  if (!newList.title.trim()) return;
  if (lists) {
    setLists([...lists, newList]);
  } else {
    setLists([newList]);
  }
}

export function addNewCard(
  newCard: CardInterface,
  cards: CardInterface[] | undefined,
  setCards: SetCardsType
): CardInterface[] | undefined {
  if (!newCard.title.trim()) return;
  if (cards) {
    setCards([...cards, newCard]);
  } else {
    setCards([newCard]);
  }
}

export function archiveList(
  newList: ListInterface,
  lists: ListInterface[] | undefined,
  setLists: SetListsType
): ListInterface[] | undefined {
  if (!lists) return;

  const newLists = lists.map((list) => {
    if (list.id === newList.id) {
      return { ...list, archived: true };
    }
    return list;
  });
  setLists(newLists);
}

export function archiveCard(
  newCard: CardInterface,
  cards: CardInterface[] | undefined,
  setCards: SetCardsType
): CardInterface[] | undefined {
  if (!cards) return;

  const newCards = cards.map((card) => {
    if (card.id === newCard.id) {
      return { ...newCard, archived: true };
    }
    return card;
  });
  setCards(newCards);
}

export function handleEditListTitle(
  newList: ListInterface,
  lists: ListInterface[] | undefined,
  setLists: SetListsType
): ListInterface[] | undefined {
  if (!lists) return;

  if (!newList.title.trim()) return;
  const newLists = lists.map((list) => {
    if (list.id === newList.id) {
      return { ...newList };
    }
    return list;
  });
  setLists(newLists);
}

export function handleEditCardTitle(
  newCard: CardInterface,
  cards: CardInterface[] | undefined,
  setCards: SetCardsType
): CardInterface[] | undefined {
  if (!cards) return;

  if (!newCard.title.trim()) return;
  const newCards = cards?.map((card) => {
    if (card.id === newCard.id) {
      return { ...newCard };
    }
    return card;
  });
  setCards(newCards);
}

export function swipeItemsInCards(
  index1: number,
  index2: number,
  array: CardInterface[]
): CardInterface[] {
  const newArray = array.slice(0);
  const temp = newArray[index1];
  newArray[index1] = newArray[index2];
  newArray[index2] = temp;
  return newArray;
}

export function moveCard(
  card: CardInterface,
  direction: moveDirectionsTypes,
  lists: ListInterface[] | undefined,
  cards: CardInterface[] | undefined,
  setCards: SetCardsType
): CardInterface[] | undefined {
  if (!cards) return;

  const sameListCards = cards!.filter(
    (item) => !item.archived && item.list === card.list
  );

  const cardLocalIndex = sameListCards!.findIndex(
    (item) => item.id === card.id
  );
  const cardIndex = cards!.findIndex((item) => item.id === card.id);
  const listIndex = lists!.findIndex((item) => item.id === card.list);

  const hasTop = cardLocalIndex > 0;
  const hasBottom = cardLocalIndex < sameListCards!.length - 1;
  const hasLeft = listIndex > 0;
  const hasRight = listIndex < lists!.length - 1;
  if (direction === moveDirections.UP && hasTop) {
    const lasItemIndex = cards!.findIndex(
      (item) => item.id === sameListCards[cardLocalIndex - 1].id
    );
    if (!cards) return;
    const newCards = swipeItemsInCards(cardIndex, lasItemIndex, cards);
    setCards(newCards);
  }

  if (direction === moveDirections.DOWN && hasBottom) {
    const nextItemIndex = cards!.findIndex(
      (item) => item.id === sameListCards[cardLocalIndex + 1].id
    );
    if (!cards) return;
    const newCards = swipeItemsInCards(cardIndex, nextItemIndex, cards);
    setCards(newCards);
  }

  if (direction === moveDirections.RIGHT && hasRight) {
    const newCards = cards?.map((item) => {
      if (item.id === card.id) {
        return { ...card, list: lists![listIndex + 1].id };
      }
      return item;
    });
    setCards(newCards);
  }

  if (direction === moveDirections.LEFT && hasLeft) {
    const newCards = cards?.map((item) => {
      if (item.id === card.id) {
        return { ...card, list: lists![listIndex - 1].id };
      }
      return item;
    });
    setCards(newCards);
  }
}
export function handleClearStorage(storageName: string) {
  window.localStorage.removeItem(storageName);
}
