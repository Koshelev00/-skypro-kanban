// import "../../App.css";
import Card from "../Card/Card";
import { SColumn } from "./Column.styled.js";
export default function Column({ title, cards }) {
  return (
    <SColumn className="main__column column">
      <div className="column__title">
        <p>{title}</p>
        </div>
        <div className="cards">
          <div className="cards__item">
            {cards.map((card) => (
               <div className="cards__item" key={card.id}>
              <Card
                
                id={card.id}
                topic={card.topic}
                title={card.title}
                status={card.status}
                date={card.date}
              />
              </div>
            ))}
         
        </div>
      </div>
    </SColumn>
  );
}
