import React from "react"
import { Link } from "gatsby"

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import SimpleTitle from "../components/cmsSections/SimpleTitle";
import FullWidthContent from "../components/cmsSections/FullWidthContent";

const PrivacyPolicy = () => (
	<Layout>
		<SEO title="PrivacyPolicy" />
		<SimpleTitle/>
		<FullWidthContent/>
	</Layout>
)

export default PrivacyPolicy
