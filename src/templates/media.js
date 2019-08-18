import React from "react"
import {graphql} from 'gatsby';
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

export const query = graphql`
  query MediaQuery($skip: Int!, $limit: Int!) {
  site {
      siteMetadata {
        title
      }
    }
	posts: allContentfulBlogSingle(limit: $limit, skip: $skip,  sort: {order: DESC, fields: createdAt}) {
		nodes {
		  title
		  slug
		  text {
			json
		  }
		  publishedDate
		  thumbnailImage {
			file {
			  url
			}
			fixed(width: 10) {
			  src
			}
		  }
		  externalUrl
		  createdAt
		  bgColor
		  bgPattern {
			file {
			  url
			}
		  }
		}
		totalCount
		pageInfo {
		  currentPage
		}
  }
}
`;
