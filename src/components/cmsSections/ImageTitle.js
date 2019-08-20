import React from "react"
import Img from "gatsby-image"

const ImageTitle = (props) => {
	let data = props.data;

	let img = (data) => {
		if(data.thumbnailImage){
			return (
				<Img sizes={data.thumbnailImage.sizes} className="rjrv-placeholder"/>
			)
		}
	};
	let bgColor = (bgData) => {
		let bg = {};
		if (bgData.bgColor) {
			bg.backgroundColor = bgData.bgColor;
		}
		if(bgData.bgPattern){
			bg.backgroundImage = `url(${bgData.bgPattern.fluid.src})`;
		}
		return bg;
	};
	return (
		<section className="section section-inverse section-hero bg-pattern section-hero-pulldown section-hero-pattern section-sm-clean" style={bgColor(data)}>
			<div className="container container-large pt-sm-5">
				<div className="row align-items-center">
					<div className="col-12 col-sm-7 col-xl-6 p-0 order-sm-2">
						{img(data)}
					</div>
					<div className="col-12 col-sm-5 col-xl-6">
						<h1 className="rjrv-fadeInText">{data.title}</h1>
					</div>
				</div>
			</div>
		</section>
	)
}


export default ImageTitle
