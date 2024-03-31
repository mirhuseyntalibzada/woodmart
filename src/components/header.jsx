import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faLocationDot, faMagnifyingGlass, faUser, faCodeCompare, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../images/wood-logo-dark.svg"

const envelope = <FontAwesomeIcon icon={faEnvelope} />,
    phone = <FontAwesomeIcon icon={faPhone} />,
    location = <FontAwesomeIcon icon={faLocationDot} />,
    search = <FontAwesomeIcon icon={faMagnifyingGlass} />,
    profile = <FontAwesomeIcon icon={faUser} />,
    heart = <FontAwesomeIcon icon={faHeart} />,
    compare = <FontAwesomeIcon icon={faCodeCompare} />,
    bag = <FontAwesomeIcon icon={faBagShopping} />,
    hamburgerMenu = <FontAwesomeIcon icon={faBars} />


export class Header extends Component {
    render() {
        return (
            <div>
                <section id='header' className='d-none d-lg-block'>
                    <div className='navigation-1'>
                        <div className='container d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <a href='#'>{phone} (+035) 527-1710-70</a>
                                <a href='#'>{envelope} grocery@google.com</a>
                                <a href='#'>{location} Choose an address</a>
                            </div>
                            <div className='d-flex gap-4'>
                                <a href="#">Home</a>
                                <a href="#">Shop</a>
                                <a href="#">Blog</a>
                                <a href="#">Pages</a>
                                <a href="#">Elements</a>
                                <a href="#">Buy</a>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-2'>
                        <div className="container d-flex justify-content-between align-items-center">
                            <div className='img-container'>
                                <img src={logo} alt="" />
                            </div>
                            <div className='search'>
                                <input type="search" placeholder='Search for products' />
                                <select name="" id="">
                                    <option value="0">SELECT CATEGORY</option>
                                    <option value="1">Clocks</option>
                                    <option value="2">Lighting</option>
                                    <option value="3">Furniture</option>
                                    <option value="4">Accessories</option>
                                    <option value="5">Cooking</option>
                                    <option value="6">Toys</option>
                                    <option value="7">Other</option>
                                </select>
                                <button>{search}</button>
                            </div>
                            <div className='d-flex gap-4'>
                                <a href="#">{profile}</a>
                                <a href="#">{heart}</a>
                                <a href="#">{compare}</a>
                                <a href="#">{bag} $0.00</a>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-3'>
                        <div className='container d-flex justify-content-between'>
                            <div className='d-flex align-items-center gap-4'>
                                <a href="#">Fresh Food</a>
                                <a href="#">Bakery</a>
                                <a href="#">Frozen Food</a>
                                <a href="#">Food Cupboard</a>
                                <a href="#">Drinks</a>
                                <a href="#">Pets</a>
                            </div>
                            <div>
                                <a href="#">SPECIAL OFFER</a>
                                <a href="#">PURCHASE THEME</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='header-mobile' className='d-block d-lg-none'>
                    <div className="container-mobile">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div style={{fontSize: "20px"}}>
                                {hamburgerMenu}
                            </div>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <div style={{fontSize: "20px"}}>
                                {bag}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Header