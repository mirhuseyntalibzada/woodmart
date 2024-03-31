import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faTruck, faWineBottle } from '@fortawesome/free-solid-svg-icons';

const wine = <FontAwesomeIcon icon={faWineBottle} />
const payment = <FontAwesomeIcon icon={faCreditCard} />
const delivery = <FontAwesomeIcon icon={faTruck} />

export class CardInfo extends Component {
    render() {
        return (
            <section id="card-info">
                <div className="container">
                    <div className='info-box'>
                        <div>
                            <div className='icon'>
                                <i>{wine}</i>
                            </div>
                            <h5>Best Quality</h5>
                            <p>
                                It’s content strategy gone awry right from the start are wasn’t.
                            </p>
                        </div>
                        <div>
                            <div className='icon'>
                                <i>{payment}</i>
                            </div>
                            <h5>Online Payment</h5>
                            <p>
                                Forswearing the use of Lorem Ipsum wouldn’t have helped.
                            </p>
                        </div>
                        <div>
                            <div className='icon'>
                                <i>{delivery}</i>
                            </div>
                            <h5>Fast Delivery</h5>
                            <p>
                                It’s like saying you’re a bad designer, use less bold text, italics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CardInfo