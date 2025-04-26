import Calendar from "../Calendar/Calendar";
import * as S from "../SignIn/SignIn.styled";
export default function PopNewCard() {
  return (
    <S.PopUpNewCard className="pop-new-card" id="popNewCard">
      <S.PopUpNewCardContainer className="pop-new-card__container">
        <S.PopUpNewCardBlock className="pop-new-card__block">
          <S.PopUpNewCardContent className="pop-new-card__content">
            <S.PopUpNewCardTitle className="pop-new-card__ttl">
              Создание задачи
            </S.PopUpNewCardTitle>
            <S.PopUpNewCardClose href="#" className="pop-new-card__close">
              &#10006;
            </S.PopUpNewCardClose>
            <S.PopUpNewCardWrap className="pop-new-card__wrap">
              <S.PopUpNewCardForm
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <S.PopUpFormNewBlock className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <S.PopUpFormNewInput
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    autoComplete="name"
                  ></S.PopUpFormNewInput>
                </S.PopUpFormNewBlock>
                <S.PopUpFormNewBlock className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <S.PopUpFormNewArea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.PopUpFormNewArea>
                </S.PopUpFormNewBlock>
              </S.PopUpNewCardForm>
              <Calendar />
            </S.PopUpNewCardWrap>
            <S.PopUpNewCardCtegories className="pop-new-card__categories categories">
              <S.PopUpNewCardCtegoriesP className="categories__p subttl">
                Категория
              </S.PopUpNewCardCtegoriesP>
              <S.PopUpNewCardThemes className="categories__themes">
                <S.PopUpNewCardTheme className="categories__theme _orange _active-category">
                  <S.PopUpNewCardThemeP className="_orange">
                    Web Design
                  </S.PopUpNewCardThemeP>
                </S.PopUpNewCardTheme>
                <S.PopUpNewCardTheme className="categories__theme _green">
                  <S.PopUpNewCardThemeP className="_green">
                    Research
                  </S.PopUpNewCardThemeP>
                </S.PopUpNewCardTheme>
                <S.PopUpNewCardTheme className="categories__theme _purple">
                  <S.PopUpNewCardThemeP className="_purple">
                    Copywriting
                  </S.PopUpNewCardThemeP>
                </S.PopUpNewCardTheme>
              </S.PopUpNewCardThemes>
            </S.PopUpNewCardCtegories>

            <S.PopUpFormNewCreate
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </S.PopUpFormNewCreate>
          </S.PopUpNewCardContent>
        </S.PopUpNewCardBlock>
      </S.PopUpNewCardContainer>
    </S.PopUpNewCard>
  );
}
