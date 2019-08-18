import React from "react"

const TextAreaBlock = (props) => {
	let text = props.data;
	let alignment = (position) =>{
		if(position === 'left'){
			return 'text-left';
		}else if(position === 'right'){
			return 'text-right';
		}else{
			return 'text-center';
		}
	};
	let bgColor = (bgcolor) => {
		if(bgcolor){
			return {backgroundColor: bgcolor};
		}
	};
	return (<section className="section section-inverse m-0 p-0 pt-sm-3 pt-5 pb-sm-3 pb-5 mt-sm-5 mb-sm-5" style={bgColor(text.bgColor)}>
		<div className="container container-large pt-5 pb-5">
			<div className="row pt-lg-5 pb-lg-3">
				<div className="col-12">
					<div className={`col-12 col-md-8 offset-md-2 ${alignment(text.alignment.alignment)}`}>
						<p>{text.text.text}</p>
					</div>
				</div>
			</div>
		</div>
	</section>)
}


export default TextAreaBlock
