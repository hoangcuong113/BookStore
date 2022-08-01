import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    return (

        <li className="nav-item giohang">
            <div>
                <Link
                    to="/cart"
                    className="btn btn-secondary rounded-circle"
                    style={{ 'backgroundImage': 'url("../images/shopping-cart-not-product.png") ' }}>
                </Link>
                <Link
                    className="nav-link text-dark giohang text-uppercase"
                    to="/cart"
                    style={{ display: "inline-block" }}
                >
                    Giỏ Hàng
                </Link>
            </div>
        </li>

    )
}
export default Cart
