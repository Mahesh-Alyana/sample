import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these genres</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Be amused by the harmonious poems'
              label='POETRY'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Solve the mystery with the author'
              label='MYSTERY'
              path='/services'
            />
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Be entertained by these deliberately fabricated account of something'
              label='FICTION'
              path='/services'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Reap the benefits of thc content in these books'
              label='BIOGRAPHY'
              path='/products'
            />
            <CardItem
              src='images/img-14.png'
              text='Dive into a world of magical elements'
              label='FANTASY'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
