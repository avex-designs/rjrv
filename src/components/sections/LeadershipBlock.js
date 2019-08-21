import React from "react"
import Img from "gatsby-image"

const LeadershipBlock = (props) => {
	let data = props.data;
	let bgColor = (bgcolor) => {
		if (bgcolor) {
			return {backgroundColor: bgcolor};
		}
	};
	let img = (data) => {
		if (data.image) {
			let offset = '';
			if(data.imagePosition && data.imagePosition.imagePosition === 'right'){
				offset = 'order-md-2';
			}
			return (
				<div className={`col-12 col-md-6 ${offset}`}>
					<Img sizes={data.image.sizes} className={`rjrv-placeholder rjrv-placeholder-sm`}/>
				</div>
			)
		}
	};
	let posRight = (data) => {
		return (
			<>
			<div className="col-12 col-md-6">
				<h2 className="mb-3">{data.title}</h2>
				<div className="rjrv-decoration-block rjrv-condensed mb-5 text-spacing">
					<span className="d-block m-0"><small>President, R. J. Reynolds Vapor Company (RJRVC)</small></span>
					<span className="d-block m-0"><small>President, RAI Innovations Company (RAIIC)</small></span>
				</div>
				<p dangerouslySetInnerHTML={{__html: data.text.childMarkdownRemark.html}}></p>
			</div>
			{img(data)}
			</>
		)
	};
	let posLeft = (data) => {
		return (
			<>
			{img(data)}
			<div className="col-12 col-md-6">
				<h2 className="mb-3">{data.title}</h2>
				<div className="rjrv-decoration-block rjrv-condensed mb-5 text-spacing">
					<span className="d-block m-0"><small>President, R. J. Reynolds Vapor Company (RJRVC)</small></span>
					<span className="d-block m-0"><small>President, RAI Innovations Company (RAIIC)</small></span>
				</div>
				<p dangerouslySetInnerHTML={{__html: data.text.childMarkdownRemark.html}}></p>
			</div>
			</>
		)
	};
	let alignment = (data) => {
		if (data.imagePosition) {
			if (data.imagePosition.imagePosition === 'right') {
				return posRight(data);
			} else {
				return posLeft(data);
			}
		} else {
			return posLeft(data);
		}
	};
	let defaultBGColor = (data) => {
		if (data.imagePosition) {
			if (data.imagePosition.imagePosition === 'right') {
				return 'section-inverse';
			}
		}
		return '';
	};
	let topOffset = (data) => {
		if (data.imagePosition) {
			if (data.imagePosition.imagePosition === 'right') {
				return 'pt-5 pb-5';
			}
		}
		return '';
	};
	return (
		<section className={`section p-0 pt-sm-3 pt-5 pb-sm-3 pb-5 mt-5 mb-5 ${defaultBGColor(data)}`} style={bgColor(data.bgColor)}>
			<div className={`container container-large ${topOffset(data)}`}>
				<div className="row">
					<div className="col-12">
						<div className="row align-items-center">
							{alignment(data)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


export default LeadershipBlock
