import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

const BlogPost = (props) => {
	let post = props.data;
	let link = (link) => {
		if(link.externalUrl){
			return (
				<a className="rjrv-condensed text-uppercase text-spacing"
				   href={link.externalUrl} target="__blank" rel="noopener noreferrer">
					<small className="arrow-right">Read article</small>
				</a>
			)
		}else if(link.fileAttachment){
			return (
				<a className="rjrv-condensed text-uppercase text-spacing"
					  href={link.fileAttachment.file.url} target="__blank" rel="noopener noreferrer">
					<small className="arrow-right">Read article</small>
				</a>
			)
		}else{
			return (
				<Link className="rjrv-condensed text-uppercase text-spacing"
					  to={`/media/${link.slug}`}>
					<small className="arrow-right">Read article</small>
				</Link>
			)
		}
	};
	let img = (data) => {
		if(data.thumbnailImage){
			if(data.externalUrl){
				return (
					<a className="rjrv-condensed text-uppercase text-spacing arrow-right"
					   href={data.externalUrl} target="_blank" rel="noopener noreferrer">
						<Img sizes={data.thumbnailImage.sizes} className="rjrv-placeholder"/>
					</a>
				)
			}else if(data.fileAttachment){
				return (
					<a className="rjrv-condensed text-uppercase text-spacing arrow-right"
						  href={data.fileAttachment.file.url} target="_blank" rel="noopener noreferrer">
						<Img sizes={data.thumbnailImage.sizes} className="rjrv-placeholder"/>
					</a>
				)
			}else{
				return (
					<Link className="rjrv-condensed text-uppercase text-spacing arrow-right"
						  to={`/media/${data.slug}`} rel="noopener noreferrer">
						<Img sizes={data.thumbnailImage.sizes} className="rjrv-placeholder"/>
					</Link>
				)
			}
		}
	};
	let date = (date) => {
		if(date.publishedDate){
			return (
				<p className="mt-5 rjrv-condensed">
					<small>
						<time className="text-uppercase text-spacing text-gold text-decoration"
							  dateTime={date.publishedDate}>{date.publishedDate}
						</time>
					</small>
				</p>
			)
		}else{
			return (
				<p className="mt-5 rjrv-condensed">
					<small>
						<time className="text-uppercase text-spacing text-gold text-decoration"
							  dateTime={date.createdAt}>{date.createdAt}
						</time>
					</small>
				</p>
			)
		}

	};
	return (
		<article className="col-12 col-md-6 pb-5 pr-lg-5">
			{img(post)}
			{date(post)}
			<h3>{post.title}</h3>
			<p dangerouslySetInnerHTML={{__html: post.text.childMarkdownRemark.html}}></p>
			{link(post)}
		</article>
	)
};


export default BlogPost
