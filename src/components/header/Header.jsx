import "./Header.scss"

import logo from "../../assets/logo.svg"

const ulLists = ['Home', 'About us', 'Menu', 'Features', 'Contact us']

function Header(){
    return <header className="header">
        <nav className="navbar container">
            <div className="navbar__items">
                <div className="navbar__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="navbar__list">
                    {
                        ulLists?.map((item, inx) => (
                            <li key={inx} className="navbar__item">
                                <a className="navbar__link" href="#">
                                    <span>{item}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <button className="navbar__btn">Booking Now</button>
        </nav>
    </header>
}

export default Header;