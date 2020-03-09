import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Video from "../components/Video"
import tankerDrop from "../video/afp_3.mp4"
import videoPoster from "../images/afp_bg.png"
import styled from 'styled-components'

import ClassCard from '../components/ClassCard'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Video 
        autoPlay 
        muted 
        loop 
        playsinline 
        poster={videoPoster}
      >
        <source src={tankerDrop} type="video/mp4" />
        <h1>Test Test</h1>
      </Video>
    </Hero>
    <Title>
      <HeroTitle>
        Anchor Flank <br/> & Pinch
      </HeroTitle>
      <HeroText>
        Leaders in aerial wildland firefighter training.
      </HeroText>
    </Title>
    <ClassCard />
    {/* <Image  src={"gatsby-astronaut.png"}/> */}
  </Layout>
)

export default IndexPage


const Title = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content:center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Video = styled.video`
  width: 100vw;
  background-size: cover;
`

const Hero = styled.div`
  position:fixed;
  z-index:-1;
  width: 100vw;
  height: 100%;
  color: white;
`
const HeroTitle = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-weight: 100; 
  color: white;
  font-size: 3.5rem;
`

const HeroText = styled.p`
  font-family: 'Roboto Slab', serif;
  font-weight: 100; 
  color: white;
  font-style: italic;

`
