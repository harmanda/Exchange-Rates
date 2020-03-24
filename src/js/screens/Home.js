import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Select from 'grommet/components/Select';
import RefreshIcon from 'grommet/components/icons/base/Refresh';
import { getMessage } from 'grommet/utils/Intl';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import {
  loadHome
} from '../actions/home';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      searchValue: '',
    }
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(loadHome());
  } 

  onSearch({ target: { value } }) {
    if (value !== '') {
      this.setState({
        search: true,
        searchValue: value,
      }); 
    } else {
      this.setState({
        search: false,
        searchValue: value,
      });
    }
     
  }

  onButtonClick(){
    this.props.dispatch(loadHome());
  }

  render() {  
    let exchangeData = {}; 
    try{
      exchangeData = JSON.parse(this.props.exchangeData); 
    } catch (error){
      console.log(error);
    }
    
    const timeStamp = moment(new Date(exchangeData.timestamp * 1000)).format("lll");
    const rates = exchangeData.rates;
    let exchangeRatesArray =[];
    let curentCADRate = null;
    for(let x in rates) {
      if(x === "CAD") {
        curentCADRate = rates[x];
      }
      if (!this.state.search){
          exchangeRatesArray.push({
          currency: x,
          rate: rates[x],
        });
      } else {
        if (x === this.state.searchValue) {
          exchangeRatesArray.push({
            currency: x,
            rate: rates[x],
          });
        }
      }
    } 
    return (
      <Box  pad ="small" flex >  
        <Box align="start" pad = {{ horizontal:"medium" }} direction="row">
          <Box pad= {{ horizontal:"small" }}><Heading tag="h4"><strong>Last Updated:</strong></Heading></Box>
          <Box pad= {{ horizontal:"small" }}> <span>{timeStamp}</span> </Box>
        </Box>
        <Box align="start" pad = {{ horizontal:"medium" }} direction="row">
          <Box pad= {{ horizontal:"small" }}><Heading tag="h4"><strong> Current USD/CAD rate:</strong></Heading></Box>
          <Box pad= {{ horizontal:"small" }}> <span>{curentCADRate}</span> </Box>
        </Box>
        <Box align="start" justify="between" pad = {{ horizontal:"medium" }} direction="row">          
          <Box pad= {{ horizontal:"small" }} align="start" flex><Search inline size="medium" placeHolder="Search Currency Code" iconAlign="start" onDOMChange={this.onSearch}/></Box>          
          <Box pad= {{ horizontal: "small" , vertical: "small"}} align="end" flex><Button label="Refresh" icon={<RefreshIcon />} primary={true} onClick={this.onButtonClick}/></Box>
        </Box>
        <Box align="start" pad="small">
          <Table scrollable={false}>
            <thead>
              <tr>      
                <th>
                  <Heading tag="h4">
                    <strong>
                      Currency Code
                    </strong>
                  </Heading>
                </th>
                <th>
                  <Heading tag="h4">
                    <strong>
                      Exchange Rate
                    </strong>
                  </Heading>
                </th>
              </tr>
            </thead>
            <tbody>{
              exchangeRatesArray.map((item, index) => (
              <tr key={index}>
                <td>
                  <span>
                    {item.currency}
                  </span>
                </td>
                <td>
                  <span>
                    {item.rate}
                  </span>
                </td>
              </tr>
            ))
          }
  </tbody>
</Table>
</Box>
</Box>
    );
  }
}

Home.defaultProps = {
  error: undefined,
  exchangeData: {}
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  exchangeData: PropTypes.object
};

Home.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.home });

export default connect(select)(Home);
