function Navbar(){
    return(
    <header className="navbar-container">
        <div className="navbar-elements">
            <div className="navigation">
                <a href="#introduction-link" className="nav">Introduction</a>
                <a href="#objectives-link" className="nav">Objectives</a>
                <a href="#posts-link" className="nav">Posts</a>
                <a href="#projects-link" className="nav">Projects</a>
            </div>
            <div className="year">
                <p className="year-element">2023</p>
            </div>
        </div>
    </header>
    )
}
export default Navbar;