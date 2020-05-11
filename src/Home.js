import React from 'react';
import Link from '@material-ui/core/Link';
import logo from './logo.svg';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import LifeCycles from './LifeCycles';
import HandlingEvents from './HandlingEvents';
import UserCard from './UserCard';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'primer estado'
    };
    this.handleChangeOption = this.handleChangeOption.bind(this);
  }

  handleChangeOption(option) {
    this.setState({
      name: option
    });
  }

  render() {
    const title_cc = 'Class Component';
    const title_fc = 'Functional Component';
    const title_lc = 'Life Cycles Component';
    const title_he = 'Handling Events Component';
    const title_cr = 'Conditional Rendering Component - Array and Keys';

    const userName = [
      'Evelyn', 'Karla', 'Vinco', 'Orbis'
    ];

    const {
      name
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
                users={userName}
              />
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

export default Home;