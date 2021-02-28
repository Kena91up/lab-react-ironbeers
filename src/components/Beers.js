import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

class Beers extends Component {
  state = {
    beers: [],
    loaded: false,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')

      .then((response) => {
        console.log('response');
        this.setState({
          beers: response.data,
          loaded: true,
        });
      })
      .catch((err) => {
        console.log('err');
      });
  }

  render() {
    const beersRender = this.state.beers.map((beer) => {
      return (
        <div>
        <div key={beer._id}>
          <div className="d-flex mb-3">
            <div className="beerImg-container d-flex justify-content-center">
              <img className="beer-img" src={beer.image_url} alt={beer.name} />
            </div>
            <div className="justify-content-center">
              <Link to={`/beers/${beer._id}`}>
                <h4 className="m-0 pb-3">{beer.name}</h4>
              </Link>
              <h5 className="m-0">
                {beer.tagline}
              </h5>
              <p className="m-0">
                <b>Created by:</b>{' '}
                {beer.contributed_by
                  ? beer.contributed_by.replace(/\s*\<.*?\>\s*/g, '')
                  : 'Unknown'}
              </p>
            </div>
          </div>
          <hr />
        </div>
        </div>
      );
    });
    return <div className="container">{beersRender}</div>;
  }
}
export default Beers;
