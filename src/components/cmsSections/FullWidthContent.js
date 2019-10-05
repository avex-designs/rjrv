import React from "react"

const FullWidthContent = (props) => {
	let text = props.data;
	return (
		<section className="section p-0 pt-sm-3 pt-lg-5 pb-sm-3 pb-lg-5">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div dangerouslySetInnerHTML={{__html: text}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}


export default FullWidthContent
