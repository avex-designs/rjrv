import React from "react"
import {Link} from "gatsby"

import Layout from "../components/main/layout"


import SEO from "../components/main/seo"
import HeroBlock from "../components/sections/HeroBlock";
import QuoteBlock from "../components/sections/QuoteBlock";
import TextAreaBlock from "../components/sections/TextAreaBlock";
import ImageLeftBlock from "../components/sections/ImageLeftBlock";
import ImageRightBlock from "../components/sections/ImageRightBlock";
import TestimonialsBlock from "../components/sections/TestimonialsBlock";
import BlogPostsBlock from "../components/sections/BlogPostsBlock";


const IndexPage = () => (
	<Layout>
		<SEO title="Home"/>
		<HeroBlock/>
		<QuoteBlock/>
		<TextAreaBlock/>
		<ImageLeftBlock/>
		<ImageRightBlock/>
		<ImageLeftBlock/>
		<TestimonialsBlock/>
		<BlogPostsBlock/>
	</Layout>
)

export default IndexPage
