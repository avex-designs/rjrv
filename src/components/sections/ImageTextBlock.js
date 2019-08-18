import React from "react"
import {Link} from "gatsby"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"

const ImageLeftBlock = (props) => {
	let blockData = props.data;
	let bgColor = (bgcolor) => {
		if (bgcolor) {
			return {backgroundColor: bgcolor};
		}
	};
	let link = (data) => {
		if (data.url) {
			return <Link className="rjrv-condensed text-uppercase text-spacing"
						 to={data.url}>
				<small className="arrow-right">{data.urlText}</small>
			</Link>
		}
	};
	let img = (data) => {
		if (data.image) {
			return (
				<div className="col-12 col-md-6">
					<div className="rjrv-placeholder rjrv-placeholder-sm" data-large={data.image.file.url}>
						<img src={data.image.fixed.src} className="img-small" alt={data.title}/>
						<div style={{paddingBottom: '66.6%'}}></div>
					</div>
				</div>
			)
		}
	};
	let posRight = (data) => {
		return (
			<>
			<div className="col-12 col-md-5">
				<h2 className="mb-3">{data.title}</h2>
				<div className="rjrv-decoration-block">
					{documentToReactComponents(data.text.json)}
					{link(data)}
				</div>
			</div>
			{img(data)}
			</>
		)
	};
	let posLeft = (data) => {
		return (
			<>
			{img(data)}
			<div className="col-12 col-md-5">
				<h2 className="mb-3">{data.title}</h2>
				<div className="rjrv-decoration-block">
					{documentToReactComponents(data.text.json)}
					{link(data)}
				</div>
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
	};
	return (
		<section className={`section m-0 p-0 pt-sm-3 pt-5 pb-sm-3 pb-5 mt-sm-5 mb-sm-5 ${defaultBGColor(blockData)}`}
				 style={bgColor(blockData.bgColor)}>
			<div className="container container-large pt-5 pb-5">
				<div className="row pt-lg-5 pb-lg-5">
					<div className="col-12">
						<div className="row align-items-center">
							{alignment(blockData)}
						</div>
					</div>
				</div>
			</div>
		</section>)
}


export default ImageLeftBlock
