import React, { Component } from 'react';
import logo from "../images/wood-logo-dark.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import blog1 from "../images/blog-11-75x65.jpg"
import blog2 from "../images/blog-12-75x65.jpg"

const envelope = <FontAwesomeIcon icon={faEnvelope} />,
    phone = <FontAwesomeIcon icon={faPhone} />,
    location = <FontAwesomeIcon icon={faLocationDot} />

export class Footer extends Component {
    render() {
        return (
            <section id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-5 mb-md-0">
                                    <div className="logo-container">
                                        <img src={logo} alt="" />
                                    </div>
                                    <div>
                                        <p className='my-4 light-grey light-grey-text'>Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.</p>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <p className='m-0 light-grey'>{location} 451 Wall Street, UK, London</p>
                                        <a className='my-3 light-grey' href="tel:(064) 332-1233">{phone} Phone: (064) 332-1233</a>
                                        <a className='light-grey' href="tel:(099) 453-1357">{envelope} Fax: (099) 453-1357</a>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 mb-5 mb-md-0">
                                    <div className='mb-3'><h5 className='m-0'>Recent Posts</h5></div>
                                    <div className='row'>
                                        <div className='col-12 pb-2'>
                                            <div className='row'>
                                                <div className='col-4 d-flex justify-content-center'>
                                                    <img className='blog' height={"65"} width={"75"} src={blog1} alt="" />
                                                </div>
                                                <div className='col-8'>
                                                    <h6>A companion for extra sleeping</h6>
                                                    <p className='dark-grey'>July 23, 2016 1 Comment</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 pt-2'>
                                            <div className='row'>
                                                <div className='col-4 d-flex justify-content-center'>
                                                    <img className='blog' height={"65"} width={"75"} src={blog2} alt="" />
                                                </div>
                                                <div className='col-8'>
                                                    <h6>A companion for extra sleeping</h6>
                                                    <p className='dark-grey'>July 23, 2016 1 Comment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-12 col-sm-4 mb-5 mb-md-0">
                                    <div className='mb-3'><h5 className='m-0'>Our Stores</h5></div>
                                    <div className='d-flex flex-column gap-2'>
                                        <a href="#">New York</a>
                                        <a href="#">London SF</a>
                                        <a href="#">Edinburgh</a>
                                        <a href="#">Los Angeles</a>
                                        <a href="#">Chicago</a>
                                        <a href="#">Las Vegas</a>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4 mb-5 mb-md-0">
                                    <div className='mb-3'><h5 className='m-0'>Useful Links</h5></div>
                                    <div className="d-flex flex-column gap-2">
                                        <a href="#">Privacy Policy</a>
                                        <a href="#">Returns</a>
                                        <a href="#">Terms & Conditions</a>
                                        <a href="#">Contact Us</a>
                                        <a href="#">Latest News</a>
                                        <a href="#">Our Sitemap</a>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className='mb-3'><h5 className='m-0'>Footer Menu</h5></div>
                                    <div className="d-flex flex-column gap-2">
                                        <a href="#">Instagram profile</a>
                                        <a href="#">New Collection</a>
                                        <a href="#">Woman Dress</a>
                                        <a href="#">Contact Us</a>
                                        <a href="#">Latest News</a>
                                        <a href="#">Purchase Theme</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer