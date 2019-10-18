import React, {useState, useEffect} from 'react'
import sanityClient from '../../Client'
import styled from 'styled-components'
import VideoImage from '../video-image/video-image.component'
import { withRouter } from 'react-router-dom'

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  width: 100%;
  grid-gap: 15px;
  @media screen and (max-width: 1200px) {
    grid-template-columns:1fr 1fr;
    width: 100%%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns:1fr;
    width: 95%;
  }
 `
const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
 `

 

const MoreVids = ( {category, currentVideo} ) => {
  
    const [moreVids, setMoreVids] = useState([])
    useEffect(() => {
        if(category !== undefined) {
            const categoryArray = []
            const videoQuery = `*[_type == "video" && references('${category}')]{
                title, thumbnail, client[]->{_id, clientName} }
              `
              sanityClient.fetch(videoQuery).then(video => {
                video.forEach(video => {
                  if(currentVideo.title !== video.title) {
                    categoryArray.push(video)
                  }
                   
                  
                   
                  
                })
                setMoreVids(categoryArray)
              })
        } else {
           return null
        }
        return
      }, [category, currentVideo]) 
     
    return (
        moreVids.length > 0 ? 
        
        <VideoContainer>
        {
              moreVids.map((contentVid, id) =>
              <ImageContainer key={id}>
                 <VideoImage video={contentVid} />
              </ImageContainer>
              )
            }
        </VideoContainer>
        
       
        : null
    )
}

export default withRouter(MoreVids)
