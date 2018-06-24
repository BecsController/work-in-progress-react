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
    const resizeMode = 'center';
  return (
    <div className="columns is-two-thirds">
        <div className="box column is-10 is-offset-1 page-template school-bg-img">
          <img style={{flex: 1, resizeMode, position:'relative', zIndex:1,}} className="school-bg-img" src="/images/backgrounds/inside-a-kindergarten-classroom-background.jpg"/>
           <div className="container is-full-height ">
              <h1 className="has-text-centered is-size-2">Beginnings</h1>
                <img className="teacher" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8TDAZZuow6x2IH-Pnhs8prAK1iolyqM8WRKKhpKv7yIDrzee" alt="teacher"/>
                  <button id="anxious" className="is-warning is-rounded button is-medium">I am feeling Anxious</button>
                  <button id="excited" className="is-warning button is-rounded is-medium is-pulled-right">I am feeling Excited</button>
                  <button id="scared" className="is-warning button is-rounded is-medium is-pulled-left">I am feeling Scared</button>
                  <div className="box column is-10 textarea">
                    <p className="has-text-centered is-size-4">
                      Welcome to your first day of school! <br></br>
                      Your teacher comes over to introduce herself.
                      "Hi, I'm Miss Davis, what's your name?"<br></br>
                      She holds out her hand.
                      <a className="button is-medium is-pulled-right">
                        Next &nbsp;
                        <span className="icon">
                          <i className="far fa-arrow-alt-circle-right"></i>
                        </span>
                      </a>
                    </p>
                  </div>
          </div>
       </div>
    </div>
  )
 }
}

export default StoriesPageOne
