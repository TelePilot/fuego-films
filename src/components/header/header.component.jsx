import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import HamburgerMenu from '../menu/menu.component'
import { Link } from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

// const SiteColor = css`
//   span {
//     background: black;
//   }
// `
// const MainColor = css`
//   span {
//     background: white
//   }
//  `


// const getMenuStyles = () => {
//   console.log(window.location.pathname)
//   if (window.location.pathname === '/home') {
//       return MainColor
//   } 

//   return SiteColor
// }
const HeaderContainer = styled.div`
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1% 0 2%;
  box-sizing: border-box
  @media screen and (max-width: 1000px) {
    padding: 0 2% 0 5%
  }
  `

const LogoContainer = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;`

const LogoLink = styled(Link)`
  width: 100%;
  height: auto;`

const LogoImg = styled.img`
  min-width: 100px;
  max-width: 70%;
  height: auto;`

const Header = ({...props }) => {
  const [header, setHeader] = useState({ 
    menu: [],
    logo: '',
    phone: '',
    email: ''
  })
  useEffect(() => {
    const headerQuery = `*[_type == "header"]`
    sanityClient.fetch(headerQuery).then(header => {

      header.forEach(header => {
        setHeader(header)
      })
    })
  }, [])

  return (

    <HeaderContainer {...props}>
       <HamburgerMenu menu={header.menu}/>
      <LogoContainer>
          <LogoLink to='/'><LogoImg alt="Logo" src={urlFor(header.logo).width(500).url()}/></LogoLink>
      </LogoContainer>
    </HeaderContainer>
  )
}


export default Header
