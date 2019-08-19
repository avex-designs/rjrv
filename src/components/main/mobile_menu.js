import React from "react"
import { Link } from "gatsby"

const Menu = () => {
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
    return(
	/*<!-- Mobile Menu -->*/
    <div className="offcanvas-slide-menu bg-pattern section-mobile-menu-pattern">
        <button className="target-burger" onClick={toggleMenu}>
        <span className="buns">
          <span className="bun"></span>
          <span className="bun"></span>
        </span>
        </button>
        <ul className="rjrv-menu-mobile rjrv-condensed rjrv-menu-mobile-pattern">
            <li className="mobile-has-sub-menu">
                <div className="mobile-parent-sub-menu">About</div>
                <ul>
                    <li><Link to="/about/who-we-are">Who We Are</Link></li>
                    <li><Link to="/about/leadership">Leadership</Link></li>
                </ul>
            </li>
            <li className="mobile-has-sub-menu">
                <div className="mobile-parent-sub-menu">Products</div>
                <ul>
                    <li><Link to="/products/vapor">Vapor</Link></li>
                    <li><Link to="/products/oral">Oral</Link></li>
                </ul>
            </li>
            <li><Link to="/transforming-tobacco">Transforming Tobacco</Link></li>
            <li><Link to="/media">Media</Link></li>
        </ul>

        <nav className="d-flex flex-column rjrv-secondary-mobile-menu rjrv-condensed">
            <Link to="/contact-us" title="contact-us" rel="nofollow">Contact Us</Link>
            <Link to="/terms-and-conditions" title="contact-us" rel="nofollow">Terms &amp; Conditions</Link>
            <Link to="/privacy-policy" title="contact-us" rel="nofollow">Privacy Policy</Link>
            <Link to="/suppliers" title="contact-us" rel="nofollow">Suppliers</Link>
            <Link to="/advocacy" title="contact-us" rel="nofollow">Advocacy</Link>
        </nav>
    </div>)

}


export default Menu
