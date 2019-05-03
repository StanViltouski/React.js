import React from 'react'
import {MobileFilter} from './mobileFilter.js'
import {Filters} from './filters.js'
import {Cards, CardSale} from './cards.js'
import './style.css'


const Main = () => (
	<main className="main">
			<div className="wrapper">

				<MobileFilter/>

				<div className="main_filters">
					<div className="filters_product">

						<Filters/>

					</div>
				</div>

				<div className="main_products">
					<CardSale/>
					<Cards/>
				</div>

			</div>
		</main>
)

export  {Main}