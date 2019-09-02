import React from "react"
import {graphql, Link} from 'gatsby';
import styled from 'styled-components';

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import ImageTitle from "../components/cmsSections/ImageTitle";
import BlogPostsBlock from "../components/sections/BlogPostsBlock";
import MediaContact from "../components/sections/MediaContact";

const Media = (data) => {
	const PaginationWrapper = styled.div`
		ul{
			padding: 0;
			list-style: none;
			li{
				display: inline-block;
					
					a{
						color: #fff;
						text-align: center;
						margin: 0 5px;
						padding: 0 5px;
						    width: 30px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
						background: #1d427a;
						display: inline-block;
						
						&:hover{
						 background: #4c596e;
    					 transition: all 0.35s;
					}
					}
					a.current{
						cursor: not-allowed;
					 	background: #4d5a6f;
					}
					
			}
		}
	
	`;
	let pageInfo = data.data.posts.pageInfo;
	let totalCount = data.data.posts.totalCount;
	let pagination = () => {
		const isFirst = pageInfo.currentPage === 1;
		const prevPage = pageInfo.currentPage - 1 === 1 ? "/" : (pageInfo.currentPage - 1).toString();
		const nextPage = (pageInfo.currentPage + 1).toString();
		const totalPages = Math.ceil(totalCount/2);
		const isLast = pageInfo.currentPage === totalPages;

		if(totalPages > 1){
			return <PaginationWrapper><div className="container container-large"><div className="row justify-content-center">
				<div className="pagination">
					<ul>
						{!isFirst && (
							<li>
								<Link to={`/media/${prevPage}`} className="arrows" rel="prev">
									&lt;
								</Link>
							</li>
						)}
						{Array.from({length: totalPages}, (_, i) => (
							<li key={`pagination-number${i + 1}`}>
								<Link  to={`/media/${i === 0 ? "" : i + 1}`} className={(i+1) === pageInfo.currentPage?'current':''}>
									{i + 1}
								</Link>
							</li>
						))}
						{!isLast && (
							<li>
								<Link to={`/media/${nextPage}`}  className="arrows" rel="next">
									&gt;
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div></div>
			</PaginationWrapper>
		}else{
			return null;
		}

	};
	return(
		<Layout pageSlug={data.data.media.title}>
			<SEO title={data.data.media.title.toUpperCase()} />
			<ImageTitle data={data.data.media}/>
			<BlogPostsBlock data={data.data.posts}/>
			{pagination()}
			<MediaContact data={data.data.media}/>
		</Layout>
	)
}

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
			childMarkdownRemark {
				html
			  }
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
