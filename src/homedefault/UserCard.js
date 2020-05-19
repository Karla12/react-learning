import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class UserCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      duplicate: false
    };
    this.handleDuplicate = this.handleDuplicate.bind(this);
  }

  handleDuplicate() {
    this.setState({
      duplicate: true
    });
  }

  render () {

    const useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });

    const {
      duplicate
    } = this.state;

    const {
      users,
      title
    } = this.props;

    return (
      <div>
          <header className="App-header">
            <h2>Hello, my name is {title}</h2><br />
            <p>Click in button for duplicate items.</p>
          </header><br />
          <Button variant="contained" color="primary"
            onClick={this.handleDuplicate}>
                Duplicate 
          </Button><br />
          <TableContainer component={Paper}>
            <Table className={useStyles.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {duplicate && Object.keys(users).length &&
                  Object.values(users).map((value) => {
                      return (
                        <TableRow key={value.id}>
                          <TableCell component="th" scope="row">{value.id}</TableCell>
                          <TableCell>{value.title}</TableCell>
                          <TableCell>{value.body}</TableCell>
                        </TableRow>
                      );
                  })
                }
              </TableBody>
             </Table>
          </TableContainer>
      </div>
    );
  }
}

export default UserCard;
