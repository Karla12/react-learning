import React from 'react';

class ControlledComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChangeSelectOption(event.target.value);
  }

  render() {

    const {
      users,
      title,
      titleSelect,
      value
    } = this.props;

    return (
      <div>
        <header className="App-header">
          <h2>Hello, my name is {title}</h2>
        </header><br />
        <label>{titleSelect}</label><br />
        <select value={value} onChange={this.handleChange}>
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