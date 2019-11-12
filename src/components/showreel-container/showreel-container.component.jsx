import React, { Component } from 'react'
import sanityClient from '../../Client'
import Player from '../player/player.component'

class ShowreelCont extends Component {

    constructor(props) {
    super(props)
    this.state = {
      showreelLoading: true,
      showreel: [],
    }
  }
  componentDidMount() {
    const showQuery = `*[_type == "showreel"] `
    sanityClient.fetch(showQuery).then(showreel => {

      showreel.forEach(showreel => {
        this.setState(prevState =>({
          showreel: showreel
        }))
      })
      this.setState(prevState => ({
        showreelLoading: false
    }))


    })

  }
  render() {
    let { showreel, showreelLoading } = this.state
    return (
      showreelLoading ? <div  className=" AppLoading"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> :

      <div style={{marginBottom: '50px'}}>
        <Player video={showreel}/>
      </div>
    )
  }

}

export default ShowreelCont
