/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { withPrefix, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import MobileMenu from "./mobile_menu"
import "../../assets/css/main.css"
import Helmet from "react-helmet"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
        <Helmet>
            <link rel="stylesheet" href="https://use.typekit.net/nfa8sbv.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
            <script src={withPrefix('js/main.js')} type="text/javascript" />
        </Helmet>
        {/*<!-- Off Canvas Overlay -->*/}
        <div id="backgroundOverlay" className="offcanvas-overlay"></div>
        <MobileMenu/>
        <Header siteTitle={data.site.siteMetadata.title} currentMenuItem={props.pageSlug}/>
        <main className="responsive-text">{props.children}</main>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
