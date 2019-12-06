import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    number: 0
  }
  plusOne = () => {
    this.setState({ number: this.state.number + 1 })
  }
  lessOne = () => {
    this.setState({ number: this.state.number - 1 })
  }
  changeNumber = difference => {
    this.setState({ number: this.state.number - difference })
  }
  render() {
    return(
      <div>
        <div>Number {this.state.number}</div>
        <button onClick={this.plusOne}>Inc</button>
        <button onClick={this.lessOne}>Dec</button>
        <button onClick={() => this.changeNumber(10)}>Inc 10</button>
        <button onClick={() => this.changeNumber(-10)}>Dec 10</button>
      </div>
    )
  }
}
