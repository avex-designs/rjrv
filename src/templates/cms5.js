import React from "react"
import {graphql} from 'gatsby';

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import AdvancedTitle from "../components/cmsSections/AdvancedTitle";
import ImageTextBlock from "../components/sections/ImageTextBlock";
import TextAreaBlock from "../components/sections/TextAreaBlock";


const CMS5 = (data) => {
	let imageBlocks = (blocks) => (
		blocks.map((item, i)=>{
			return <ImageTextBlock data={item} key={i} section={`section-${i}`}/>;
		})
	);
	return (
		<Layout pageSlug={data.data.single.preTitle}>
			<SEO title={data.data.single.title.toUpperCase()}/>
			<AdvancedTitle data={data.data.single}/>
			{imageBlocks(data.data.single.imageTextBlock)}
			<TextAreaBlock data={data.data.single.textArea}/>
		</Layout>
	)
}

export default CMS5

export const query = graphql`
  	query CMS5SingleQuery($slug: String!) {
	  site {
		siteMetadata {
		  title
		}
	  }
	  single: contentfulCmsOption5(slug: { eq: $slug }) {
		title
		titleShortText {
		  childMarkdownRemark {
        html
      }
		}
		slug
		preTitle
		linkText
		imageTextBlock {
		  urlText
		  url
		  title
		  text {
			childMarkdownRemark {
				html
			  }
		  }
		  imagePosition {
			imagePosition
		  }
		  image {
			sizes(maxWidth: 1200){
				...GatsbyContentfulSizes
			}
		  }
		}
		textArea {
		  text {
			text
		  }
		  highligted
		  bgColor
		  alignment {
			alignment
		  }
		}
	  }
	}
`;
