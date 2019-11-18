import React from "react"
import TextBlock from "../sections/TextBlock"

const SimpleTextBlock = (props) => {
	let posts = props.data;

	let postsList = (allPosts) => (

		allPosts.map((item, i) => {
			return <TextBlock key={i} data={item} length={allPosts.length <= 1 ? 'offset-md-3' : ''} />
		})
	);

	return (
		<section className="section p-0 pt-sm-3 pt-lg-5 pb-sm-3 pb-lg-5">
		<div className="container container-large">
			<div className="row">
				<div className="col-12 text-center mt-3 mb-3">
					<h2>{posts.title}</h2>
				</div>
				{postsList(posts.pages)}
			</div>
		</div>
	</section>
	)
}


export default SimpleTextBlock
