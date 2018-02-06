import React from 'React';

class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      total: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.addInputValue = this.addInputValue.bind(this)
  }
  render() {
    return (
      <div>
        <output>{String(this.state.total)}</output>
        <input value={this.state.inputValue} onChange={this.handleChange}/>
        <button onClick={this.addInputValue}>Add</button>
      </div>
    )
  }

  addInputValue(e) {
    this.setState({
      inputValue: '',
      total: this.state.total + parseFloat(this.state.inputValue)
    })
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default Calculator;
