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


const IndexPage = (data) => (
	<Layout>
		<SEO title="Home"/>
		<HeroBlock data={data.data.contentfulLandingPage}/>
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

export const pageQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  contentfulLandingPage {
    heroPreTitle
    heroTitle {
      heroTitle
    }
    heroImage {
      file {
        url
      }
      fixed(width: 10) {
        src
      }
    }
  }
}

`;
