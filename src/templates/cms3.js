import React from "react"
import {graphql} from 'gatsby';

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import ImageTitle from "../components/cmsSections/ImageTitle";
import HalfWidthContent from "../components/cmsSections/HalfWidthContent";

const CMS3 = (data) => (
	<Layout>
		<SEO title={data.data.single.title}/>
		<ImageTitle  data={data.data.single}/>
		<HalfWidthContent  data1={data.data.single.textColumnLeft.json} data2={data.data.single.textColumnRight.json}/>
	</Layout>
)

export default CMS3

export const query = graphql`
  query CMS3SingleQuery($slug: String!) {
	  site {
		  siteMetadata {
			title
		  }
	  }
    single: contentfulCmsOption3(slug: { eq: $slug }) {
		title
		slug
		bgColor
		bgPattern {
		  fluid(maxWidth: 1200) {
			src
		  }
		}
		textColumnLeft {
		  json
		}
		textColumnRight {
		  json
		}
		thumbnailImage {
		  sizes(maxWidth: 1200){
		  	...GatsbyContentfulSizes
		  }
		}
	  }
  }
`;
