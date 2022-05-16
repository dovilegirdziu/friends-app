import React from 'react';

const Card = ({ name, email, id  }) => {
	return (
		<div className='tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img className='w-75 h-75 invert' alt='catofriend' src={`https://robohash.org/${id}?set=set4`} />
		<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
 );
}

export default Card;