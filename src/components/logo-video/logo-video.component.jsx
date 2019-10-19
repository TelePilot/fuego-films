import React from 'react'
import styled from 'styled-components'
import { Player} from 'video-react'

const Video = styled(Player)`
    width: 100px;
    height: auto;
    position: relative;
    top: 100px;
    video {
        width: 100px;
        height: auto;
        z-index: 100;
        cursor: pointer;
        position: absolute;
    }
`
const sources = {
    logo: '/fuegoBurnNegative.mp4',
  }

export default class LogoVideo extends React.Component {
    constructor(props, context) {
        super(props, context)
    
        this.state = {
          source: sources.logo
        }
    
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.load = this.load.bind(this)
      }
    
      componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this))
      }
      setMuted(muted) {
        return () => {
          this.player.muted = muted
        }
      }
    
      handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
          player: state
        })
      }
    
      play() {
        this.player.play()
      }
    
      pause() {
        this.player.pause()
        this.changeCurrentTime(0)
      }
    
      load() {
        this.player.load()
      }
    
    
      changeSource(name) {
        return () => {
          this.setState({
            source: sources[name]
          })
          this.player.load()
        }
      }
    
    
    render() {
        return (
            <div>
                <Video controls={false} autoPlay={true} loop={true} ref={player => {this.player = player}}
                 >
                <source  src={this.state.source}/>
                
                 </Video>
            </div>
        )
    }
}
