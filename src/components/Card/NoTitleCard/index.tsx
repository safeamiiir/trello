import styled from 'styled-components';

import { AddIcon } from 'assets/icons/AddIcon';

import { itemStates } from 'constants/constants';
import { ConstantTexts } from 'constants/en';
import { itemStatesTypes } from 'types/type';

interface NoTitleCardInterface {
  setCardStep: (step: itemStatesTypes) => void;
}

const Container = styled.div`
  width: 264px;
  height: ${({ theme }) => theme.spacing[4]};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[1]};
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  border-radius: ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[0]};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.body};
  cursor: pointer;

  /* plus icon */
  > :first-child {
    fill: ${({ theme }) => theme.colors.white};
    margin: ${({ theme }) => `0 ${theme.spacing[1]}`};
  }

  &:hover {
    transition: all 100ms cubic-bezier(0.47, 0, 0.75, 0.72);
    background-color: ${({ theme }) => theme.colors.gray_dark};
  }
`;

function NoTitleCard({ setCardStep }: NoTitleCardInterface) {
  return (
    <Container
      onClick={() => setCardStep(itemStates.TYPE_TITLE as itemStatesTypes)}
    >
      <AddIcon />
      <span>{ConstantTexts.card_input_title}</span>
    </Container>
  );
}

export default NoTitleCard;
