import React from "react"
import { Link } from "gatsby"

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import SimpleTitle from "../components/cmsSections/SimpleTitle";
import TextBlockWithImageLeft from "../components/cmsSections/TextBlockWithImageLeft";
import TextBlockWithImageRight from "../components/cmsSections/TextBlockWithImageRight";

const Leadership = () => (
	<Layout>
		<SEO title="Leadership" />
		<SimpleTitle/>
		<TextBlockWithImageLeft/>
		<TextBlockWithImageRight/>
		<TextBlockWithImageLeft/>
	</Layout>
)

export default Leadership
