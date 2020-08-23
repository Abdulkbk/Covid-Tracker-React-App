import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

class RequestPanel extends Component {
  state = {country: "Nigeria"}

  componentDidMount() {
    axios({
      "method": "GET",
      "url": "https://covid-193.p.rapidapi.com/history?country=" + this.state.country ,
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "8b7bad8446msh3f536686252acdfp17ca3ajsnf17a6c112781"
      },
    })
    .then(res => {
      const result = res.data.response[0];
      this.props.getData(result)
    })
    .catch(err => console.log(err))
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleClick = e => {
    axios({
      "method": "GET",
      "url": "https://covid-193.p.rapidapi.com/history?country=" + this.state.country ,
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "8b7bad8446msh3f536686252acdfp17ca3ajsnf17a6c112781"
      },
    })
    .then(res => {
      const result = res.data.response[0];
      this.props.getData(result)
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="container col-lg-4">
        <div className="container mt-4">
          <h5>Choose a country</h5>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="country">Country</InputGroup.Text>
          </InputGroup.Prepend>
            <FormControl
             onChange={this.handleChange}
             placeholder={this.state.country}
             aria-label="country"
             aria-describedby="country"
             id="country"
            />
          <InputGroup.Append>
            <Button variant="secondary" onClick={this.handleClick} >Search</Button>
          </InputGroup.Append>
        </InputGroup>
        </div>
      </div>
    )
  }
}

export default RequestPanel;