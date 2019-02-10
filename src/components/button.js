import React from 'react'
import buttonStyles from '../styles/button.module.css'

const Button = props => (
  <div>
    <button className={buttonStyles.button}>{props.name}</button>
  </div>
)

export default Button
