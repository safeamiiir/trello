import { useState } from 'react';
import styled from 'styled-components';

import { DownArrowIcon } from 'assets/icons/DownArrowIcon';
import { LeftArrowIcon } from 'assets/icons/LeftArrowIcon';
import { RightArrowIcon } from 'assets/icons/RightArrowIcon';
import { TrashIcon } from 'assets/icons/TrashIcon';
import { UpArrowIcon } from 'assets/icons/UpArrowIcon';

import { moveDirections } from 'constants/constants';
import { ConstantTexts } from 'constants/en';
import { CardInterface, moveDirectionsTypes } from 'types/type';

interface HasTitleCardInterface {
  card: CardInterface;
  archiveCard: (card: CardInterface) => void;
  handleEditCardTitle: (card: CardInterface) => void;
  moveCard: (card: CardInterface, direction: moveDirectionsTypes) => void;
}

const Container = styled.div`
  position: relative;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[2]};
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  /* card title */
  > :first-child {
    max-width: 240px;
    flex: 1;
    padding: ${({ theme }) => theme.spacing[1]};
    font-size: ${({ theme }) => theme.fontSizes.default};
  }

  /* Icon container */
  > :last-child {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.spacing[4]};
    height: ${({ theme }) => theme.spacing[4]};
    border-radius: 100%;
    transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);
    &:hover {
      transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);
      background-color: ${({ theme }) => theme.colors.gray_light};
    }
  }
`;
const Up = styled(UpArrowIcon)`
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
  padding: ${({ theme }) => `${theme.spacing[0]} 0`};
  border-radius:${({ theme }) => `${theme.spacing[0]} ${theme.spacing[0]} 0 0`};
  transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);

  &:hover {
    cursor: pointer
    transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);
    background-color: ${({ theme }) => theme.colors.gray_light};
  }
`;
const Right = styled(RightArrowIcon)`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  padding: ${({ theme }) => `0 ${theme.spacing[0]}`};
  border-radius:${({ theme }) => `0 ${theme.spacing[0]} ${theme.spacing[0]} 0`};
  transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);

  &:hover {
    cursor: pointer
    transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);
    background-color: ${({ theme }) => theme.colors.gray_light};
  }
`;
const Down = styled(DownArrowIcon)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: ${({ theme }) => `${theme.spacing[0]} 0`};
  border-radius: ${({ theme }) =>
    `0 0 ${theme.spacing[0]} ${theme.spacing[0]}`};
  transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);

  &:hover {
    cursor: pointer
    transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);
    background-color: ${({ theme }) => theme.colors.gray_light};
  }
`;
const Left = styled(LeftArrowIcon)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: ${({ theme }) => `0 ${theme.spacing[0]}`};
  border-radius: ${({ theme }) =>
    `${theme.spacing[0]} 0 0 ${theme.spacing[0]}`};
  transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);

  &:hover {
    cursor: pointer
    transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);
    background-color: ${({ theme }) => theme.colors.gray_light};
  }
`;

function HasTitleCard({
  card,
  archiveCard,
  handleEditCardTitle,
  moveCard,
}: HasTitleCardInterface) {
  const [editTitle, setEditTitle] = useState(false);

  function changeTitle(newListTitle: string) {
    setEditTitle(false);
    handleEditCardTitle({ ...card, title: newListTitle });
  }
  return (
    <Container>
      <Up
        onClick={() => moveCard(card, moveDirections.UP as moveDirectionsTypes)}
      />
      <Left
        onClick={() =>
          moveCard(card, moveDirections.LEFT as moveDirectionsTypes)
        }
      />
      <Header>
        {editTitle ? (
          <input
            autoFocus
            defaultValue={card.title}
            onBlur={(e) => changeTitle(e.target.value)}
          />
        ) : (
          <div onClick={() => setEditTitle(true)}>{card.title}</div>
        )}
        <div
          onClick={() => {
            const res = window.confirm(ConstantTexts.card_remove_alert);
            if (res) {
              archiveCard(card);
            }
          }}
        >
          <TrashIcon />
        </div>
      </Header>
      <Right
        onClick={() =>
          moveCard(card, moveDirections.RIGHT as moveDirectionsTypes)
        }
      />
      <Down
        onClick={() =>
          moveCard(card, moveDirections.DOWN as moveDirectionsTypes)
        }
      />
    </Container>
  );
}

export default HasTitleCard;
