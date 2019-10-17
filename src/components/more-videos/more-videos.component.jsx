import React, {useState, useEffect} from 'react'
import sanityClient from '../../Client'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import VideoImage from '../video-image/video-image.component'
import imageUrlBuilder from '@sanity/image-url'
import { withRouter } from 'react-router-dom'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const VideoContainer = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  width: 100%;
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
  height: 250px;
 `
const ClientLink = styled(Link)`
  width: 240px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: black;
  `

const LinkTitle = styled.p`
`

const ClientLinkImg = styled.img`
  max-width:200px;
  width: 200px;
  height: auto;
  color: black;
  transition: all ease-in-out .4s;
`
 

const MoreVids = ( category ) => {
    const [moreVids, setMoreVids] = useState([])
    useEffect(() => {
        if(category !== undefined) {
            const categoryArray = []
            const videoQuery = `*[_type == "video" && references('${category.category}')]{
                title, thumbnail, client[]->{_id, clientName} }
              `
              sanityClient.fetch(videoQuery).then(video => {
                video.forEach(video => {
                    categoryArray.push(video)
                    console.log(categoryArray)
                })
                setMoreVids(categoryArray)
              })
        } else {
           return null
        }
      }, [category]) 
      console.log(moreVids)
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
