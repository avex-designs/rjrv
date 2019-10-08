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

	scroll = () => {
		let scrollpos = window.scrollY;
		let header = document.getElementsByClassName("rjrv-l-header")[0];


		function add_class_on_scroll() {
			header.classList.add("bg-large-white");
		}

		function remove_class_on_scroll() {
			header.classList.remove("bg-large-white");
		}

		window.addEventListener('scroll', function () {
			scrollpos = window.scrollY;

			if (scrollpos > 90) {
				add_class_on_scroll();
			}
			else {
				remove_class_on_scroll();
			}
		});
	};


	componentDidMount() {
		this.scroll();
	}

	urlChecker = function(str){
		let expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
		let regex = new RegExp(expression);
		return str.match(regex);
	};

	activeSub = (current, subItems) => {
		if(current && subItems) {
			let active = 0;
			subItems.map((it, i) => {
				if (it.title.toLowerCase() === current.toLowerCase()) {
					active += 1;
				}
				return true;
			});
			if (active > 0) {
				return ('active');
			}
			return null;
		}
	};
	active = (current, item) => {
		if(current && item){
			if(current.toLowerCase() === item.replace(/\//g, '').toLowerCase()){
				return ('active');
			}
		}
	};
	constructor(data) {
		super(data);
		this.currentPage = data.currentMenuItem;
	}

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
											return <li className={`has-sub-menu ${this.activeSub(this.currentPage, item.subMenu)}`} key={`hm-${i}`}>
												<div>{item.title}</div>
												<ul>
													{item.subMenu.map((sub, subi) => {
														if (sub.subMenu) {
															if(this.urlChecker(sub.link)) {
																return <li key={`hmsub1-${subi}`}>
																	<a href={sub.link}>{sub.title}</a>
																	<ul>
																		{sub.subMenu.map((sub1, subi1) => {
																			if(this.urlChecker(sub1.link)) {
																				return <li key={`hmsub2-${subi1}`}>
																					<a href={sub1.link}>{sub1.title}</a>
																				</li>
																			}else{
																				return <li key={`hmsub2-${subi1}`}>
																					<Link to={sub1.link}>{sub1.title}</Link>
																				</li>
																			}
																		})}
																	</ul>
																</li>
															}else{
																return <li key={`hmsub1-${subi}`}>
																	<Link to={sub.link}>{sub.title}1</Link>
																	<ul>
																		{sub.subMenu.map((sub1, subi1) => {
																			if(this.urlChecker(sub1.link)) {
																				return <li key={`hmsub2-${subi1}`}>
																					<a href={sub1.link}>{sub1.title}</a>
																				</li>
																			}else{
																				return <li key={`hmsub2-${subi1}`}>
																					<Link to={sub1.link}>{sub1.title}</Link>
																				</li>
																			}
																		})}
																	</ul>
																</li>
															}
														} else {
															if(this.urlChecker(sub.link)) {
																return <li key={subi}
																		   className={this.active(this.currentPage, sub.title)}>
																	<a href={sub.link}>{sub.title}</a>
																</li>
															}else{
																return <li key={subi}
																		   className={this.active(this.currentPage, sub.title)}>
																	<Link to={sub.link}>{sub.title} {sub.link}</Link>
																</li>
															}
														}
													})}
												</ul>
											</li>;
										} else {
											if(this.urlChecker(item.link)) {
												return <li key={`hm-${i}`}
														   className={this.active(this.currentPage, item.title)}>
													<a href={item.link}>{item.title}</a>
												</li>
											}else{
												return <li key={`hm-${i}`}
														   className={this.active(this.currentPage, item.title)}>
													<Link to={item.link}>{item.title}</Link>
												</li>
											}
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

