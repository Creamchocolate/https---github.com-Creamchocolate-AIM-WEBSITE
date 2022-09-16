import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>CHECK OUT OUR SERVICES</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='image/camera.jfif'
                    text='Home and Office Survellance'
                    label='CCTV'
                    path='/services'
                    />
                    <CardItem 
                    src='image/fencing.jfif'
                    text='Secure your premises with Superior Electric fence'
                    label='Electric fencing'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='image/access control.jfif'
                    text='Access control for your home and office' 
                    label='Access control'
                    path='/services'
                    />
                    <CardItem 
                    src='image/motorized gate.jfif'
                    text='Automatic gate for both Office and Home'
                    label='Motorized Gate opener'
                    path='/services'
                    />
                    <CardItem 
                    src='image/item.jfif'
                    text='Sales of security accessories'
                    label='Security accessories'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards