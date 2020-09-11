import React, { Component } from 'react';
import './card.css'
class Card extends Component {
    state = {}
    render() {
        return (
            <div className='full-card'>
                <div className="img-div">
                    <img src={this.props.imgLink} alt="Advert Diagram" />
                </div>
                <div className="discription-div">
                    <p className="lead card-discription">
                        {this.props.discription}
                    </p>
                </div>
                <button className='card-button'>
                    {this.props.buttonDiscription}
                </button>
            </div>
        );
    }
}

export default Card;