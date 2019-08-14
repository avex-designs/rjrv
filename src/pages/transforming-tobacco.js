import React from "react"
import { Link } from "gatsby"

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import AdvancedTitle from "../components/cmsSections/AdvancedTitle";
import ImageLeftBlock from "../components/sections/ImageLeftBlock";
import ImageRightBlock from "../components/sections/ImageRightBlock";
import TextAreaBlock from "../components/sections/TextAreaBlock";
import TitleAreaBlock from "../components/sections/TitleAreaBlock";

const TransformingTobacco = () => (
	<Layout>
		<SEO title="Transforming Tobacco" />
		<AdvancedTitle/>
		<ImageLeftBlock/>
		<ImageRightBlock/>
		<ImageLeftBlock/>
		<ImageRightBlock/>
		<ImageLeftBlock/>
		<TitleAreaBlock/>
	</Layout>
)

export default TransformingTobacco
