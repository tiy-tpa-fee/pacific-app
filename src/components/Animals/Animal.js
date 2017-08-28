import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Animal = ({ image, name }) =>
  <li>
    <figure>
      <NavLink to={`/animals/${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
        <img src={image} alt={`A ${name}`} height="100" />
        <figcaption>
          {name}
        </figcaption>
      </NavLink>
    </figure>
  </li>

Animal.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Animal
