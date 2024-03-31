import React, { Component } from 'react';
import bg1 from "../images/wood-food-market-category-1.jpg.webp"
import bg2 from "../images/wood-food-market-category-2.jpg.webp"
import bg3 from "../images/wood-food-market-category-3.jpg.webp"
import bg4 from "../images/wood-food-market-category-4.jpg.webp"

export class Category extends Component {
    render() {
        return (
            <section id='category'>
                <div className="container">
                    <div className="container-fluid container-lg container-mobile">
                        <div className='category-text-container d-flex gap-4 mb-2 mb-lg-0'>
                            <div>
                                <h3 className='m-0'>Popular Categories</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <div className="bg-cont">
                                <img src={bg1} alt="" />
                                <div className="d-none d-md-block text-container">
                                    <h3>CLOCKS</h3>
                                    <p>12 products</p>
                                </div>
                            </div>
                            <div className="pt-3 d-block d-md-none text-container text-center">
                                <h3>CLOCKS</h3>
                                <p>12 products</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="bg-cont">
                                <img src={bg2} alt="" />
                                <div className="d-none d-md-block text-container">
                                    <h3>TOYS</h3>
                                    <p>12 products</p>
                                </div>
                            </div>
                            <div className="pt-3 d-block d-md-none text-container text-center">
                                <h3>TOYS</h3>
                                <p>12 products</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="bg-cont">
                                <img src={bg3} alt="" />
                                <div className="d-none d-md-block text-container">
                                    <h3>FURNITURE</h3>
                                    <p>12 products</p>
                                </div>
                            </div>
                            <div className="pt-3 d-block d-md-none text-container text-center">
                                <h3>FURNITURE</h3>
                                <p>12 products</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="bg-cont">
                                <img src={bg4} alt="" />
                                <div className="d-none d-md-block text-container">
                                    <h3>ACCESSORIES</h3>
                                    <p>12 products</p>
                                </div>
                            </div>
                            <div className="pt-3 d-block d-md-none text-container text-center">
                                <h3>ACCESSORIES</h3>
                                <p>12 products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Category