import React from "react"
import BlockPost from "../sections/BlogPost"

const BlogPostsBlock = (props) => {
	let posts = props.data;

	let postsList = (allPosts) => (
		allPosts.map((item, i) => {
			return <BlockPost key={i} data={item}/>
		})
	);
	return (
		<section className="section p-0 pt-sm-3 pt-lg-5 pb-sm-3 pb-lg-5">
		<div className="container container-large">
			<div className="row">
				<div className="col-12 text-center mt-3 mb-3">
					<h2>Press Releases</h2>
				</div>
				{postsList(posts.nodes)}
			</div>
		</div>
	</section>
	)
}


export default BlogPostsBlock
