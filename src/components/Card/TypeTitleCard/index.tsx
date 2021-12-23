import { useState } from 'react';
import styled from 'styled-components';

import { RemoveIcon } from 'assets/icons/RemoveIcon';

import { itemStates } from 'constants/constants';
import { CardInterface, itemStatesTypes, ListInterface } from 'types/type';
import { ConstantTexts } from 'constants/en';

interface TypeTitleListInterface {
  list: ListInterface;
  addNewCard: (card: CardInterface) => void;
  setCardStep: (step: itemStatesTypes) => void;
}

const Container = styled.div`
  width: 264px;
  height: ${({ theme }) => theme.spacing[10]};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[0]};
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  > input {
    height: ${({ theme }) => theme.spacing[4]};
  }

  > :last-child {
    display: flex;
    align-items: center;

    /* remove Icon container */
    > :last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${({ theme }) => theme.spacing[4]};
      height: ${({ theme }) => theme.spacing[4]};
      margin-left: ${({ theme }) => theme.spacing[1]};

      /* remove Icon */
      svg {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
const AddButton = styled.button`
  height: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[0]};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

function TypeTitleList({
  list,
  addNewCard,
  setCardStep,
}: TypeTitleListInterface) {
  const [card, setCard] = useState<CardInterface>();

  return (
    <Container>
      <input
        autoFocus
        placeholder={ConstantTexts.card_input_placeholder}
        onChange={(e) =>
          setCard({
            id: `id-${new Date().getTime()}`,
            title: e.target.value,
            list: list.id,
          })
        }
      />
      <span>
        <AddButton
          onClick={() => {
            if (card) {
              addNewCard(card);
              setCardStep(itemStates.NO_TITLE as itemStatesTypes);
            }
          }}
        >
          {ConstantTexts.add_card_button}
        </AddButton>
        <div
          onClick={() => setCardStep(itemStates.NO_TITLE as itemStatesTypes)}
        >
          <RemoveIcon />
        </div>
      </span>
    </Container>
  );
}

export default TypeTitleList;
