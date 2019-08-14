import React from "react"

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import ImageTitle from "../components/cmsSections/ImageTitle";
import BlogPostsBlock from "../components/sections/BlogPostsBlock";

const Media = () => (
	<Layout>
		<SEO title="MEDIA" />
		<ImageTitle/>
		<BlogPostsBlock/>
	</Layout>
)

export default Media
