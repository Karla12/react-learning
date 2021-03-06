import React from 'react';
import Link from '@material-ui/core/Link';
import logo from '../logo.svg';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import LifeCycles from './LifeCycles';
import HandlingEvents from './HandlingEvents';
import UserCard from './UserCard';
import ControlledComponent from './ControlledComponent';
import CompositionComponents from './CompositionComponents';

class HomeDefautl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'primer estado',
      data: [],
      value: '',
      textSelect: 'Select item:'
    };
    this.handleChangeOption = this.handleChangeOption.bind(this);
    this.handleChangeSelectOption = this.handleChangeSelectOption.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  handleChangeOption(option) {
    this.setState({
      name: option
    });

    if (option === 'ctrlc' || option === 'cr') {
      this.fetchData();
    }
  }

  handleChangeSelectOption(valueSelect) {
    this.setState({
      value: valueSelect,
      textSelect: 'Text selected: '
    });
  }

  fetchData(){
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(response => response.json())
      .then(json =>
        this.setState({ data: json })
      );
  }

  render() {
    const title_cc = 'Class Component';
    const title_fc = 'Functional Component';
    const title_lc = 'Life Cycles Component';
    const title_he = 'Handling Events Component';
    const title_cr = 'Conditional Rendering Component - Array and Keys';
    const title_ctrlc = 'Controlled Components';
    const title_cofc = 'Composition Components';

    const userName = [
      'Evelyn', 'Karla', 'Vinco', 'Orbis'
    ];

    const {
      name,
      data,
      textSelect,
      value
    } = this.state;

    const start = (
      <Link
        component="button"
        variant="body2"
        onClick={() => this.handleChangeOption('primer estado')}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    );

    switch(name) {
      case 'primer estado':
        return ( <div>
          {start}<br />
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('cc')}
                  >
                    Class Component
                  </Link><br />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('fc')}
                  >
                    Functional Component
                  </Link><br />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('lc')}
                  >
                    Life Cycles
                  </Link><br />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('he')}
                  >
                    Handling Events
                  </Link><br />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('cr')}
                  >
                    Conditional Rendering - Array and Keys
                  </Link><br />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('ctrlc')}
                  >
                    Controlled Components
                  </Link><br />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('cofc')}
                  >
                    Composition of components
                  </Link><br />
                  <a
                  className="App-link"
                  href="https://github.com/Karla12/react-learning/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Exercise repository
                </a>
            </div>
        );
      case 'cc':
        return (
          <div>
            {start}<br />
              <ClassComponent
                title={title_cc}
                users={userName}
              />
          </div>
        );
      case 'fc':
        return (
          <div>
            {start}<br />
              <FunctionalComponent
                title={title_fc}
                users={userName}
              />
          </div>
        );
      case 'lc':
        return (
          <div>
            {start}<br />
              <LifeCycles
                title={title_lc}
              />
          </div>
        );
      case 'he':
        return (
          <div>
            {start}<br />
              <HandlingEvents
                title={title_he}
              />
          </div>
        );
      case 'cr':
        return (
          <div>
            {start}<br />
              <UserCard
                title={title_cr}
                users={data}
              />
          </div>
        );
      case 'ctrlc':
        return (
          <div>
            {start}<br />
              <ControlledComponent
                title={title_ctrlc}
                users={data}
                handleChangeSelectOption={this.handleChangeSelectOption}
                titleSelect={textSelect}
                value={value}
              />
          </div>
        );
        case 'cofc':
        return (
          <div>
            {start}<br />
              <CompositionComponents title={title_cofc} />
          </div>
        );
      default:
        return ( <div>
          {start}<br />
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('cc')}
                  >
                    Class Component
                  </Link><br />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('fc')}
                  >
                    Functional Component
                  </Link><br />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => this.handleChangeOption('lc')}
                  >
                    Life Cycles
                  </Link><br />
                  <a
                  className="App-link"
                  href="https://github.com/Karla12/react-learning/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Exercise repository
                </a>
            </div>
        );
    }
  }
}

export default HomeDefautl;