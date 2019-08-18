import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header  = () => {
	let toggleMenu = () => {
		let btn = document.querySelectorAll('.target-burger');
		let menu = document.querySelector('.offcanvas-slide-menu');
		let offCanvas = document.querySelector('.offcanvas-overlay');

		btn.forEach(function(element){
			element.classList.toggle('toggled');
		});

		offCanvas.classList.toggle('offcanvas-active');
		menu.classList.toggle('active');
	};

		return (
            <header className="rjrv-l-header">
                <div className="container container-large">
                    <div className="row justify-content-between">
						{/*<!-- Logo -->*/}
                        <Link to="/" className="rjrv-logo">RJ Reynolds Vapor</Link>

						{/*<!-- Desktop Menu -->*/}
                        <ul className="align-items-center rjrv-menu rjrv-condensed d-none d-sm-flex mr-md-5">
                            <li className="has-sub-menu">
                                <span>About</span>
                                <ul>
                                    <li><Link to="/about/who-we-are">Who We Are</Link></li>
                                    <li><Link to="/about/leadership">Leadership</Link></li>
                                </ul>
                            </li>
                            <li className="has-sub-menu">
                                <span>Products</span>
                                <ul>
                                    <li><Link to="/products/vapor">Vapor</Link></li>
                                    <li><Link to="/products/oral">Oral</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/transforming-tobacco">Transforming Tobacco</Link>
                            </li>

                            <li>
                                <Link to="/media">Media</Link>
                            </li>
                        </ul>

						{/*<!-- Trigger Mobile Menu -->*/}
                        <button className="target-burger d-sm-none" onClick={toggleMenu}>
            <span className="buns">
              <span className="bun"></span>
              <span className="bun"></span>
            </span>
                        </button>
                    </div>
                </div>
            </header>
		)

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
