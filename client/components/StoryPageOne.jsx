import React from 'react'
import {Link} from 'react-router-dom'

class StoriesPageOne extends React.Component {
  constructor (props){
    super (props)
    this.state = {
      pages: [{
        title: 'Beginnings',
        population: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8TDAZZuow6x2IH-Pnhs8prAK1iolyqM8WRKKhpKv7yIDrzee",
        emotionOne: 'I am feeling Anxious',
        emotionTwo: 'I am feeling Excited',
        emotionThree: 'I am feeling Scared',
        pageText: 'Welcome to your first day of school! Your teacher comes over to introduce herself. Hi, I\'m Miss Davis, what\'s your name? She holds out her hand.'
      }]
    }
  }

  render() {
    const resizeMode = 'center';
  return (
    <div className="columns is-two-thirds">
        <div className="box column is-10 is-offset-1 page-template">
              <h1 className="has-text-centered is-size-2">{this.state.pages[0].title}</h1>
                <img style={{flex: 1, resizeMode, position:'relative', zIndex:1,}} className="school-bg-img" src="/images/backgrounds/inside-a-kindergarten-classroom-background.jpg"/>
                 <div className="container is-full-height ">
                <img className="teacher" src={this.state.pages[0].population} alt="teacher"/>
                  <button id="anxious" className="is-warning is-rounded button is-medium">{this.state.pages[0].emotionOne}</button>
                  <button id="excited" className="is-warning button is-rounded is-medium is-pulled-right">{this.state.pages[0].emotionTwo}</button>
                  <button id="scared" className="is-warning button is-rounded is-medium is-pulled-left">{this.state.pages[0].emotionThree}</button>
                  <div className="box column is-10 textarea">
                    <p className="has-text-centered is-size-4">
                      {this.state.pages[0].pageText}
                      <Link className="button is-medium is-pulled-right" to={`/story/Off%20To%20School/2`}>
                        Next &nbsp;
                        <span className="icon">
                          <i className="far fa-arrow-alt-circle-right"></i>
                        </span>
                      </Link>
                    </p>
                  </div>
          </div>
       </div>
    </div>
  )
 }
}

export default StoriesPageOne
