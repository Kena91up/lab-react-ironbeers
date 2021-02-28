import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
          <header>
          <nav>
            <Link className="link" to="/">
              <img src="https://i.postimg.cc/t7WCNSZC/home.png" alt="Home" />
            </Link>
          </nav>
        </header>
        )
    }
}
export default  Header