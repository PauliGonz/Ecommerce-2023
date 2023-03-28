export function NavBarComponent({cart}) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="/logo192.png" width={50} height="50"></img>
                <a className="navbar-brand" >Pagina prueba</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >CARRITO - {cart.length}</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </div>
        </nav>
    )
}