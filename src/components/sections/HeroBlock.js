import React from "react"
import HomeImage from "../../assets/img/home.jpg";
import HomeImageXs from "../../assets/img/home-xs.jpg";

const HeroBlock = () => (
	<section className="section section-inverse section-hero bg-pattern section-hero-pulldown section-hero-pattern">
		<div className="container container-large pt-sm-5">
			<div className="row align-items-center mb-sm-5 pb-sm-5">
				<div className="col-12 col-sm-6 col-xl-6 p-0 order-sm-2 offset-sm-6">
					<div className="rjrv-placeholder rjrv-placeholder-absolute" data-large={HomeImage}>
						<img src={HomeImageXs} className="img-small"/>
						<div style={{paddingBottom: '66.6%'}}></div>
					</div>
				</div>
				<div className="col-12 col-sm-10 mt-lg-5 pt-lg-5 mt-5 mb-5">
					<div className="rjrv-decoration-block"><span className="rjrv-condensed text-uppercase">The Tobacco Industry Leader</span>
					</div>
					<h1 className="rjrv-fadeInText rjrv-section-title-lg mb-5">We are more than a vapor company, we
						are an innovation company.</h1>
					<a className="btn-rjvr-secondary btn-rjvr-secondary-icon rjrv-condensed text-uppercase"
					   href="/transforming-tobacco.html">Learn more</a>
				</div>
			</div>
		</div>
	</section>
)


export default HeroBlock
