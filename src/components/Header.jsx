import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'



class Header extends React.Component {

  state = {
    categoryIdx: 0,
    showModalPopup: false

  }

  isShowPopup = (status) => {
    this.setState({ showModalPopup: status });
  };

  render() {

    return (
      // <header className="header">
      //   <h1 className="header-title">D.K. Nam</h1>

      //   <nav>
      //     <ul className="navList">
      //       <li>
      //         <Link className="navLink1" to="/home">Home</Link>
      //       </li>
      //       <li>
      //         <Link 
      //         className="navLink1" to="/cities">By Cities</Link>
      //       </li>
      //       <li>
      //           <Link
      //           className="navLink1" to="/pins">Make a Pin</Link>
      //       </li>
      //     </ul>
      //   </nav>

      // </header>
      <header className="mb-auto">
        <div className="navBOX">
          <h3 className="float-md-start mb-0">D.K Nam <h6>Front-End, Back-End, Fullstack Developer</h6></h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <Link className="nav-link active" aria-current="page" to="/PortfolioDK/">Home</Link>
            <Link className="nav-link" to="/PortfolioDK/portfolio">Portfolio</Link>
            <a href="https://docs.google.com/document/d/1EEzo85o3IkqnP-en1unfnyePvi5mwsCyjSizsLSjyNY/edit?usp=sharing" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
