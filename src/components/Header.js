import React from 'react'
import './css/Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../contexts/StateProvider';
import { auth } from '../firebase/firebase';

function Header() {
    const [ {basket, user} , dispatch] = useStateValue();

    const login = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to='/'>
            <img className="header__logo" src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" />
            </Link>

            <div className="header__search">
                <input className="header__serachInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user  && '/login'} className="header__link">
                <div onClick={login} className="header__nav__option">
                    <span className="header__nav__optionLineOne">Hello {user?.email}</span>
                    <span className="header__nav__optionLineTwo">{user ? 'Sign Out' : 'Sing in'} </span>
                </div>
                </Link>

                <Link to='/' className="header__link">
                <div className="header__nav__option">
                    <span className="header__nav__optionLineOne">Returns</span>
                    <span className="header__nav__optionLineTwo">& Orders</span>
                </div>
                </Link>

                <Link to='/' className="header__link">
                <div className="header__nav__option">
                    <span className="header__nav__optionLineOne">Your</span>
                    <span className="header__nav__optionLineTwo">Prime</span>
                </div>
                </Link>

                <Link to='/checkout' className="header__link">
                <div className="header__nav__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__nav__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
                
            </div>
        </nav>
    )
}

export default Header
