import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Animal = ({ image, name }) =>
  <li>
    <figure>
      <img src={image} alt={`A ${name}`} height="100" />
      <figcaption>
        {name}
      </figcaption>
    </figure>
  </li>

Animal.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Animal
