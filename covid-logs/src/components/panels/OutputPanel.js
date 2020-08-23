import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Badge, Card, Spinner } from 'react-bootstrap';

const OutputPanel = ({ state }) => {
  const {continent, country, population, tests, total, recovered, active, newCases, deaths, day} = state
  const style = {
    "borderTop": "none",
    "borderLeft": "none"
  }
  return (
    <div className="col-lg-6">
        <Card style={style}>
            <div className="container text-dark">
               <h4 className="stats">Stats</h4> 
            </div>
        </Card>
    	<div className="container mt-4">
            <div className="row">
                <div className="container col">
                <div>Continent {continent ? <Badge pill variant="light">{continent} </Badge> : (<Spinner animation="border" size="sm" variant="grey" />)}</div>
                <div className="py-3">Country {country ? <Badge pill variant="light">{country}</Badge> : (<Spinner animation="border" size="sm" variant="grey" />)}</div>
                <div>Population {population ? <Badge pill variant="primary">{population}</Badge>: (<Spinner animation="border" size="sm" variant="grey" />)}</div>
                <div className="py-3">Total Tests {tests ? <Badge pill variant="success">{tests}</Badge> : (<Spinner animation="border" size="sm" variant="success" />)}</div>
                <div>Total Cases {total ? <Badge pill variant="warning">{total}</Badge> : (<Spinner animation="border" size="sm" variant="warning" />)}</div>
            </div>
            <div className="container col">
                <div>Discharged {recovered ? <Badge pill variant="primary">{recovered}</Badge> : (<Spinner animation="border" size="sm" variant="primary" />)}</div>
                <div className="py-3">Active Cases {active ? <Badge pill variant="dark">{active}</Badge> : (<Spinner animation="border" size="sm" variant="dark" />)}</div>
                <div>New Cases  {newCases ? <Badge pill variant="warning">{newCases}</Badge> : (<Spinner animation="border" size="sm" variant="warning" />)}</div>
                <div className="py-3">Death {deaths ? <Badge pill variant="danger">{deaths}</Badge> : (<Spinner animation="border" size="sm" variant="danger" />)}</div>
                <div>Today {day ? <Badge pill variant="light">{day}</Badge> : (<Spinner animation="border" size="sm" variant="secondary" />)}</div>
            </div>
            </div>
    	</div>
    </div>
  );
}

export default OutputPanel;