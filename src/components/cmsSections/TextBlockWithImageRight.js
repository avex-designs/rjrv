import React from "react"
import HomeImage from "../../assets/img/home.jpg";
import HomeImageXs from "../../assets/img/home-xs.jpg";

const TextBlockWithImageRight = () => (
	<section className="section section-inverse p-0 pt-sm-3 pt-5 pb-sm-3 pb-5 mt-5 mb-5">
		<div className="container container-large pt-5 pb-5">
			<div className="row">
				<div className="col-12">
					<div className="row align-items-center">
						<div className="col-12 col-md-6 order-md-2">
							<div className="rjrv-placeholder rjrv-placeholder-sm" data-large="/assets/img/rachel.jpg">
								<img src="/assets/img/rachel-xs.jpg" className="img-small" />
								<div style={{paddingBottom: '66.6%'}}></div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<h2 className="mb-3">Rachael Claxton</h2>
							<div className="rjrv-decoration-block rjrv-condensed mb-5 text-spacing">
								<span className="d-block m-0"><small>Senior Vice President, Vapor</small></span>
								<span className="d-block m-0"><small>R. J. Reynolds Vapor Company</small></span>
							</div>
							<p>Rachael Claxton leads the next generation vapor business unit and is a key driver in accelerating RJRVC’s progress in transforming tobacco.</p>
							<p>“Innovative culture. That’s exactly who and what we are, and that means something more than simply innovative products,” said Rachael.</p>
							<p>Rachael earned her MBA from Emory University’s Goizueta Business School and a BA in Geological Sciences from Northwestern University. Rachael’s interest in business started with a role at Ben and Jerry’s. She loves the great outdoors and spending time in the mountains hiking, biking, and canoeing with her husband and their two children.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)


export default TextBlockWithImageRight
