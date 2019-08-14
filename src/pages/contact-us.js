import React from "react"
import { Link } from "gatsby"

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import ImageTitle from "../components/cmsSections/ImageTitle";
import HalfWidthContent from "../components/cmsSections/HalfWidthContent";

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
      <ImageTitle/>
      <HalfWidthContent/>
  </Layout>
)

export default ContactUs
