import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                            src="http://localhost:3000/React-Routers/static/media/img-1.ebbc1d41.jpg"
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='http://localhost:3000/React-Routers/static/media/img-1.ebbc1d41.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
            <CardItem
              src='http://localhost:3000/React-Routers/static/media/img-1.ebbc1d41.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='http://localhost:3000/React-Routers/static/media/img-1.ebbc1d41.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/about'
            />
            <CardItem
              src='http://localhost:3000/React-Routers/static/media/img-1.ebbc1d41.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
