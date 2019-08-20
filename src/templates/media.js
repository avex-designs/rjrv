import React from "react"
import {graphql} from 'gatsby';
import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import ImageTitle from "../components/cmsSections/ImageTitle";
import BlogPostsBlock from "../components/sections/BlogPostsBlock";

const Media = (data) => (
	<Layout>
		<SEO title="MEDIA" />
		<ImageTitle data={data.data.media}/>
		<BlogPostsBlock data={data.data.posts}/>
	</Layout>
)

export default Media

export const query = graphql`
  query MediaQuery($skip: Int!, $limit: Int!) {
  site {
      siteMetadata {
        title
      }
    }
	posts: allContentfulBlogSingle(limit: $limit, skip: $skip,  sort: {order: DESC, fields: publishedDate}) {
		nodes {
		  title
		  slug
		  text {
			json
		  }
		  publishedDate(formatString: "MMMM DD, YYYY")
		  thumbnailImage {
			  sizes(maxWidth: 1200) {
				...GatsbyContentfulSizes
			  }
			}
		  externalUrl
		  fileAttachment {
			file {
			  url
			}
		  }
		  createdAt(formatString: "MMMM DD, YYYY")
		  bgColor
		  bgPattern {
			fluid(maxWidth: 1200) {
				src
			  }
		  }
		}
		totalCount
		pageInfo {
		  currentPage
		}
  }
  media: contentfulBlog {
    title
    slug
    bgColor
    bgPattern {
      file {
        url
      }
    }
    contactBlockTitle
    contactBlockName
    contactBlockPhone
    contactBlockEmail
    contactBlockDescription
    thumbnailImage {
      sizes(maxWidth: 1200) {
				...GatsbyContentfulSizes
		}
    }
  }
}
`;
