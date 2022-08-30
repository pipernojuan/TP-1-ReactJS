import "./StyleCarrito.css" 
import carrito from "./Images/carrito.png"

const CartWidget = () => {
    return ( 
        <div className="cart">
        <a href="#"><div><img src={carrito} width={"25px"} alt="Carrito" /></div></a>
    </div>
    );
};

export default CartWidget