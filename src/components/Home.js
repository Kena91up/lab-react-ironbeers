import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
        <div className="all-beers">
          <img src="./images/beers.png" alt="beers" />
          <h2 className="text-left">
            <Link className="badge badge-light ml-3" to="/beers">
              All Beers
            </Link>
          </h2>
          <div className="home-text text-left mb-5 mx-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Viramus pharetra eggestas
              lectus,sit amet aleifend ex tincidunt in.
               Nam dictum arcu ut dignissim varius.
            </p>
          </div>
        </div>
        <div className="random-beer">
          <img src="./images/random-beer.png" alt="beers" />
          <h2 className="text-left">
            <Link className="badge badge-light ml-3" to="/random-beer">
              Random Beer
            </Link>
          </h2>
          <div className="home-text text-left mb-5 mx-2">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Viramus pharetra eggestas
              lectus,sit amet aleifend ex tincidunt in.
               Nam dictum arcu ut dignissim varius.
            </p>
          </div>
        </div>
        <div className="new-beer">
          <img src="./images/new-beer.png" alt="new-beer" />
          <h2 className="text-left">
            <Link className="badge badge-light ml-3" to="/new-beer">
              New Beer
            </Link>
          </h2>
          <div className="home-text text-left mb-5 mx-2">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Viramus pharetra eggestas
              lectus,sit amet aleifend ex tincidunt in.
               Nam dictum arcu ut dignissim varius.
            </p>
          </div>
        </div>
      </div>
            </div>
        )
    }
}
export default Home