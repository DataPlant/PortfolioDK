import React from 'react'
import { Link } from 'react-router-dom'
import GrowPet from '../images/Grow-a-pet.png'
import TeamProj from '../images/TeamProj.png'
import Wayfarer from '../images/Wayfarer.png'
class PortPage extends React.Component {
    render() {
        return (
            <body className="bodyBox">
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