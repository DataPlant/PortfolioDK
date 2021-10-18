import React from 'react'
import { Link } from 'react-router-dom'
import Hireme from '../images/Hireme.png'

class HomePage extends React.Component {
    render() {
        return (
            <body className="bodyBox">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

                    <main className="px-3">
                        <h1>Greetings, </h1>
                        <h1>My Name is DK and...</h1>
                        <p className="lead">I am a motivated Full-Stack Developer transitioning from the service sector, bringing with me patience, work-ethic, social skills, and flexibility needed to survive in it. It is my personal goal to apply these skills to thrive in the programming world.</p>
                        <p className="lead">
                            <a href="https://docs.google.com/document/d/1EEzo85o3IkqnP-en1unfnyePvi5mwsCyjSizsLSjyNY/edit?usp=sharing" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Download Resume</a>
                        </p>
                        <br/>
                        <a><img src={Hireme} /></a>
                        <div className='skills'>
                            <div className='skill1'>
                                <h3>Language Skills</h3>
                                <h5>JavaScript | HTML | CSS | Python | R</h5>
                                <p></p>
                            </div>
                        </div>
                    </main>
                </div>
                <div className='fullstack'>
                    <div className='skill'>
                        <h3>Data / Backend Skills</h3>
                        <h5>MongoDB | Node.js | Express.js | Git | JSON | REST APIs | AtlasDB</h5>
                        <p></p>
                    </div>
                    <div className='skill'>
                        <h3>Frontend Skills</h3>
                        <h5>React.js | HTML | CSS | SASS | SCSS | Heroku | Github</h5>
                        <p></p>
                    </div>
                </div>

                <footer className="mt-auto text-white-50">
                    <h6><em>Built with React.js</em></h6>
                </footer>
            </body>
        )
    }
}
export default HomePage