import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './carousel.styles.scss'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import { withRouter } from 'react-router-dom'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const ClientSlideContainer = styled.div`
  margin: 0;
  padding: 50px 0;

  *:focus {
    outline: 0
  }
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

class ClientSlider extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
          videoLoading: true,
          videoArray:[],
          video: '',
          clientName: '',
          clientResult: [],
          match: window.location.href.slice(8),
      
        }
      }
componentDidMount() {
  // add thumbnail
    const videoQuery = `*[_type == "video" && references('${this.props.clientId}')]{
      date, description, title,  vimeoLink, teamMembers[]->{name}, client[]->{clientName, description}}
    `
    sanityClient.fetch(videoQuery).then(video => {
      
      video.forEach(video => {
          
            this.state.clientResult.push(video)
        
          
          this.setState({
            videoLoading: false
          })
      })
      })
  console.log(this.state.clientResult)
  }
  render() {
    let { videoLoading, clientResult} = this.state
    const handleOnDragStart = e => e.preventDefault()
    const settings = {
      className: 'center',
        arrows: true,
        infinite: true,
        slidesToShow: 1,
         centerPadding: "40px",
        speed: 500,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
  
      }
      return (
        videoLoading ? <div  className=" AppLoading"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> :
        <div style={{width: "500px"}}><Slider {...settings}>
        {
          clientResult.length > 1 ?
          clientResult.map((clientVideo, id) => {
            return (
              <ClientSlideContainer onDragStart={handleOnDragStart} key={id}>
                <ClientLink to={`/content/${clientVideo.title}`}>
                  <LinkTitle>{clientVideo.title}</LinkTitle>
                  {/* {urlFor(clientVideo.thumbnail).url()} */}
                  <ClientLinkImg alt="client img" src="https://i0.wp.com/www.twobuttonsdeep.com/wp-content/uploads/2018/07/guy-fieiri-flame.jpg?resize=560%2C373"/>
                </ClientLink>
              </ClientSlideContainer>
            )
        }): null}
      </Slider>
      </div>
      )
    }
}

export default withRouter(ClientSlider)