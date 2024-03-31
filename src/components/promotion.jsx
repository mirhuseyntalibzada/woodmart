import React, { Component } from 'react';
import promotionProd from "../data/promotion.js";
import PromotionItem from './promotion-item.jsx';

export class Promotion extends Component {
    render() {
        return (
            <section id='promotion'>
                <div className="container-fluid container-lg container-mobile">
                    <div className='promotion-text-container d-flex gap-4 mb-2 mb-lg-0'>
                        <div>
                            <h3 className='m-0'>{this.props.title}</h3>
                        </div>
                        <div className='d-none d-lg-flex align-items-center gap-4'>
                            <a href="#">NEW</a>
                            <a href="#">FEATURED</a>
                            <a href="#">TOP SELLERS</a>
                        </div>
                    </div>
                    <div className='d-flex d-lg-none align-items-center gap-4'>
                        <a href="#">NEW</a>
                        <a href="#">FEATURED</a>
                        <a href="#">TOP SELLERS</a>
                    </div>
                </div>
                <div className='container-fluid container-lg container-mobile'>
                    <div className="card-container">
                        <div className='d-flex'>
                            {promotionProd.map(item => (
                                <PromotionItem
                                    title={item.name}
                                    img={item.img}
                                    category={item.category}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Promotion