import styled from 'styled-components';

import { ConstantTexts } from 'constants/en';

const Container = styled.header`
  font-size: ${({ theme }) => theme.fontSizes.large};
  width: 100%;
  height: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => `${theme.spacing[1]}`};
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_dark};
`;

function Header() {
  return <Container>{ConstantTexts.project_title}</Container>;
}

export default Header;
