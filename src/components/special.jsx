import React, { Component } from 'react';
import bg1 from "../images/wood-food-market-ban-1-opt.jpg.webp";
import bg2 from "../images/wood-food-market-ban-2-opt.jpg.webp";

export class Special extends Component {
    render() {
        return (
            <section id='special'>
                <div className="container-fluid container-lg container-mobile">
                    <div className="row row-gap-4">
                        <div className="col-12 col-md-6">
                            <div className="bg-card">
                                <div className="bg"><img src={bg1} alt="" /></div>
                                <div className='text-container'>
                                    <p>NEW PRODUCTS</p>
                                    <h1>Roar Ice Cream</h1>
                                    <p>Using dummy content or fake information in the design.</p>
                                    <button>TO SHOP</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="bg-card">
                            <div className="bg"><img src={bg2} alt="" /></div>
                                <div className='text-container'>
                                    <p>VEGAN FOOD</p>
                                    <h1>Organic Rice</h1>
                                    <p>Products with elegant design can quickly begin to bloat.</p>
                                    <button>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Special