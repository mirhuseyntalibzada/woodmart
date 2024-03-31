import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faCodeCompare, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const search = <FontAwesomeIcon icon={faMagnifyingGlass} />,
    heart = <FontAwesomeIcon icon={faHeart} />,
    compare = <FontAwesomeIcon icon={faCodeCompare} />,
    cart = <FontAwesomeIcon icon={faCartShopping} />

export class PromotionItem extends Component {
    render() {
        return (
            <div className='product-card d-flex flex-column align-items-center'>
                <div>
                    <div className='img-container'>
                        <img src={this.props.img} alt="" />
                        <div className='add-cart-card'>
                            <div className='d-flex' style={{ width: "30%" }}>
                                <a href='#'><span>-</span></a>
                                <a><span>1</span></a>
                                <a href='#'><span>+</span></a>
                            </div>
                            <div style={{ width: "70%" }}>
                                <p>ADD TO CART</p>
                                <i>{cart}</i>
                            </div>
                        </div>
                    </div>
                    <h6 className='m-2'>{this.props.title}</h6>
                    <p style={{ color: "rgba(0,0,0,0.5)" }} className='mb-1'>{this.props.category}</p>
                    <p style={{ color: "#D12C2C", fontWeight: "600" }} className='m-0'>${this.props.price}</p>
                </div>
            </div>
        )
    }
}

export default PromotionItem