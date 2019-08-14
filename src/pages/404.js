import React from "react"

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import SimpleTitle from "../components/cmsSections/SimpleTitle";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <SimpleTitle/>
  </Layout>
)

export default NotFoundPage
