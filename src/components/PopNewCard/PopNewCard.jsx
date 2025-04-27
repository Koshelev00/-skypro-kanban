import Calendar from "../Calendar/Calendar";
import {
  PopUpNewCard,
  PopUpNewCardContainer,
  PopUpNewCardBlock,
  PopUpNewCardContent,
  PopUpNewCardTitle,
  PopUpNewCardClose,
  PopUpNewCardWrap,
  PopUpNewCardForm,
  PopUpFormNewBlock,
  PopUpFormNewInput,
  PopUpFormNewArea,
  PopUpFormNewCreate,
  PopUpNewCardCtegories,
  PopUpNewCardThemes,
  PopUpNewCardTheme,
  PopUpNewCardCtegoriesP,
  PopUpNewCardThemeP,
} from "./PopNewCard.styled";
export default function PopNewCard() {
  return (
    <PopUpNewCard className="pop-new-card" id="popNewCard">
      <PopUpNewCardContainer className="pop-new-card__container">
        <PopUpNewCardBlock className="pop-new-card__block">
          <PopUpNewCardContent className="pop-new-card__content">
            <PopUpNewCardTitle className="pop-new-card__ttl">
              Создание задачи
            </PopUpNewCardTitle>
            <PopUpNewCardClose href="#" className="pop-new-card__close">
              &#10006;
            </PopUpNewCardClose>
            <PopUpNewCardWrap className="pop-new-card__wrap">
              <PopUpNewCardForm
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <PopUpFormNewBlock className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <PopUpFormNewInput
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    autoComplete="name"
                  ></PopUpFormNewInput>
                </PopUpFormNewBlock>
                <PopUpFormNewBlock className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <PopUpFormNewArea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></PopUpFormNewArea>
                </PopUpFormNewBlock>
              </PopUpNewCardForm>
              <Calendar />
            </PopUpNewCardWrap>
            <PopUpNewCardCtegories className="pop-new-card__categories categories">
              <PopUpNewCardCtegoriesP className="categories__p subttl">
                Категория
              </PopUpNewCardCtegoriesP>
              <PopUpNewCardThemes className="categories__themes">
                <PopUpNewCardTheme className="categories__theme _orange _active-category">
                  <PopUpNewCardThemeP className="_orange">
                    Web Design
                  </PopUpNewCardThemeP>
                </PopUpNewCardTheme>
                <PopUpNewCardTheme className="categories__theme _green">
                  <PopUpNewCardThemeP className="_green">
                    Research
                  </PopUpNewCardThemeP>
                </PopUpNewCardTheme>
                <PopUpNewCardTheme className="categories__theme _purple">
                  <PopUpNewCardThemeP className="_purple">
                    Copywriting
                  </PopUpNewCardThemeP>
                </PopUpNewCardTheme>
              </PopUpNewCardThemes>
            </PopUpNewCardCtegories>

            <PopUpFormNewCreate
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </PopUpFormNewCreate>
          </PopUpNewCardContent>
        </PopUpNewCardBlock>
      </PopUpNewCardContainer>
    </PopUpNewCard>
  );
}
