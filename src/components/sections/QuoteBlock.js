import React from "react"

const QuoteBlock = (props) => {
	let quote = props.data;
	return (
		<section className="section">
			<div className="container container-large">
				<div className="row">
					<div className="col-12">
						<div className="row align-items-center">
							<div className="col-12 col-lg-5 rjrv-quote-text">
								<blockquote cite="/" dangerouslySetInnerHTML={{__html: quote.quoteText.childMarkdownRemark.html.replace(/(<p)/igm, '<div').replace(/<\/p>/igm, '</div>')}}>
								</blockquote>
								<p className="rjrv-condensed mt-5">{quote.quoteAuthor}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};


export default QuoteBlock
