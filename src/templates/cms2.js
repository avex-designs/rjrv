import React from "react"
import {graphql} from 'gatsby';

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import FullWidthContent from "../components/cmsSections/FullWidthContent";
import ImageTitle from "../components/cmsSections/ImageTitle";

const CMS2 = (data) => (
	<Layout>
		<SEO title={data.data.single.title} />
		<ImageTitle  data={data.data.single}/>
		<FullWidthContent data={data.data.single.text.json}/>
	</Layout>
)

export default CMS2

export const query = graphql`
  query CMS2SingleQuery($slug: String!) {
  site {
      siteMetadata {
        title
      }
    }
    single: contentfulCmsOption2(slug: { eq: $slug }) {
		title
		slug
		bgColor
		bgPattern {
		  fluid(maxWidth: 1200) {
			src
		  }
		}
		thumbnailImage {
		  sizes(maxWidth: 1200){
		  	...GatsbyContentfulSizes
		  }		  
		}
		text {
		  json
		}
	  }
  }
`;
