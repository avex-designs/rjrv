import React from "react"
import {graphql} from 'gatsby';

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import FullWidthContent from "../components/cmsSections/FullWidthContent";
import SimpleTitle from "../components/cmsSections/SimpleTitle";

const CMS1 = (data) => (
	<Layout pageSlug={data.data.single.title}>
		<SEO title={data.data.single.title.toUpperCase()} />
		<SimpleTitle data={data.data.single}/>
		<FullWidthContent data={data.data.single.textContent.childMarkdownRemark.html}/>
	</Layout>
)

export default CMS1

export const query = graphql`
  query CMS1SingleQuery($slug: String!) {
  	site {
      siteMetadata {
        title
      }
    }
    single: contentfulCmsOption1(slug: { eq: $slug }) {
		title
		slug
		bgColor
		bgPattern {
		  fluid(maxWidth: 1200) {
			src
		  }
		}
		textContent {
		  childMarkdownRemark {
			html
		  }
		}
	  }
  }
`;
