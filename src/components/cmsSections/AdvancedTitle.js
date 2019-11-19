import React from "react"

const AdvancedTitle = (props) => {
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
			<div className="container container-large pt-5 pb-5 mb-5">
				<div className="row align-items-center">
					<div className="col-12 col-sm-9 mt-lg-5 pt-lg-5">
						<div className="rjrv-decoration-block"><span className="rjrv-condensed text-uppercase">{data.preTitle}</span>
						</div>
						<h1 className="rjrv-fadeInText rjrv-section-title-lg">{data.title}</h1>
						<p className="rjrv-half-max-lg">{data.titleShortText.childMarkdownRemark.html.replace(/(<p)/igm, '<div').replace(/<\/p>/igm, '</div>')}</p>
						<p><a href="#section-0" className="arrow-down">{data.linkText}</a></p>
					</div>
				</div>
			</div>
		</section>
	)
}


export default AdvancedTitle
