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
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">D.K Nam</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            <Link className="nav-link" to="#">Features</Link>
            <Link className="nav-link" to="#">Contact</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
