import React from "react"

const TestimonialsBlock = (props) => {
	let testimonial = props.data;
	let bgColor = (bgcolor) => {
		if (bgcolor) {
			return {backgroundColor: bgcolor};
		}
	};
	return (
		<section className="section section-inverse m-0 p-0 pt-sm-3 pt-5 pb-sm-3 pb-5 mt-sm-5 mb-sm-5"
				 style={bgColor(testimonial.bgColor)}>
			<div className="container container-large pt-5 pb-5">
				<div className="row pt-lg-5 pb-lg-5">
					<div className="col-12">
						<div className="row align-items-center pt-sm-5">
							<div
								className="col-12 col-lg-10 offset-lg-1 text-center rjrv-quote-text rjrv-quote-gold rjrv-quote-center">
								<blockquote cite="/"
											dangerouslySetInnerHTML={{__html: testimonial.testimonialText.testimonialText}}>
								</blockquote>
								<p className="rjrv-condensed mt-5">{testimonial.testimonialAuthor}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};


export default TestimonialsBlock
