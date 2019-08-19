import React from "react"

const ImageTitle = (props) => {
	let data = props.data;
	console.log(data);
	let img = (data) => {
		if(data.thumbnailImage){
			return (
				<div className="rjrv-placeholder" data-large={data.thumbnailImage.file.url}>
					<img src={data.thumbnailImage.fixed.src} className="img-small" alt={data.title}/>
					<div style={{paddingBottom: '66.6%'}}></div>
				</div>
			)
		}
	};
	let bgColor = (bgData) => {
		let bg = {};
		if (bgData.bgColor) {
			bg.backgroundColor = bgData.bgColor;
		}
		if(bgData.bgPattern){
			bg.backgroundImage = `url(${bgData.bgPattern.file.url})`;
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
