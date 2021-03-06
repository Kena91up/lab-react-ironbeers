import React, { Component } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import Header from './Header';

class RandomBeer extends Component {
  state = {
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: 1,
    description: '',
    contributed_by: '',
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((apiResponse) => {
        const beer = apiResponse.data;
        const {
          image_url,
          name,
          tagline,
          first_brewed,
          attenuation_level,
          description,
          contributed_by,
        } = beer;
        this.setState({
          image_url,
          name,
          tagline,
          first_brewed,
          attenuation_level,
          description,
          contributed_by,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <img src={this.state.image_url} alt="beer image" />
        <div className="single-beer">
          <h3>{this.state.name}</h3>
          <h3>{this.state.attenuation_level}</h3>
        </div>
        <div>
          <h5>{this.state.tagline}</h5>
          <p>{this.state.first_brewed}</p>
        </div>
        <div>
          <p>{this.state.description}</p>
          <p>{this.state.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
