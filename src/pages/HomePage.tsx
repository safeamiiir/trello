import styled from 'styled-components';

import Board from 'components/Board';
import Header from 'components/Header';

const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

function HomePage() {
  return (
    <Container>
      <Header />
      <Board />
    </Container>
  );
}

export default HomePage;
