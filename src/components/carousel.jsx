import React, { Component } from 'react';
import barilla from '../images/wood-food-market-slider-1-opt.png.webp';
import heinz from '../images/wood-food-market-slider-2-344x394.png';
import juice from '../images/wood-food-market-slider-3-opt.png.webp';
import CarouselItem from './carousel-item';

export class Carousel extends Component {
    render() {
        return (
            <section id='carousel'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className='carousel-item active'>
                            <CarouselItem photo={barilla} text="WEEKLY DISCOUNTS" title="-30% Discount Products On Barilla" description="Chances are there wasn’t collaboration, communication there wasn’t a process agreed upon or specified." />
                        </div>
                        <div className='carousel-item'>
                            <CarouselItem photo={heinz} text="NEW SAUCES RANGE" title="Korean Style Barbecue Sauce" description="Chances are there wasn’t collaboration, communication there wasn’t a process agreed upon or specified." />
                        </div>
                        <div className='carousel-item'>
                            <CarouselItem photo={juice} text="FRUITS PREMIUM DRINK" title="Best Refreshing Drink Just For You" description="Chances are there wasn’t collaboration, communication there wasn’t a process agreed upon or specified." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon d-none d-sm-block" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon d-none d-sm-block" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        )
    }
}

export default Carousel;