import React, {Fragment} from 'react'


const Filters = () => (
<Fragment>
	<div className="filtersProduct_select select">
		<a href="#" className="select_link">Любого логотипа <img src="img/arrow.gif" alt="arrow"/></a>
			<ul className="drop">
				<li className="drop_option opt show_all"><a href="#">Все</a></li>
				<li id="compact" className="drop_option opt"><a href="#">Компакт-камера</a></li>
				<li id="nomirror" className="drop_option opt"><a href="#">Беззеркальная</a></li>
				<li id="mirror"  className="drop_option opt"><a href="#">Зеркальная</a></li>
				<li id="semi-format" className="drop_option opt"><a href="#">Среднеформатная</a></li>
			</ul>
		<input type="hidden" id="select"/>
	</div>

	<div className="filtersProduct_select select">
		<a href="#" className="select_link select_link-right">Любого бренда<img src="img/arrow.gif" alt="arrow"/></a>
			<ul className="drop">
				<li className="drop_option opt-1 show_all"><a href="#">Все</a></li>
				<li id="canon" className="drop_option opt-1"><a href="#">Canon</a></li>
				<li id="nikon" className="drop_option opt-1"><a href="#">Nikon</a></li>
				<li id="sony" className="drop_option opt-1"><a href="#">Sony</a></li>
				<li id="fuji" className="drop_option opt-1"><a href="#">Fujifilm</a></li>
				<li id="samsung" className="drop_option opt-1"><a href="#">Sumsung</a></li>
				<li id="olympus" className="drop_option opt-1"><a href="#">Olympus</a></li>
			</ul>
	<input type="hidden" id="select" />
	</div>


    <div className="filter_price">

        <span className="filterPrice_desc">По цене</span>
        <div className="filterPrice_bkg">
            <span className="filterPriceBkg_txt">от</span>
            <input className="filterPriceBkg_input" type="text" maxLength="9"/>
		</div>

        <div className="filterPrice_bkg">
            <span className="filterPriceBkg_txt">до</span>
            <input className="filterPriceBkg_input" type="text" maxLength="9"/>
        </div>            
        <span className="filterPrice_desc">рублей</span>

     </div>
</Fragment>
)

export {Filters}