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
  query MediaQuery($skip: Int!) {
  site {
      siteMetadata {
        title
      }
    }
	posts: allContentfulBlogSingle(limit: 2, skip: $skip,  sort: {order: DESC, fields: createdAt}) {
		nodes {
		  title
		  slug
		  text {
			json
		  }
		  publishedDate(formatString: "MMMM DD, YYYY")
		  thumbnailImage {
			file {
			  url
			}
			fixed(width: 10) {
			  src
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
