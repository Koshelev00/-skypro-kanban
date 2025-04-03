
import Column from '../Column/Column'
import { cardList } from '../../data.js';
import {StyledMain, Container, MainBlock, MainContent } from './Main.styled.js'

export default function Main() {
const columns = {
  'БЕЗ СТАТУСА': cardList.filter(card => card.status === 'Без статуса'),
  'НУЖНО СДЕЛАТЬ': cardList.filter(card => card.status === 'Нужно сделать'),
  'В РАБОТЕ': cardList.filter(card => card.status === 'В работе'),
  'Тестирование': cardList.filter(card => card.status === 'Тестирование'),
  'ГОТОВО': cardList.filter(card => card.status === 'Готово'),
};

return (
  <StyledMain className="main">
      <Container className="container">
          <MainBlock className="main__block">
              <MainContent className="main__content">
                  {Object.keys(columns).map((title) => (
                      <Column key={title} title={title} cards={columns[title]} />
                  ))}
              </MainContent>
          </MainBlock>
      </Container>
  </StyledMain>
);
}