import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="menu">
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/sports">Sports</NavLink></li>
        <li><NavLink to="/world">World</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
