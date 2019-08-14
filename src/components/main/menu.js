import React from "react"

const Menu = () => (
	/*<!-- Mobile Menu -->*/
    <div className="offcanvas-slide-menu bg-pattern section-mobile-menu-pattern">
        <button onclick="toggleMobileMenu()" class="target-burger">
        <span className="buns">
          <span className="bun"></span>
          <span className="bun"></span>
        </span>
        </button>
        <ul className="rjrv-menu-mobile rjrv-condensed rjrv-menu-mobile-pattern">
            <li className="mobile-has-sub-menu">
                <a className="mobile-parent-sub-menu">About</a>
                <ul>
                    <li><a href="/about/who-we-are.html">Who We Are</a></li>
                    <li><a href="/about/leadership.html">Leadership</a></li>
                </ul>
            </li>
            <li className="mobile-has-sub-menu">
                <a className="mobile-parent-sub-menu">Products</a>
                <ul>
                    <li><a href="/products/vapor.html">Vapor</a></li>
                    <li><a href="/products/oral.html">Oral</a></li>
                </ul>
            </li>
            <li><a href="/transforming-tobacco.html">Transforming Tobacco</a></li>
            <li><a href="/media.html">Media</a></li>
        </ul>

        <nav className="d-flex flex-column rjrv-secondary-mobile-menu rjrv-condensed">
            <a href="/contact-us.html" title="contact-us" rel="nofollow">Contact Us</a>
            <a href="/terms-and-conditions.html" title="contact-us" rel="nofollow">Terms &amp; Conditions</a>
            <a href="/privacy-policy.html" title="contact-us" rel="nofollow">Privacy Policy</a>
            <a href="/suppliers.html" title="contact-us" rel="nofollow">Suppliers</a>
            <a href="/advocacy.html" title="contact-us" rel="nofollow">Advocacy</a>
        </nav>
    </div>
)


export default Menu
