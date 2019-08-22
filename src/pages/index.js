import React from "react"
import {graphql} from 'gatsby';

import Layout from "../components/main/layout"


import SEO from "../components/main/seo"
import HeroBlock from "../components/sections/HeroBlock";
import QuoteBlock from "../components/sections/QuoteBlock";
import TextAreaBlock from "../components/sections/TextAreaBlock";
import ImageTextBlock from "../components/sections/ImageTextBlock";
import TestimonialsBlock from "../components/sections/TestimonialsBlock";
import BlogPostsBlock from "../components/sections/BlogPostsBlock";


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
		<BlogPostsBlock data={data.data.posts}/>
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
  posts: allContentfulBlogSingle(limit: 2, sort: {order: DESC, fields: createdAt}) {
    nodes {
      title
      text {
        childMarkdownRemark {
			html
		  }
      }
      createdAt(formatString: "MMMM DD, YYYY")
      externalUrl
      slug
      fileAttachment {
        file {
          url
        }
      }
      publishedDate(formatString: "MMMM DD, YYYY")
      thumbnailImage {
         sizes(maxWidth: 1200) {
				...GatsbyContentfulSizes
			  }
        }
    }
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
      quoteText
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
