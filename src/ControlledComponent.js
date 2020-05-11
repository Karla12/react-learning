import React from 'react';

class ControlledComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textSelect: 'Select item'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      textSelect: 'Text selected: '
    });
  }

  render() {

    const {
      users,
      title
    } = this.props;

    return (
      <div>
        <header className="App-header">
          <h2>Hello, my name is {title}</h2>
        </header><br />
        <label>{this.state.textSelect}</label><br />
        <select value={this.state.value} onChange={this.handleChange}>
        {users && Object.keys(users).length &&
          Object.values(users).map((value) => {
            return (
              <option value={value.id} key={value.id}>{value.title}</option>
            );
          })
        }
        </select>
      </div>
    );
  }
}

export default ControlledComponent;