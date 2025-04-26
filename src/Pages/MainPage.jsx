import { Outlet } from 'react-router-dom'
import Main from '../components/Main/Main'
import { LoadExpect } from '../components/Adition/Adition'
import { SGlobal } from '../Global.styled'
import Header from '../components/Header/Header'

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