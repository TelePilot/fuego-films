import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import Particles from 'react-particles-js'
import Footer from '../../components/footer/footer-component'
import ShowreelCont from '../../components/showreel-container/showreel-container.component'

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
  font-size: 18px;
  margin: 25px 0 5px 0`
const Details = styled.p`
  margin: 5px 0;

`

const AboutDesc = styled.p`
  @media screen and (max-width: 1000px) {
    padding: 0 15%;
  }
`  

const AboutTeamContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content:flex-start;
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

const About = () => {
  const [about, setAbout] = useState({
    header: '',
    desc: '',
    descHeader: '',
    teamMembers: []
  })
  useEffect(() => {
    const aboutQuery = `*[_type == "about"] {
      header, desc, phone, email, descHeader, teamMembers[]->{name}
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
            {/* <Particles className="particles"
                params={{
                  "particles": {
                    "number":{
                      "value":70,
                      
                    },
                      "color":{
                        "value":"#fd7907"
                      },
                      "opacity":{
                        "value":0.8,
                        "random":true,
                        "anim":{
                          "enable":false,
                          "speed":1,
                          "opacity_min":0.1,
                          "sync":false
                        }
                      },
                      "line_linked":{
                        "enable":false,
                        "distance":500,
                        "color":"#ffffff",
                        "opacity":0.4,
                        "width":1
                      },
                      "polygon":{
                        "nb_sides":3
                      },
                      "move":{
                        "enable":true,
                        "speed":6.8,
                        "direction":"top",
                        "random":true,
                        "straight":false,
                        "out_mode":"out",
                        "bounce":false,
                        "attract":{
                          "enable":false,
                          "rotateX":600,
                          "rotateY":1200
                        }
                      }
                    
                  }
              }} /> */}
                <AboutDescContainer>
                  <h2 style={{margin: '0'}}>{about.descHeader}</h2>
                  <AboutDesc>{about.desc} </AboutDesc>
                  <AboutTeamContainer>
                    <p >Founded by Charlie Rees, Edd Roberts and George Harper</p>
                  </AboutTeamContainer>
                  <ContactDetails>
                    <div>
                      <DetailHeader>Get in touch with us:</DetailHeader>
                      <Details>{about.email}</Details>
                      <Details>{about.phone}</Details>
                    </div>
                   
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
