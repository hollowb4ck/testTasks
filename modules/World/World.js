import React from 'react'
import NavLink from '../NavLink'


export default React.createClass({

  render() {

    const data = this.props.route.data;
    const mass = data.map(function( item ){
          return (
            <div className="content">

              <img className="imgUrl" src={item.urlS} />
              <div className="title">{item.title}</div>
              <NavLink className="link" to={"/world/"+item.id} key={item.id}>Подробнее</NavLink>

            </div>
          )
    })
    return (
      <div>
          <h1>World</h1>
          {mass}
      </div>
    )
  }
})
