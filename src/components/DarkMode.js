import React from 'react';
import useDarkMode from 'use-dark-mode';
import mode from '../containers/mode.png';

const DarkModeToggle = () => {
  	const el = document.getElementById('root');
  	el.classList.toggle('darkMode');
 
  return (
  	<div>
  		<button onClick={DarkModeToggle} 
		className='end ma2 br3 ba b--washed-red bg-washed-red btn darkMode'
		>
		<img alt='' style={{ height: 30 , width: 30 }} src={mode} />
  		</button> 
    </div>
  );
}; 
export default DarkModeToggle;
