import React, { Component } from 'react';

export class CarouselItem extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 text-container mb-5 mb-lg-0">
                            <p>{this.props.text}</p>
                            <h1>{this.props.title}</h1>
                            <p className='d-none d-lg-block'>{this.props.description}</p>
                            <button className='mt-3 btn-read-more'>READ MORE</button>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="img-container"><img src={this.props.photo} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselItem;