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
    // add thumbnail
    const videoQuery = `*[_type == "video"] | order(date desc){
     clientWork, title, client[]->{clientName}}
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
            if(videoArray.filter(e => e.client[0].clientName === video.client[0].clientName).length > 0) {
            
            //  videoArray.splice(videoArray.filter(e => e.client[0].clientName === video.client[0].clientName), 1, video)
            
            }
           else {
            console.log(video, 'unfiltered')
            videoArray.push(video)
           }
           }
          }
          else {
            videoArray.push(video)
          }

      }
      )
      const uniq = [...new Set(videoArray)]
      console.log(uniq)
      setVideoArray(videoArray)
     
    })
    
  }, [])

    return (
      <ContentContainer>
        <ContentTitle>Share The Vision.</ContentTitle>
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
