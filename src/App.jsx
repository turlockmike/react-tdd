import React from 'React';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicks: this.state.clicks + 1});
  }

  render() {
    return (<div>
      <li>
      </li>
      <button onClick={this.handleClick}>Clicks: {this.state.clicks}</button>
    </div>)
  }
}

export default App;
