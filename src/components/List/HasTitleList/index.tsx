import { useState } from 'react';
import styled from 'styled-components';

import { TrashIcon } from 'assets/icons/TrashIcon';

import { ConstantTexts } from 'constants/en';
import { ListInterface } from 'types/type';

interface HasTitleListInterface {
  list: ListInterface;
  archiveList: (list: ListInterface) => void;
  handleEditListTitle: (list: ListInterface) => void;
}

const Container = styled.div`
  max-width: 263px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[0]};
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  background-color: ${({ theme }) => theme.colors.gray_light};
  color: ${({ theme }) => theme.colors.black};

  > input {
    margin: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[1]}`};
    padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[1]}`};
    border: none;
    border-radius: ${({ theme }) => theme.spacing[0]};
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* List title */
  > :first-child {
    flex: 1;
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
    font-size: ${({ theme }) => theme.fontSizes.large};
    max-width: 192px;
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
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

function HasTitleList({
  list,
  archiveList,
  handleEditListTitle,
}: HasTitleListInterface) {
  const [editTitle, setEditTitle] = useState(false);

  function changeTitle(newListTitle) {
    setEditTitle(false);
    handleEditListTitle({ ...list, title: newListTitle });
  }

  return (
    <Container>
      <Header>
        {editTitle ? (
          <input
            autoFocus
            defaultValue={list.title}
            onBlur={(e) => changeTitle(e.target.value)}
          />
        ) : (
          <div onClick={() => setEditTitle(true)}>{list.title}</div>
        )}
        <div
          onClick={() => {
            const res = window.confirm(ConstantTexts.list_remove_alert);
            if (res) {
              archiveList(list);
            }
          }}
        >
          <TrashIcon />
        </div>
      </Header>
    </Container>
  );
}

export default HasTitleList;
