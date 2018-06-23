import React from 'react'
import {Link} from 'react-router-dom'

class Users extends React.Component {

  constructor(props) {
    super (props)
    this.state = {
      users:[{
        name: 'Spiderman',
        email: 'webs@webby.com',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVenbHVd6xwubCu-HvLLJmexP--ToC2YbkO_O0xPJkkQeRmSQB'
      }, {
        name: 'Gwen Stacey',
        email: 'webbs@webby.com',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ICNHH4lQPPOKCyFjumYT7k5DGMLA0qZvkMOc962gUBmpqAAD'
      }, {
        name: 'Mumma',
        email: 'Sausage@gmail.com',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0_cHe6T68khsiYLTnOy54rJsc7SV9rDiOiOZdb3RjFzbLvdo'
      }, {
        name: 'FenFen',
        email: 'FenFen@ix.com',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpqxDxkKon6I7lEKlUUATkrnhkXAkmbbcKayNQc4i3XZnXUsA'
      }, {
        name: 'Wrap?',
        email: 'Betterwrap@wrappy.com',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPuAFRbwsYkt_ve73zrqEEJ02PlX2ewbHZGy0u1a99h401lN0Kw'
      }]
    }
    this.addUser = this.addUser.bind(this)
  }

  addUser(user) {
    const users = this.state.users
    users.push(user)
    this.setState({
      users: users
    })
  }

  render() {
  console.log(this.state.users[0].name)

  return (
    <div>
        <div className="column box is-10 is-offset-1">
            <h1 className="has-text-centered is-size-1 has-text-grey">
              Choose your profile
            </h1>
      </div>

      <div className="column is-10 is-offset-1">
          <div className="columns box is-multiline" id="grid">

            {this.state.users.map(item => {
              return (
                <div key={item.name} className="column is-3 is-3-widescreen is-flex">
                  <div className="card">
                    <Link to={`/user/${item.name}`}>
                      <div className="card-title title is-3">
                        <h3 className="has-text-grey-dark">{item.name}</h3>
                      </div>

                      <div className="box card-image">
                        <figure className="image is-4by5">
                          <img src={item.avatar} alt={item.name}/>
                        </figure>
                      </div>
                    </Link>
                  </div>
                </div>
              )
              })}
        </div>
      </div>

        <div className="column is-10 is-offset-1">
          <div className="box">
          <h3 className="has-text-centered is-size-1 has-text-grey">Footer heading</h3>
        </div>
        </div>

    </div>
  )
 }
}

export default Users
