import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"

class Menu extends React.Component {
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

	urlChecker = function(str){
		let expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
		let regex = new RegExp(expression);
		return str.match(regex);
	};

	accordion = () =>{
		let acc = document.getElementsByClassName("mobile-parent-sub-menu");
		let i;
		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function(e) {
				e.preventDefault();
				this.classList.toggle("active");
				let panel = this.nextElementSibling;
				if (panel.style.maxHeight){
					panel.style.maxHeight = null;
				} else {
					//panel.style.maxHeight = panel.scrollHeight + "px";
					panel.style.maxHeight = "100%";
				}
			});
		}
	};

	componentDidMount(){
		this.accordion();
	}

	render() {
		return (<StaticQuery
				query={graphql`
				query MobileMenuQuery {
				  headermenu: contentfulNavigationMenu(slug: {eq: "header-menu"}) {
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

				  footermenu: contentfulNavigationMenu(slug: {eq: "footer-menu"}) {
					menuItems {
					  title
					  link
					}
				  }
				}
				`}

				render={data => (
					/*<!-- Mobile Menu -->*/
					<div className="offcanvas-slide-menu bg-pattern section-mobile-menu-pattern">
						<button className="target-burger" onClick={this.toggleMenu}>
							<span className="buns">
							  <span className="bun"></span>
							  <span className="bun"></span>
							</span>
						</button>
						<ul className="rjrv-menu-mobile rjrv-condensed rjrv-menu-mobile-pattern">
							{
								data.headermenu.menuItems.map((item, i) => {
									if (item.subMenu) {
										return <li className="mobile-has-sub-menu" key={`mbm-${i}`}>
											<a href='#' className="mobile-parent-sub-menu">{item.title}</a>
											<ul>
												{item.subMenu.map((sub, subi) => {
													if (sub.subMenu) {
														return <li key={`mbsub1-${subi}`} className="mobile-has-sub-menu">
															<div className="mobile-parent-sub-menu">{sub.title}</div>
															<ul>
																{sub.subMenu.map((sub1, subi1) => {
																	if(this.urlChecker(sub1.link)) {
																		return <li key={`mbsub2-${subi1}`}><a
																			href={sub1.link}>{sub1.title}</a></li>
																	}else{
																		return <li key={`mbsub2-${subi1}`}><Link
																			to={sub1.link}>{sub1.title}</Link></li>
																	}
																})}
															</ul>
														</li>
													} else {
														if(this.urlChecker(sub.link)) {
														return <li key={`mbsub1-${subi}`}><a href={sub.link}>{sub.title}</a>
														</li>}else{
															return <li key={`mbsub1-${subi}`}><Link to={sub.link}>{sub.title}</Link>
															</li>
														}
													}
												})}
											</ul>
										</li>;
									} else {
										if(this.urlChecker(item.link)) {
											return <li key={`mbm-${i}`}>
												<a href={item.link}>{item.title}</a>
											</li>
										}else{
											return <li key={`mbm-${i}`}>
												<Link to={item.link}>{item.title}</Link>
											</li>
										}
									}
								})
							}
						</ul>

						<nav className="d-flex flex-column rjrv-secondary-mobile-menu rjrv-condensed">
							{data.footermenu.menuItems.map((item, i) => {
								if(this.urlChecker(item.link)) {
									return <a href={item.link} title={item.title} rel="nofollow"
												 key={`mbbottom-${i}`}>{item.title}</a>
								}else{
									return <Link to={item.link} title={item.title} rel="nofollow"
												 key={`mbbottom-${i}`}>{item.title}</Link>
								}
							})}
						</nav>
					</div>)}/>
		)
	}
}


export default Menu
