import React from 'react'
import { Link } from 'gatsby'
import Menu from 'react-burger-menu/lib/menus/slide'

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/">
        HOME
      </Link>

      <Link className="menu-item" to="/about/">
        ABOUT
      </Link>

      <Link className="menu-item" to="/portfolio/">
        PORTFOLIO
      </Link>

      <Link className="menu-item" to="/contact/">
        CONTACT
      </Link>
    </Menu>
  )
}
