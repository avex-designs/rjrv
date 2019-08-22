import React from "react"

const SimpleTitle = (props) => {
	let data = props.data;

	let bgColor = (bgData) => {
		let bg = {};
		if(bgData){
			if (bgData.bgColor) {
				bg.backgroundColor = bgData.bgColor;
			}
			if(bgData.bgPattern){
				bg.backgroundImage = `url(${bgData.bgPattern.fluid.src})`;
			}
		}
		return bg;
	};
	return (
		<section className="section section-inverse section-hero bg-pattern section-hero-pattern" style={bgColor(data)}>
			<div className="container container-large pt-5 pb-5">
				<div className="row align-items-center">
					<div className="col-12 col-sm-8 offset-sm-2 text-center">
						<h1 className="rjrv-fadeInText">{data.title}</h1>
					</div>
				</div>
			</div>
		</section>
	)
}


export default SimpleTitle
