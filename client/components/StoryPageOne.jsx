import React from 'react'
import {Link} from 'react-router-dom'

class StoriesPageOne extends React.Component {
  constructor (props){
    super (props)
    this.state = {
      pages: []
    }
  }

  render() {

  return (
    <div className="columns is-two-thirds">

      <div className="box top-box column is-10 is-offset-1">
        <h1 className="column is-10 has-text-centered is-size-1 has-text-grey">props.match.name</h1>
          <div className="box column is-10">
            <figure className="image column is-10" style={{width: 40, height: 40}}>
              <img src='/images/backgrounds/inside-a-kindergarten-classroom-background.jpg' />
            </figure>
          </div>

      <Link className="button is-primary is-rounded is-outlined is-large" to={`/story/${id}/1`}>
        <i className="fas fa-play"></i>&nbsp;Click here to start
      </Link>
      </div>

    </div>
  )
 }
}

export default StoriesPageOne
