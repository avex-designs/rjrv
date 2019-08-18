import React from "react"

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import AdvancedTitle from "../components/cmsSections/AdvancedTitle";
import ImageTextBlock from "../components/sections/ImageTextBlock";
import TitleAreaBlock from "../components/sections/TitleAreaBlock";

const TransformingTobacco = () => (
	<Layout>
		<SEO title="Transforming Tobacco" />
		<AdvancedTitle/>
		<ImageTextBlock/>
		<TitleAreaBlock/>
	</Layout>
)

export default TransformingTobacco
