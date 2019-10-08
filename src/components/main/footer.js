import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"

class Footer extends React.Component {
	urlChecker = function(str){
		let expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
		let regex = new RegExp(expression);
		return str.match(regex);
	};
	render() {
		return (
			<StaticQuery
				query={graphql`
				query FooterMenuQuery {
				  menu: contentfulNavigationMenu(slug: {eq: "footer-menu"}) {
					menuItems {
					  title
					  link
					}
				  }
				}
				`}

				render={data => (
					<footer className="rjrv-l-footer bg-pattern footer-pattern rjrv-condensed">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-12 col-sm-11">
									<nav
										className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mt-5 mt-sm-0">
										{data.menu.menuItems.map((item, i) => {
											if(this.urlChecker(item.link)){
												return	<a key={`fm-${i}`} href={item.link} title={item.title} rel="nofollow">{item.title}</a>
											}else{
												return	<Link key={`fm-${i}`} to={item.link} title={item.title} rel="nofollow">{item.title}</Link>
											}
										})}
									</nav>
									<div className="d-flex flex-sm-row justify-content-sm-center">
										<p className="m-0 mt-5 mt-sm-0 copy">
											<small><span>&copy; R.J. Reynolds Vapor company</span></small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</footer>)}/>
		)
	}

}


export default Footer
