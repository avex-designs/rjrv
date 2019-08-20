import React from "react"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"

const HalfWidthContent = (props) => {
	let text1 = props.data1;
	let text2 = props.data2;
	return (
		<section className="section p-0 pt-sm-3 pt-lg-5 pb-sm-3 pb-lg-5">
			<div className="container container-large">
				<div className="row">
					<div className="col-12 col-lg-5 offset-lg-1">
						{documentToReactComponents(text1)}
					</div>
					<div className="col-12 col-lg-5 offset-lg-1">
						{documentToReactComponents(text2)}
					</div>
				</div>
			</div>
		</section>
	)
}


export default HalfWidthContent
