import React from "react"
import {graphql} from 'gatsby';

import Layout from "../components/main/layout"


import SEO from "../components/main/seo"
import HeroBlock from "../components/sections/HeroBlock";
import QuoteBlock from "../components/sections/QuoteBlock";
import TextAreaBlock from "../components/sections/TextAreaBlock";
import ImageTextBlock from "../components/sections/ImageTextBlock";
import TestimonialsBlock from "../components/sections/TestimonialsBlock";
import SimpleTextBlock from "../components/sections/SimpleTextBlock";


const IndexPage = (data) => {
	let imageBlocks = (blocks) => (
		blocks.map((item, i)=>{
			return <ImageTextBlock data={item} key={i}/>;
		})
	);
	return (<Layout>
		<SEO title="Home"/>
		<HeroBlock data={data.data.home}/>
		<QuoteBlock data={data.data.home}/>
		<TextAreaBlock data={data.data.home.textArea}/>
		{imageBlocks(data.data.home.imageTextBlocks)}
		<TestimonialsBlock data={data.data.home.testimonial}/>
		<SimpleTextBlock data={data.data.pageBlock}/>
		{/*<BlogPostsBlock data={data.data.posts}/>*/}
	</Layout>)
}

export default IndexPage

export const pageQuery = graphql`
query HomeQuery {
  site {
    siteMetadata {
      title
    }
  }
  pageBlock:   contentfulSimplePageBlock {
    pages {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      textContent {
        childMarkdownRemark {
          excerpt(format: MARKDOWN, pruneLength: 350)
        }
      }
      slug
    }
    title
  }
  home: contentfulLandingPage {
    heroPreTitle
    heroTitle {
      heroTitle
    }
    heroLinkText
    heroUrl
    heroImage {
      sizes(maxWidth: 1200) {
				...GatsbyContentfulSizes
			  }
    }
    quoteText {
      childMarkdownRemark {
        html
      }
    }
    quoteAuthor
    textArea {
      bgColor
      alignment {
        alignment
      }
      text {
        text
      }
      highligted
    }
    testimonial {
      bgColor
      testimonialAuthor
      testimonialText {
        testimonialText
      }
    }
    imageTextBlocks {
      bgColor
      imagePosition {
        imagePosition
      }
      text {
        childMarkdownRemark {
			html
		  }
      }
      title
      url
      urlText
      image {
       sizes(maxWidth: 1200) {
				...GatsbyContentfulSizes
			  }
      }
    }
  }
}

`;
