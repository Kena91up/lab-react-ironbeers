import React, { Component } from 'react'
import axios from 'axios'
import { Col } from 'react-bootstrap'

class SingleBeer extends Component {

state = {
  image_url: '',
  name: '',
  tagline: '',
  first_brewed: '',
  attenuation_level: 1,
  description: '',
  contributed_by: '',
};

componentDidMount(){
  const { beerId } = this.props.match.params;
  console.log(beerId);

  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
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

export default SingleBeer
