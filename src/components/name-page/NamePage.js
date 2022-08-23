import React from "react";
import './NamePage.css';

const NamePage = () => {
	return (
		<div className='container'>
			<div className='header'>
				<a href='#'></a>
			</div>
			<div className='content'>
				<h2>What is your name?</h2>
				<input className='w-90' type='text' placeholder='enter name'/>
				<button className='w-90 accept-button'>NEXT</button>
			</div>

		</div>
	)
}

export default NamePage;