import Column from '../Column/Column'
import { cardList } from '../../data.js';
import {StyledMain, Container, MainBlock, MainContent } from './Main.styled.js'

const STATUSES = {
  NO_STATUS: 'Без статуса',
  TODO: 'Нужно сделать',
  IN_PROGRESS: 'В работе',
  TESTING: 'Тестирование',
  DONE: 'Готово'
};

export default function Main() {
  const columns = Object.values(STATUSES).reduce((acc, status) => {
    acc[status] = cardList.filter(card => card.status === status);
    return acc;
  }, {});

  if (!cardList?.length) {
    return <div>Задачи не найдены</div>;
  }

  return (
    <StyledMain className="main">
      <Container className="container">
        <MainBlock className="main__block">
          <MainContent className="main__content">
            {Object.entries(columns).map(([status, cards]) => (
              <Column 
                key={status}
                title={status}
                cards={cards}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </StyledMain>
  );
}