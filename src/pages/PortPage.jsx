import React from 'react'
import { Link } from 'react-router-dom'
import GrowPet from '../images/Grow-a-pet.png'
import TeamProj from '../images/TeamProj.png'
import Wayfarer from '../images/Wayfarer.png'
class PortPage extends React.Component {
    render() {
        return (
            <body className="d-flex h-100 text-center text-white bg-dark">
                <header className="mb-auto">
                    <div>
                        <h3 className="float-md-start mb-0">D.K Nam</h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            <Link className="nav-link" to="#">Contact</Link>
                        </nav>
                    </div>
                </header>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

                    <main className="px-3">
                        <div className='portfolioItems'>
                            <div className='Project1'>
                                <a href='https://dataplant.github.io/ProjectZero/'><img className='pimg' src={Wayfarer} /></a>
                                <div className='ptitle'>Wayfarer</div>
                                <div className='p1desc'>Full-Stack MERN Application</div>
                                <br/><br/>
                            </div>
                            <div className='Project2'>
                                <a href='https://dkbrookeproj.herokuapp.com/'><img className='pimg' src={TeamProj} /></a>
                                <div className='ptitle'>E-HUB</div>
                                <div className='p2desc'>Full-Stack MERN Application</div>
                                <br/><br/>
                            </div>
                            <div className='Project3'>
                                <a href='https://dataplant.github.io/ProjectZero/'><img className='pimg' src={GrowPet} /></a>
                                <div className='ptitle'>Grow-A-Pet</div>
                                <div className='p3desc'>JavaScript/HTML/CSS Application Github Deployment</div>
                                <br/><br/>
                            </div>
                        </div>
                    </main>

                    <footer className="mt-auto text-white-50">
                        
                    </footer>
                </div>
            </body>
        )
    }
}
export default PortPage