import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

const TextBlock = (props) => {
	const regex = /^[\s\S]*?<p>|<\/p>[\s\S]*$/g;
	const subst = ``;
	let post = props.data;
	let length = props.length;
	// let link = (link) => {
	// 	return (
	// 		<Link className="rjrv-condensed text-uppercase text-spacing"
	// 			  to={link.slug}>
	// 			<small className="arrow-right">Read article</small>
	// 		</Link>
	// 	)
	// };

	let date = (date) => {
		return (
			<p className="mt-5 rjrv-condensed">
				<small>
					<time className="text-uppercase text-spacing text-gold text-decoration"
						  dateTime={date.createdAt}>{date.createdAt}
					</time>
				</small>
			</p>
		)

	};
	return (
		<article className={`col-12 col-md-6 pb-5 pr-lg-5 ${length}`}>
			{date(post)}
			<h3>{post.title}</h3>
			<div dangerouslySetInnerHTML={{__html: post.textContent.childMarkdownRemark.excerpt.replace(regex, subst)}}></div>
			{link(post)}
		</article>
	)
};


export default TextBlock
