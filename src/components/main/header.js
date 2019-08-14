import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header className="rjrv-l-header">
        <div className="container container-large">
            <div className="row justify-content-between">
                {/*<!-- Logo -->*/}
                <Link to="/" className="rjrv-logo">RJ Reynolds Vapor</Link>

                {/*<!-- Desktop Menu -->*/}
                <ul className="align-items-center rjrv-menu rjrv-condensed d-none d-sm-flex mr-md-5">
                    <li className="has-sub-menu">
                        <a href="JavaScript:Void(0);">About</a>
                        <ul>
                            <li><Link to="/about/who-we-are">Who We Are</Link></li>
                            <li><Link to="/about/leadership">Leadership</Link></li>
                        </ul>
                    </li>
                    <li className="has-sub-menu">
                        <a href="JavaScript:Void(0);">Products</a>
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
                <button onclick="toggleMobileMenu()" className="target-burger d-sm-none">
            <span className="buns">
              <span className="bun"></span>
              <span className="bun"></span>
            </span>
                </button>
            </div>
        </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
