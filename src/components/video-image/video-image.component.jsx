import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import './video-image.styles.scss'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}



const VideoItemContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  transition: all .2s ease-in-out;
  
  `

const VideoLink = styled(Link)`
  height: 100%;
  width: 100%;
  color: white;
  text-decoration: none;
  position: relative;
`   


const VideoTextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    flex-flow: column;
    z-index: 2; 
    
    * {
        margin: 0;
    }`  


const VideoImgContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
  `
const VideoItemOverlay = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
`
const VideoTitle = styled.h1`

`
const ClientText = styled.p`
`

const VideoImgBackground = styled.div`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;`



const VideoImage = ({ video, home, filtered }) => {
  return (
    <VideoLink onClick={() => window.scrollTo(0, 0)} to={{
      pathname:`/content/${video.title}`
    }}>
          
            <VideoItemContainer className={!home ? 'hover' : null} >
          
              <VideoItemOverlay />
              <VideoImgContainer>  
                <VideoImgBackground style={!home ? {height: '100%', backgroundImage:`url(${urlFor(video.thumbnail).quality(60).url()})`} : {height: '100vh', backgroundImage:`url(${urlFor(video.thumbnail).quality(70).url()})`}} />      
                  <VideoTextContainer>
                  

    {video.clientWork && !filtered ? null : <VideoTitle>{video.title}</VideoTitle>}
                        
                        {video.client ? video.client.map((client, id) => {
                              return( !video.clientWork ? <ClientText key={id}>{client.clientName}</ClientText> : 
                                filtered ? <ClientText key={id}>{client.clientName} </ClientText> : <VideoTitle key={id}>{client.clientName }</VideoTitle>)
                              }): null}
                  </VideoTextContainer>
             
              </VideoImgContainer>

            </VideoItemContainer>
            </VideoLink>
  )
}
export default VideoImage
