import React, {useState} from 'react'
import styled from 'styled-components'
import './menu.styles.scss'
import { useTrail, animated } from 'react-spring'
import { push as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

const AnimatedMenuItem = animated(NavLink)

const MenuItem = styled(AnimatedMenuItem)`
  cursor: pointer;
  color: black;
  margin: 10px 0;
  font-size: 26px;
  text-decoration: none;
 
`
const HamburgerMenu = ({ menu }) => {
  const items = menu

  const [trail, set] = useTrail(items.length, () => ({

    opacity:0,
    transform: 'translate3D(0,25px,0)',

  }))
    
    const [menuOpen, menuOpenSwitch] = useState(false)

    const toggleMenu = (state) => {
      if (state.isOpen) {
       
        menuOpenSwitch(true)
        set({
        
          opacity: 1,
          transform: 'translate3D(0,0,0',
        })
      }
      
      else {menuOpenSwitch(false)
        set({
        
          opacity: 0,
          transform: 'translate3D(0,25px,0',
        })
       }
    }
  
    return (
      <Menu isOpen={menuOpen} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ '200px' } onStateChange={toggleMenu} disableAutoFocus left>

        {trail.map((props, index) => (
           <MenuItem key={items[index]} style={props} onClick={() => menuOpenSwitch(false)} to={`/${items[index].name}`}>{items[index].name}</MenuItem>
          )
        )}
      </Menu>
 
      
    )
  }


export default HamburgerMenu
