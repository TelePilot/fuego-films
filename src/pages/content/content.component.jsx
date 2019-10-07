import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import VideoImage from '../../components/video-image/video-image.component'

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  `
const ContentTitle = styled.h1`
margin-top: 80px;`
const VideoContainer = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  width: 85%;
  margin-top: 5%;
  grid-gap: 15px;
  @media screen and (max-width: 1200px) {
    grid-template-columns:1fr 1fr;
    width: 85%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns:1fr;
    width: 95%;
  }
 `
const ImageContainer = styled.div`
  width: 100%;
  height: 250px;`

const Content = () => {

  const [videoArray, setVideoArray] = useState([])
  useEffect(() =>  {
    const videoQuery = `*[_type == "video"]{
     clientWork, title, thumbnail, client[]->{clientName}}
    `
    sanityClient.fetch(videoQuery).then(video => {
      const videoArray = []
      
      video.forEach(video => {
          
          if(videoArray.length <= 0) {
            
            videoArray.push(video)
          }
         else if (video.clientWork) {
           if(
            videoArray.filter(e => e.client !== undefined)
           ) {
            if(videoArray.filter(e => (e.client > 0 ? e.client[0].clientName : ['hey']) === (video.client.length > 0 ? video.client[0].clientName : ['hey']) ).length > 0) {
           
            }
           }
           
           else {
            videoArray.push(video)
           }
           
          }
          else {
            videoArray.push(video)
          }

      }
      )
      setVideoArray(videoArray)
    })
  }, [])

    return (
      <ContentContainer>
        <ContentTitle>Content</ContentTitle>
        <VideoContainer>
        {
              videoArray.map((contentVid, id) =>
              <ImageContainer key={id}>
                 <VideoImage video={contentVid} />
              </ImageContainer>
              )
            }
        </VideoContainer>
      </ContentContainer>

    )
  }


export default Content
