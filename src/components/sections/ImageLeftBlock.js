import React from "react"
import WhoWeAre from "../../assets/img/who-we-are.jpg";
import WhoWeAreXs from "../../assets/img/who-we-are-xs.jpg";

const ImageLeftBlock = () => (
	<section className="section m-0 p-0 pt-sm-3 pt-5 pb-sm-3 pb-5 mt-sm-5 mb-sm-5">
		<div className="container container-large pt-5 pb-5">
			<div className="row pt-lg-5 pb-lg-5">
				<div className="col-12">
					<div className="row align-items-center">
						<div className="col-12 col-md-6">
							<div className="rjrv-placeholder rjrv-placeholder-sm" data-large={WhoWeAre}>
								<img src={WhoWeAreXs} className="img-small"/>
								<div style={{paddingBottom: '66.6%'}}></div>
							</div>
						</div>
						<div className="col-12 col-md-5">
							<h2 className="mb-3">Who we are</h2>
							<div className="rjrv-decoration-block">
								<p>RJRVC combines tobacco expertise with innovative technology to provide adult
									tobacco consumers with enjoyable products. What started with vapor innovation
									has expanded into revolutionary products and categories to meet adult tobacco
									consumers’ evolving preferences.</p>
								<a className="rjrv-condensed text-uppercase text-spacing"
								   href="/about/who-we-are.html">
									<small class="arrow-right">Learn More</small>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)


export default ImageLeftBlock
