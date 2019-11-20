import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import Footer from '../../components/footer/footer-component'
import ShowreelCont from '../../components/showreel-container/showreel-container.component'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;`

const AboutHeader = styled.h1`
margin: 80px 0 0 0;
  @media screen and (max-width: 1000px) {
    font-size: 18px;
   
} 
`

const AboutSection = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column
  width: 100%;`


const AboutDescContainer = styled.div`
  text-align: left;
  width: 75%;
  @media screen and (max-width: 1000px) {
    text-align: center;
    width: 100%;

    h2 {
      font-size: 20px
      @media screen and (max-width: 1000px) {
        font-size: 16px
      }
    }
    p {
      font-size: 14px
    }
  }`
const DetailHeader = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 25px 0 5px 0
  font-weight: bold;`
const Details = styled.p`
  margin: 5px 0;
  text-decoration: none;
  color: black;
`

const AboutDesc = styled.p`
  @media screen and (max-width: 1000px) {
    padding: 0 15%;
  }
`  

const AboutTeamContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content:center;
  flex-flow: row wrap;

  * {
    padding: 0;
    margin: 2px 0;
    margin-right: 5px;
  }

  @media screen and (max-width: 1000px) {
   justify-content: center;
  }
  
  `

const ShowreelContainer = styled.div`
  width: 80%;
  overflow: hidden;
  margin-top: 5%;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }`  

const ContactDetails = styled.div`
    font-size: 22px;
    
   
`
const Link = styled.a`
  text-decoration: none;
    color: black;`
const VideoLinks = styled.img`
width: 35px;
margin: 5px;
@media screen and (max-width: 1000px) {
  width: 25px;
}
  `
  const LinkContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 65%;
    margin-left: 17.5%;
    text-align: left;
  }`

const About = () => {
  const [about, setAbout] = useState({
    header: '',
    desc: '',
    descHeader: '',
    teamMembers: [],
    vimeo: '',
    instagram: ''
  })
  useEffect(() => {
    const aboutQuery = `*[_type == "about"] {
      header, desc, phone, vimeo, instagram, email, descHeader, teamMembers[]->{name}
    }`
    sanityClient.fetch(aboutQuery).then(about => {

      about.forEach(about => {
       setAbout(about)
      })
    })
    return
  }, [])
 

    return (
       
      <AboutWrapper>
        <div>
          <AboutHeader>{about.header}</AboutHeader>
            <AboutSection>
                <AboutDescContainer>
                  <h2 style={{margin: '0'}}>{about.descHeader}</h2>
                  <AboutDesc>{about.desc} </AboutDesc>
                  <AboutTeamContainer>
                    <p >Founded by Charlie Rees, Edd Roberts and George Harper</p>
                  </AboutTeamContainer>
                  <ContactDetails>
                  <DetailHeader>Get in touch with us:</DetailHeader>
                    <LinkContainer>
                      <div>
                        <Link href={`mailto:${about.email}`}>
                        <Details>{about.email}</Details>
                        </Link>
                        <Link href={`tel:${about.phone}`}>
                        <Details>{about.phone}</Details>
                        </Link>
                      </div>
                      <div>
                        <a href="https://www.instagram.com/fuegofilmsldn/">
                        <VideoLinks alt="instagram Logo" src={urlFor(about.instagram).url()} />
                        </a>
                       <a href="https://vimeo.com/fuegofilmsltd">
                       <VideoLinks alt="vimeo Logo" src={urlFor(about.vimeo).url()} />
                       </a>
                       
                      </div>
                     
                    </LinkContainer>
                   
                  </ContactDetails>
                  
                </AboutDescContainer>
                <ShowreelContainer >
                 <ShowreelCont />
                </ShowreelContainer>
               
            </AboutSection>
            <Footer />
        </div>
      </AboutWrapper>
    )
}

export default About
