import React, {useState} from 'react'
import styled from 'styled-components'
import './menu.styles.scss'
import { useTrail, animated } from 'react-spring'
import { push as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import Particles from 'react-particles-js'

const AnimatedMenuItem = animated(NavLink)

const MenuItem = styled(AnimatedMenuItem)`
  cursor: pointer;
  color: white;
  margin: 10px 0;
  font-size: 32px;
  text-decoration: none;
 
`


const HamburgerMenu = ({ menu }) => {
  const items = menu

  const [trail, set] = useTrail(items.length, () => ({

    opacity:0,
    transform: 'translate3D(0,50px,0)',

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
          transform: 'translate3D(0,50px,0',
        })
       }
    }
  
    return (
      <Menu isOpen={menuOpen} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ '200px' } onStateChange={toggleMenu} disableAutoFocus left>
         <Particles className="particles"
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
              }} />
        {trail.map((props, index) => (
           <MenuItem key={items[index]} style={props} onClick={() => menuOpenSwitch(false)} to={items[index].name === 'home' ? '/' : `/${items[index].name}`}>{items[index].name}</MenuItem>
          )
        )}
      </Menu>
 
      
    )
  }


export default HamburgerMenu
