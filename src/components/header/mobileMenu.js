import React from 'react'
import './style.css'

const MobNavigation = () => (

    <nav id="mobile_nav" onClick={on}>
        <a href="#">
            <div id="nav-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </a>
	</nav>
)

const MobMenu = () => (

    <div id="mobile_menu">
		<ul>
            <li className="mobMenu_link"><a href="#">Мобильные телефоны</a></li>
            <li className="mobMenu_link"><a href="#">Планшеты</a></li>
            <li className="mobMenu_link"><a href="#">Фототехника</a></li>
            <li className="mobMenu_link"><a href="#">Ноутбуки</a></li>
            <li className="mobMenu_link"><a href="#">Телевизоры</a></li>
		</ul>

	</div>	
)

const on = () => (
    alert('мобильное меню в разработке')
) 



export {MobNavigation, MobMenu}