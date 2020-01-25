import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Toggle.scss';

const Toggle = () => {
    const [ isToggled, setToggle ] = useState(false);
    const fade = useSpring({
        opacity: isToggled ? 1 : 0,
        fontSize: isToggled ? '50px' : '10px',
        // transform: isToggled ? 'translate3d(0, 0, 0)' : 'translate3d(0, 0, -5)',
    });
    const num = useSpring({
        number: isToggled ? 100 : 0,
    });

    let handleClick = (e) => {
        e.preventDefault();
        setToggle(!isToggled)
    }

    return(
        <div className='wrapper' >
            <animated.h1 style={fade}>Fade Away</animated.h1>
            <animated.p style={num}>{num.number.interpolate(val => Math.floor(val))}</animated.p>
            <button className='button' onClick={ (e) => handleClick(e) }>Toggle</button>
        </div>
    );
}

export default Toggle;