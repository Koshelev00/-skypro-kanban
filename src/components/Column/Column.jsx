import Card from "../Card/Card";
import { CardsItem, MainColumn, ColumnTitle, Cards } from "./Column.styled.js";
export default function Column({ title, cards }) {
  return (
    <MainColumn className="main__column column">
      <ColumnTitle className="column__title">
        <p>{title}</p>
      </ColumnTitle>
      <Cards className="cards">
        <CardsItem className="cards__item">
          {cards.map((card) => (
            <CardsItem className="cards__item" key={card.id}>
              <Card
                id={card.id}
                topic={card.topic}
                title={card.title}
                status={card.status}
                date={card.date}
              />
            </CardsItem>
          ))}
        </CardsItem>
      </Cards>
    </MainColumn>
  );
}
