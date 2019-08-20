import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

const HeroBlock = (props) => {
	let hero = props.data;
	let link = (url) => {
		if (url.heroUrl) {
			return <Link className="btn-rjvr-secondary btn-rjvr-secondary-icon rjrv-condensed text-uppercase"
						 to={url.heroUrl}>{url.heroLinkText}</Link>
		}
	};
	return (
		<section className="section section-inverse section-hero bg-pattern section-hero-pulldown section-hero-pattern">
			<div className="container container-large pt-sm-5">
				<div className="row align-items-center mb-sm-5 pb-sm-5">
					<div className="col-12 col-sm-6 col-xl-6 p-0 order-sm-2 offset-sm-6">
						<Img sizes={hero.heroImage.sizes} className="rjrv-placeholder rjrv-placeholder-absolute" style={{position: 'absolute'}}/>
					</div>
					<div className="col-12 col-sm-10 mt-lg-5 pt-lg-5 mt-5 mb-5">
						<div className="rjrv-decoration-block"><span
							className="rjrv-condensed text-uppercase">{hero.heroPreTitle}</span>
						</div>
						<h1 className="rjrv-fadeInText rjrv-section-title-lg mb-5">{hero.heroTitle.heroTitle}</h1>
						{link(hero)}
					</div>
				</div>
			</div>
		</section>)
};


export default HeroBlock
