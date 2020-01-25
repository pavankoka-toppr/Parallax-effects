import React from 'react';
import './index.scss';

const Parallax = () => {
	return (
		<div className='wrapper'>
			<img className='level0' src={require('../assets/images/bg.png')} />
			<img src={require('../assets/images/b.png')}>
				<img className='level1' src={require('../assets/images/c.png')} />
			</img>
		</div>
	)
}

export default Parallax;