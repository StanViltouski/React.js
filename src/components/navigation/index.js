import React from 'react'
import {Menu} from './menu'
import {Bucket} from './bucket.js'
import './style.css'


const Navigation = () => (
	<nav className="nav">
		<div className="wrapper">

			<Menu/>

			<Bucket/>

		</div>
	</nav>
)

export  {Navigation}