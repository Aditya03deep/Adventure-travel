import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out this Epic Destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems
                            src="images/img-9.jpg"
                            text="Explore amazon amazing jungle"
                            lable="Advenute"
                            path="/services"
                        />
                        <CardItems
                            src="images/img-2.jpg"
                            text="Travel and enjoy the Bali in private cruise"
                            lable="Luxury"
                            path="/services"
                        />
                        <CardItems
                            src="images/img-1.jpg"
                            text="Explore amazon amazing jungle"
                            lable="Adventure"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItems
                            src="images/img-5.jpg"
                            text="Explore amazon amazing jungle"
                            lable="Lifestyle"
                            path="/services"
                        />
                        <CardItems
                            src="images/img-4.jpg"
                            text="Travel and enjoy the Bali in private cruise"
                            lable="Sports"
                            path="/services"
                        />
                        <CardItems
                            src="images/img-8.jpg"
                            text="Explore amazon amazing jungle"
                            lable="Nature"
                            path="/services"
                        />
                    </ul>
                </div>
            </div> 

        </div>
    )
}

export default Cards
