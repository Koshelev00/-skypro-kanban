import { Outlet } from 'react-router-dom'
import Main from '../Main/Main'
import { LoadExpect } from '../Adition/Adition'
import { SGlobal } from '..//../Global.styled'
import Header from '../Header/Header'

function MainPage({ loading }) {
    return (
        <>
            <SGlobal />
            <div className="wrapper">
                <Header />
                {loading ? <LoadExpect /> : <Main />}
                <Outlet />
            </div>
        </>
    )
}

export default MainPage