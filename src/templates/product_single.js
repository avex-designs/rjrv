import React from "react"
import {graphql} from 'gatsby';

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import FullWidthContent from "../components/cmsSections/FullWidthContent";
import ImageTitle from "../components/cmsSections/ImageTitle";

const ProductSingle = (data) => (
	<Layout>
		<SEO title={data.data.single.title} />
		<ImageTitle  data={data.data.single}/>
		<FullWidthContent data={data.data.single.text.json}/>
	</Layout>
)

export default ProductSingle

export const query = graphql`
 query ProductsQuery($slug: String!) {
  site {
      siteMetadata {
        title
      }
    }
    single: contentfulProducts(slug: { eq: $slug }) {
		title
		slug
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
