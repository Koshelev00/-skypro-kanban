import styled from 'styled-components'
export const PopBrowse  = styled.div`
    width: 100%;
  height: 100%;
  min-width: 630px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
   
`
export const PopBrowseContainer = styled.div`
    width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`
export const PopBrowseBlock  = styled.div`
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`
export const PopBrowseTopBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 18px;
`
export const PopCategoriesTheme = styled.div`
    display: inline-block;
    width: 115px;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    text-align: center;

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
    }`

export const PopCategoryItem = styled(PopCategoriesTheme)`
    background-color: ${({ $category }) =>
        $category === 'Web design'
            ? '#FFE4C2'
            : $category === 'Research'
            ? '#B4FDD1'
            : '#E9D4FF'};
    opacity: 1;
    color: ${({ $category }) =>
        $category === 'Web design'
            ? '#FF6D00'
            : $category === 'Research'
            ? '#06B16E'
            : '#9a48f1'};

    p {
        margin: 0;
    }`
export const PopBrowseTtl = styled.h3`
color: #000;
font-size: 20px;
font-weight: 600;
line-height: 24px;
`
export const PopBrowseWrap = styled.div`
 display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const PopBrowseForm = styled.form`
 max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`
export const PopBrowseArea= styled.textarea`
 width: 370px;
  // width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: none;
`
