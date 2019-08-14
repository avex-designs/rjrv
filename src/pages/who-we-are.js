import React from "react"
import { Link } from "gatsby"

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import ImageTitle from "../components/cmsSections/ImageTitle";
import FullWidthContent from "../components/cmsSections/FullWidthContent";

const WhoWeAre = () => (
	<Layout>
		<SEO title="Who We Are" />
		<ImageTitle/>
		<FullWidthContent/>
	</Layout>
)

export default WhoWeAre
