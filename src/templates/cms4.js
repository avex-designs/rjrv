import React from "react"
import {graphql} from 'gatsby';

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import LeadershipBlock from "../components/sections/LeadershipBlock";
import SimpleTitle from "../components/cmsSections/SimpleTitle";


const CMS4 = (data) => {
	let blocks = (blocks) => (
		blocks.map((item, i)=>{
			return <LeadershipBlock data={item} key={i}/>;
		})
	);
	return (
		<Layout>
			<SEO title={data.data.single.title}/>
			<SimpleTitle data={data.data.single}/>
			{blocks(data.data.single.blocks)}
		</Layout>
	)
}

export default CMS4

export const query = graphql`
  query CMS4SingleQuery($slug: String!) {
	  site {
		  siteMetadata {
			title
		  }
	  }
    single: contentfulCmsOption4(slug: { eq: $slug }) {
		title
		slug
		bgColor
		bgPattern {
		  fluid(maxWidth: 1200) {
			src
		  }
		}
		blocks {
		  bgColor
		  imagePosition {
			imagePosition
		  }
		  positions
		  title
		  text {
			text
		  }
		  image {
			sizes(maxWidth: 1200) {
			  ...GatsbyContentfulSizes
			}
		  }
		}
	  }
  }
`;
