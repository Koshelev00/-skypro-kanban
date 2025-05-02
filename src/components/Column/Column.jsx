import Card from "../Card/Card";
import * as S from "./Column.styled.js";
export default function Column({ title, cards }) {
  return (
    <S.MainColumn >
      <S.ColumnTitle >
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        <S.CardsItem >
          {cards.map((card) => (
            <S.CardsItem  key={card.id}>
              <Card
                id={card.id}
                topic={card.topic}
                title={card.title}
                status={card.status}
                date={card.date}
              />
            </S.CardsItem>
          ))}
        </S.CardsItem>
      </S.Cards>
    </S.MainColumn>
  );
}
