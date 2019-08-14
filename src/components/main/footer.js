import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
    <footer className="rjrv-l-footer bg-pattern footer-pattern rjrv-condensed">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-11">
                    <nav className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mt-5 mt-sm-0">
                        <Link to="/contact-us" title="contact-us" rel="nofollow">Contact Us</Link>
                        <Link to="/terms-and-conditions" title="terms-and-conditions" rel="nofollow">Terms &amp; Conditions</Link>
                        <Link to="/privacy-policy" title="privacy-policy" rel="nofollow">Privacy Policy</Link>
                        <Link to="/suppliers" title="suppliers" rel="nofollow">Suppliers</Link>
                        <Link to="/advocacy" title="advocacy" rel="nofollow">Advocacy</Link>
                    </nav>
                    <div className="d-flex flex-sm-row justify-content-sm-center">
                        <p className="m-0 mt-5 mt-sm-0 copy"><small><span>&copy; R.J. Reynolds Vapor company</span></small></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)


export default Footer
