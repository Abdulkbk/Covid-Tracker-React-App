import React, { Component } from 'react';
import RequestPanel from '../panels/RequestPanel'
import OutputPanel from '../panels/OutputPanel'

class Dashboard extends Component {
	state = {
		continent: "",
		country: "",
		population: "",
		tests: "",
		total: "",
		recovered: "",
		active: "",
		newCases: "",
		deaths: "",
		day: ""
	}
	getData = data => {
		const {continent, country, population, day} = data;
		const {total, active, recovered} = data.cases;
		const deaths = data.deaths.total;
		const tests = data.tests.total;
		const newCases = data.cases.new;

		this.setState({
		continent,
		country,
		population,
		tests,
		total,
		recovered,
		active,
		newCases,
		deaths,
		day
		})
	}
	render() {
		return (
	    <div className="Dashboard row">
			<RequestPanel getData={this.getData} />
			<OutputPanel state={this.state} />
	    </div>
	  );
	}
}

export default Dashboard;