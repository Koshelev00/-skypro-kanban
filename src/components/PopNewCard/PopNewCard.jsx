import Calendar from "../Calendar/Calendar";
import * as S from "../PopNewCard/PopNewCard.styled";

export default function PopNewCard() {
  return (
    <S.PopNewCard className="pop-new-card" id="popNewCard">
      <S.PopNewCardContainer className="pop-new-card__container">
        <S.PopNewCardBlock className="pop-new-card__block">
          <S.PopNewCardContent className="pop-new-card__content">
            <S.PopNewCardTtl className="pop-new-card__ttl">
              Создание задачи
            </S.PopNewCardTtl>
            <S.PopNewCardWrap className="pop-new-card__wrap">
              <S.PopNewCardForm
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
             
                <S.FormNewBlock className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
              
                  <S.FormNewInput
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    autoComplete="name"
                  />
                </S.FormNewBlock>
                <S.FormNewBlock className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
          
                  <S.FormNewArea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar />
            </S.PopNewCardWrap>

            <S.PopNewCardCategories className="pop-new-card__categories categories">
              <S.PopCategoriesP className="categories__p subttl">
                Категория
              </S.PopCategoriesP>
              <S.PopCategoriesThemes className="categories__themes">
                <S.PopCategoryItem 
                  className="_orange _active-category"
                  $active={true}
                  $category="Web Design"
                >
                  <p className="_orange">Web Design</p>
                </S.PopCategoryItem>
                <S.PopCategoryItem 
                  className="_green"
                  $active={false}
                  $category="Research"
                >
                  <p className="_green">Research</p>
                </S.PopCategoryItem>
                <S.PopCategoryItem 
                  className="_purple"
                  $active={false}
                  $category="Copywriting"
                >
                  <p className="_purple">Copywriting</p>
                </S.PopCategoryItem>
              </S.PopCategoriesThemes>
            </S.PopNewCardCategories>

            <S.PopNewCardButton
              className="form-new__create _hover01"
              id="btnCreate"
              type="button" 
            >
              Создать задачу
            </S.PopNewCardButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}