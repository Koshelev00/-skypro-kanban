// import '../../App.css'
import * as S from "./PopBrowse.styled";
import Calendar from '../Calendar/Calendar'

const PopBrowse = ({id, onClose, topic}) => {
  return (
    <S.PopBrowse id={id}>
      {/* <S.PopBrowseContainer> */}
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock >
              <S.PopBrowseTtl >Название задачи</S.PopBrowseTtl>
              <S.PopCategoryItem $category={topic}
                            >
                                <p>{topic}</p>
                            </S.PopCategoryItem>
            </S.PopBrowseTopBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <S.PopBrowseWrap>
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label>
                    Описание задачи
                  </label>
                  <S.PopBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Описание задачи"
                  ></S.PopBrowseArea>
                </div>
              </form>
              <Calendar />
            </S.PopBrowseWrap>
            {/* <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div> */}
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  Редактировать задачу
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  Удалить задачу
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01"   onClick={onClose}>
                Закрыть
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  Сохранить
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  Отменить
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  Удалить задачу
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                Закрыть
              </button>
            </div>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      {/* </S.PopBrowseContainer> */}
      </S.PopBrowse>
  );
};

export default PopBrowse;