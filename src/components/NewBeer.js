import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

class NewBeer extends Component {

    state = {
        image_url: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: 1,
        description: '',
        contributed_by: '',
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        let {
          image_url,
          name,
          tagline,
          first_brewed,
          attenuation_level,
          description,
          contributed_by,
        } = this.state;
        attenuation_level = Number(attenuation_level);
    
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            image_url,
            name,
            tagline,
            first_brewed,
            attenuation_level,
            description,
            contributed_by,
          })
          .then((res) => {
            this.props.getData();
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
    
      handleChange = (event) => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };
    
      render() {
        return (
            <form className="text-left mx-3 newbeer-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                className="form-control"
                id="tagline"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="5"
                value={this.state.description}
                onChange={this.handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="first_brewed">First Brewed</label>
              <input
                type="text"
                className="form-control"
                id="first_brewed"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="brewers_tips">First Tips</label>
              <input
                type="text"
                className="form-control"
                id="brewers_tips"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="attenuation_level">Attenuation Level</label>
              <input
                type="number"
                className="form-control"
                id="attenuation_level"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contributed_by">Contributed By</label>
              <input
                type="text"
                className="form-control"
                id="contributed_by"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary w-100">
              ADD NEW
            </button>
          </form>
        );
      }
    }
export default NewBeer