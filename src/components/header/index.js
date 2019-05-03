import React from 'react';
import './style.css';
import {Logo} from './logo.js';
import {Telephone} from './telephone.js';
import {Search} from './search.js';
import {Payment} from './payment.js';
import {MobNavigation, MobMenu} from './mobileMenu.js';
import {MobBucket} from './mobileBucket.js';

const Header = () => (
	<header className="header">
		<div className="wrapper">

			<MobNavigation/>

			<Logo/>

			<Telephone/>

			<Search/>

			<Payment/>

			<MobBucket/>

		</div>

		<MobMenu/>
		
	</header>
)

export {Header}