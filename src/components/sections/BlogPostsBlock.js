import React from "react"
import BlockPost from "../sections/BlogPost"

const BlogPostsBlock = () => (
	<section className="section p-0 pt-sm-3 pt-lg-5 pb-sm-3 pb-lg-5">
		<div className="container container-large">
			<div className="row">
				<div className="col-12 text-center mt-3 mb-3">
					<h2>Press Releases</h2>
				</div>

				<BlockPost/>
				<BlockPost/>
			</div>
		</div>
	</section>
)


export default BlogPostsBlock
