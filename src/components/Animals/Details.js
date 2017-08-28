import React from 'react'

const DETAILS = {
  porpoise: {
    info:
      'Porpoises are a group of fully aquatic marine mammals that are sometimes referred to as mereswine, all of which are classified under the family Phocoenidae, parvorder Odontoceti (toothed whales). There are six extant species of porpoise. They are small toothed whales that are very closely related to oceanic dolphins.',
    title: 'Not Dolphins'
  },
  'great-white-sharks': {
    info:
      'The great white shark (Carcharodon carcharias), also known as the great white, white pointer, white shark, or white death, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans. The great white shark is notable for its size, with larger female individuals growing to 6.1 m (20 ft) in length and 1,950 kg (4,300 lb) in weight at maturity.',
    title: 'Sharks are awesome!'
  },
  whales: {
    info:
      'Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. They are an informal grouping within the infraorder Cetacea, usually excluding dolphins and porpoises.',
    title: 'Whales are yuge'
  }
}

const Details = props =>
  <article>
    <h3>
      {DETAILS[props.match.params.slug].title}
    </h3>
    <p>
      {DETAILS[props.match.params.slug].info}
    </p>
  </article>

export default Details
