import React from "react"

const HalfWidthContent = (props) => {
	let text1 = props.data1;
	let text2 = props.data2;
	return (
		<section className="section p-0 pt-sm-3 pt-lg-5 pb-sm-3 pb-lg-5">
			<div className="container container-large">
				<div className="row">
					<div className="col-12 col-lg-5 offset-lg-1">
						<div dangerouslySetInnerHTML={{__html: text1}}></div>
					</div>
					<div className="col-12 col-lg-5 offset-lg-1">
						<div dangerouslySetInnerHTML={{__html: text2}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}


export default HalfWidthContent
