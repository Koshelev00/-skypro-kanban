import Calendar from "../Calendar/Calendar";
import * as S from "../PopNewCard/PopNewCard.styled";
import React from "react";

const PopNewCard = React.forwardRef((props, ref) => {
  return (
    <S.PopNewCard ref={ref}>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <label htmlFor="formTitle">Название задачи</label>
                  <S.FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    autoComplete="name"
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <label htmlFor="textArea">Описание задачи</label>
                  <S.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar />
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.PopCategoriesP>Категория</S.PopCategoriesP>
              <S.PopCategoriesThemes>
                <S.PopCategoryItem $active={true} $category="Web Design">
                  <p>Web Design</p>
                </S.PopCategoryItem>
                <S.PopCategoryItem $active={false} $category="Research">
                  <p>Research</p>
                </S.PopCategoryItem>
                <S.PopCategoryItem $active={false} $category="Copywriting">
                  <p>Copywriting</p>
                </S.PopCategoryItem>
              </S.PopCategoriesThemes>
            </S.PopNewCardCategories>

            <S.PopNewCardButton id="btnCreate" type="button">
              Создать задачу
            </S.PopNewCardButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
});
export default PopNewCard;