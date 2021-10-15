import React from 'react'
import { Link } from 'react-router-dom'


class HomePage extends React.Component {
    render() {
        return (
            <body className="d-flex h-100 text-center text-white bg-dark">
                <header className="mb-auto">
                    <div>
                        <h3 className="float-md-start mb-0">D.K Nam</h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <Link className="nav-link active" aria-current="page" to="/PortfolioDK/">Home</Link>
                            <Link className="nav-link" to="/PortfolioDK/portfolio">Portfolio</Link>
                            <Link className="nav-link" to="#">Contact</Link>
                        </nav>
                    </div>
                </header>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

                    <main className="px-3">
                        <h1>Greetings, </h1>
                        <h1>My Name is DK and...</h1>
                        <p className="lead">I am a motivated Full-Stack Developer transitioning from the service sector, bringing with me patience, work-ethic, social skills, and flexibility needed to survive in it. It is my personal goal to apply these skills to thrive in the programming world.</p>
                        <p className="lead">
                            <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Download Resume</a>
                        </p>
                    </main>

                    <footer className="mt-auto text-white-50">
                        
                    </footer>
                </div>
            </body>
        )
    }
}
export default HomePage