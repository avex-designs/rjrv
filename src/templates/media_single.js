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
          sizes(maxWidth: 1200){
		  	...GatsbyContentfulSizes
		  }
        }
      createdAt(formatString: "MMMM DD, YYYY")
	  bgColor
	  bgPattern{
	  	  fluid(maxWidth: 1200) {
				src
			  }
	  }
	  publishedDate(formatString: "MMMM DD, YYYY")
    }
  }
`;
