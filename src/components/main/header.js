import React from "react"
import {Link, graphql, StaticQuery} from "gatsby"
import PropTypes from "prop-types"


class Header extends React.Component {
	toggleMenu = () => {
		let btn = document.querySelectorAll('.target-burger');
		let menu = document.querySelector('.offcanvas-slide-menu');
		let offCanvas = document.querySelector('.offcanvas-overlay');

		btn.forEach(function (element) {
			element.classList.toggle('toggled');
		});

		offCanvas.classList.toggle('offcanvas-active');
		menu.classList.toggle('active');
	};

	render() {
		return (
			<StaticQuery
				query={graphql`
				query HeaderMenuQuery {
				  menu: contentfulNavigationMenu(slug: {eq: "header-menu"}) {
					menuItems {
					  title
					  link
					  subMenu {
						title
						link
						subMenu {
						  title
						  link
						}
					  }
					}
				  }
				}
				`}

				render={data => ( <header className="rjrv-l-header">
					<div className="container container-large">
						<div className="row justify-content-between">
							{/*<!-- Logo -->*/}
							<Link to="/" className="rjrv-logo">RJ Reynolds Vapor</Link>

							{/*<!-- Desktop Menu -->*/}
							<ul className="align-items-center rjrv-menu rjrv-condensed d-none d-sm-flex mr-md-5">
								{
									data.menu.menuItems.map((item, i) => {
										if (item.subMenu) {
											return <li className="has-sub-menu" key={`hm-${i}`}>
												<div>{item.title}</div>
												<ul>
													{item.subMenu.map((sub, subi) => {
														if (sub.subMenu) {
															return <li key={`hmsub1-${subi}`}><Link to={sub.link}>{sub.title}</Link>
																<ul>
																	{sub.subMenu.map((sub1, subi1) => {
																		return <li key={`hmsub2-${subi1}`}><Link
																			to={sub1.link}>{sub1.title}</Link></li>
																	})}
																</ul>
															</li>
														} else {
															return <li key={subi}><Link to={sub.link}>{sub.title}</Link>
															</li>
														}
													})}
												</ul>
											</li>;
										} else {
											return <li key={`hm-${i}`}>
												<Link to={item.link}>{item.title}</Link>
											</li>
										}
									})
								}
							</ul>

							{/*<!-- Trigger Mobile Menu -->*/}
							<button className="target-burger d-sm-none" onClick={this.toggleMenu}>
								<span className="buns">
								  <span className="bun"></span>
								  <span className="bun"></span>
								</span>
							</button>
						</div>
					</div>
				</header> )}/>
		)
	}

}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header;

