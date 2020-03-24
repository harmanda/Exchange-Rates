import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Home from '../screens/Home';

class Main extends Component {
  constructor() {
    super();    
  }

  render() {        
    return (
      <App centered={false}>
        <Router>
        <div>
        <Header className="header" size = "large">
            <Box direction="row" justify="center" pad="large">
            <Title className="title"><strong>
             Open Exchange Rates
            </strong></Title>           
              </Box>             
          </Header> 
          <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route path='/home' component={Home} />              
            </Switch>         
        </div>         
        </Router>
      </App>
    );
  }
}

Main.defaultProps = { 
};

Main.propTypes = {
    
};

export default Main;
