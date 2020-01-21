import React from 'react'
import jexcel from 'jexcel'

class Jexcel extends React.Component {
  constructor(props) {
    super(props)
    const options = {
      data: [[]],
      minDimensions: [5, 5],
      allowComments: true,
    }
    this.options = props.options || options
  }

  componentDidMount = function() {
    this.el = jexcel(document.getElementById('spreadsheet'), this.options)
  }

  addRow = function() {
    this.el.insertRow()
  }

  render() {
    return (
      <div>
        <div id="spreadsheet"></div>
        <br />
        <br />
        <input type="button" value="Add new row" onClick={() => this.addRow()}></input>
      </div>
    )
  }
}

export default Jexcel
