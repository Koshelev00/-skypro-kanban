// import '../../App.css'
import PopUser from '../PopUser/PopUser'
import { SHeader } from './Header.styled'  
export default function Header() {
    return (
        <SHeader className="header">
        <div className="container">
          <div className="header__block">
            <div className="header__logo _show _light">
              <a href="" target="_self"><img src={"/logo.png"} alt="logo"></img></a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self"><img src={"/logo_dark.png"} alt="logo"></img></a>
            </div>
            <nav className="header__nav">
              <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
              <PopUser/>
            </nav>					
          </div>
        </div>			
      </SHeader>
    )
}