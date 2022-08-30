import style from "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.js"

const NavBar = () => {
return (

    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Carrito</a>
        <CartWidget />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Quién soy</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Piezas de cerámica
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Tazas</a></li>
                <li><a class="dropdown-item" href="#">Cazuelas</a></li>
                <li><a class="dropdown-item" href="#">Bowls y ensaladeras</a></li>
                <li><a class="dropdown-item" href="#">Accesorios para tu jardín</a></li>
                <li><a class="dropdown-item" href="#">Platos</a></li>
                <li><a class="dropdown-divider"></a></li>
                <li><a class="dropdown-item" href="#">Tu pieza personalizada</a></li>
            </ul>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled">Contactame</a>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Buscá en mi página</button>
        </form>
        </div>
    </div>
    </nav>
)
}

export default NavBar
