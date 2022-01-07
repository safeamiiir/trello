import { useState } from 'react';
import styled from 'styled-components';

import { RemoveIcon } from 'assets/icons/RemoveIcon';

import { itemStatesTypes, ListInterface } from 'types/type';
import { itemStates } from 'constants/constants';
import { ConstantTexts } from 'constants/en';

interface TypeTitleListInterface {
  setListStep: (step: itemStatesTypes) => void;
  addNewList: (list: ListInterface) => void;
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

    /* Icon container */
    > :last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${({ theme }) => theme.spacing[4]};
      height: ${({ theme }) => theme.spacing[4]};
      margin-left: ${({ theme }) => theme.spacing[1]};
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

function TypeTitleList({ setListStep, addNewList }: TypeTitleListInterface) {
  const [list, setList] = useState<ListInterface>();

  return (
    <Container>
      <input
        autoFocus
        placeholder={ConstantTexts.list_input_placeholder}
        onChange={(e) =>
          setList({ id: `id-${new Date().getTime()}`, title: e.target.value })
        }
      />
      <span>
        <AddButton
          onClick={() => {
            if (list) {
              addNewList(list);
              setListStep(itemStates.NO_TITLE);
            }
          }}
        >
          {ConstantTexts.add_list_button}
        </AddButton>
        <div onClick={() => setListStep(itemStates.NO_TITLE)}>
          <RemoveIcon />
        </div>
      </span>
    </Container>
  );
}

export default TypeTitleList;
