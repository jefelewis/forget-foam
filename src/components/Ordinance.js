// Imports: Dependencies
import React, { Component } from 'react'

// Imports: Data
import OrdinanceData from '../data/styrofoamordinances.json'

// React Component: Ordinance
class Ordinance extends Component {
  // Render Ordinances
  renderOrdinances (data) {
    try {
      return data.map(city => <p key={city.id}>{city.name}</p>)
    }
    catch (error) {
      console.log(error)
    }
  }

  // Render
  render () {
    return (
      <div>
        <div className="ordinance">
          { this.renderOrdinances(OrdinanceData) }
        </div>
      </div>
    )
  }
}

// Exports
export default Ordinance
