import React, {Fragment} from 'react'
import PropTypes from 'prop-types'


const Card = ({photo, title, description, price}) => (

	<div className="mainProducts_card card compact canon" data-price={price}>
		<img className="card_img" src={photo} alt="фотоаппарат"/>
		<h3 className="card_title">{title}</h3>
 		<p className="card_description">{description}</p>
 		

 		<div className="card_price">
			<span id="cardPrice_cash">{price} руб.</span>
			<img src="img/bucketblue.png" alt="корзина"/>  
		</div>
	</div>
)

const CardSale = () => (

	<div className="mainProducts_card card_sale">
		<img className="card_sale-img" src="img/sonyfull.png" alt="фотоаппарат"/>


			<div className="cardSale_wrapper">
				<h3 className="card_title">Canon EOS 5D Mark III Body</h3>
				<p className="cardSale-description card_description">Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов и видеооператоров. Преемник успешной модели EOS 5D Mark II. Фотоаппарат имеет 22.3 Мп. CMOS-сенсор размером 36 х 24 мм, 14-битный процессор DIGIC 5+,<br />61-точечный автофокус.
				</p><span id="cardSale-oldPrice">440000 руб.</span>

				<div className="cardSale_price card_price">
					<span id="cardSalePrice_cash">320000 руб.</span>
					<img src="img/bucketred.png" alt="корзина"/>  
				</div>
			</div>
	</div>
)

Card.propTypes = {
	photo: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number
}

Card.defaultProps = {
	photo: '/img/sony.png',
	title: 'Canon EOS 5D Mark III Body',
	description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей.',
	price: 320000
}

const Cards = () => (
	<Fragment>
		<Card/>
		<Card/>
		<Card
			title="Nikon EOS 5D Mark III Body"
		/>
		<Card
			title="Nikon EOS 5D Mark III Body"
		/>
		<Card
			title="Sony EOS 5D Mark III Body"
		/>
		<Card
			title="Fujifilm EOS 5D Mark III Body"
		/>
		<Card
			title="Samsung EOS 5D Mark III Body"
			price={300000}
		/>
		<Card
			title="Samsung EOS 5D Mark III Body"
			price={300000}
		/>
		<Card
			title="Samsung EOS 5D Mark III Body"
			price={300000}
		/>
		<Card
			title="Olympus EOS 5D Mark III Body"
		/>

	</Fragment>
	)

export {Cards, CardSale}