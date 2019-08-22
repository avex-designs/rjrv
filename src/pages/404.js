import React from "react"

import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import SimpleTitle from "../components/cmsSections/SimpleTitle";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <section className="section section-inverse section-hero bg-pattern section-hero-pattern">
          <div className="container container-large pt-5 pb-5">
              <div className="row align-items-center">
                  <div className="col-12 col-sm-8 offset-sm-2 text-center">
                      <h1 className="rjrv-fadeInText">404 Not Found</h1>
                  </div>
              </div>
          </div>
      </section>
  </Layout>
)

export default NotFoundPage
