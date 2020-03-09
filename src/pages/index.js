import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import Video from "../components/Video"
import tankerDrop from "../video/afp_3.mp4"
import videoPoster from "../images/afp_bg.png"
import styled from 'styled-components'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Video 
      autoPlay 
      muted 
      loop 
      playsinline 
      poster={videoPoster}
    >
      <source src={tankerDrop} type="video/mp4" />
    </Video>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage


const Video = styled.video`
  width: 100%;
`
