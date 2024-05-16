import React from 'react'
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const Icons = () => {
    return (
        <div className='icons'>
            <img src={icon1} alt='todolist' />
            <img src={icon2} alt='icon-heart' />
            <img src={icon3} alt='icon-music' />
            <img src={icon4} alt='icon-sticker' />
        </div>
    )
}

export default Icons