import React, {Component} from "react"
import {graphql} from 'gatsby';

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import FullWidthContent from "../components/cmsSections/FullWidthContent";
import ImageTitle from "../components/cmsSections/ImageTitle";

const MediaSingle = (data) => (
	<Layout>
		<SEO title="MEDIA Single"/>
		<ImageTitle data={data.data.single}/>
		<FullWidthContent data={data.data.single.text.json}/>
	</Layout>
);

export default MediaSingle;

export const query = graphql`
  query MediaSingleQuery($slug: String!) {
  site {
      siteMetadata {
        title
      }
    }
    single: contentfulBlogSingle(slug: { eq: $slug }) {
      title
      slug
      text {
        json
      }
      thumbnailImage {
        file {
          url
        }
        fixed(width: 10) {
		  src
		}
      }
      createdAt(formatString: "MMMM DD, YYYY")
	  bgColor
	  bgPattern{
	  	  file {
			url
		  }
	  }
	  publishedDate(formatString: "MMMM DD, YYYY")
    }
  }
`;
