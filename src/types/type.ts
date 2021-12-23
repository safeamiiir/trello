import { itemStates, moveDirections } from 'constants/constants';

export interface ListInterface {
  id: string;
  title: string;
  archived?: boolean;
}
export interface CardInterface extends ListInterface {
  list?: string;
}

export type SetListsType = (lists: ListInterface[]) => void;

export type SetCardsType = (cards: CardInterface[]) => void;

export type moveDirectionsTypes = keyof typeof moveDirections;

export type itemStatesTypes = keyof typeof itemStates;
