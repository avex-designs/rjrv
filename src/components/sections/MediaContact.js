import React from "react"

const MediaContact = (props) => {
	let data = props.data;
	let phone = (data) => {
		if (data.contactBlockPhone) {
			return <li className="icon-telephone mb-2"><a href={`tel:+1${data.contactBlockPhone.replace(/\D/g, '')}`}
														  title={`Call us at ${data.contactBlockPhone}`}>
				<small>{data.contactBlockPhone}</small>
			</a></li>;
		}
	};
	let email = (data) => {
		if (data.contactBlockEmail) {
			return <li className="icon-mail"><a href={`mailTo:${data.contactBlockEmail}`}
												title={`Email us at ${data.contactBlockEmail}`}>
				<small>{data.contactBlockEmail}</small>
			</a></li>;
		}
	};

	return (
		<section className="section-inverse pt-3 pb-3 pt-sm-5 pb-sm-5">
			<div className="container container-large">
				<div className="row">
					<div className="col-12 col-md-6 pb-5 pl-lg-5 mt-sm-5 mb-sm-4">
						<h2>{data.contactBlockTitle}</h2>
						<h4 className="mb-0">{data.contactBlockName}</h4>
						<p className="mt-0 mb-3">{data.contactBlockDescription}</p>
						<ul className="list-unstyled mt-0">
							{phone(data)}
							{email(data)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}


export default MediaContact
