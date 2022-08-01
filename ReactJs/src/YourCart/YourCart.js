import React, { useState, useEffect } from 'react';
import Logo from '../Home/Header/Logo';
import Search from '../Search/Search';
import Account from '../Home/Header/Account';
import Cart from '../Home/Header/Cart';
import Tieude from '../Home/tieude/Tieude';
import Footer from '../Home/Foooter/Footer';
import { Link } from 'react-router-dom';

function YourCart(props) {
    let { cartItem, onAdd, onRemove, checkLogin } = props;

    const totalCart = () => {
        let totalCart = cartItem.reduce((a, c) => a + parseInt(c.prince) * parseInt(c.qty), 0);
        return totalCart

    }


    return (
        <>
            <div id="fb-root" />
            <nav className="navbar navbar-expand-md bg-white navbar-light">
                <div className="container">
                    <Logo></Logo>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <Search></Search>
                        <ul className="navbar-nav mb-1 ml-auto">
                            <Account ></Account>
                            <Cart></Cart>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="duoinavbar">
                <Tieude></Tieude>
            </section>
            <>
                <section className="content my-3" style={{ minHeight: "400px" }}>
                    <div className="container">
                        <div className="cart-page bg-white">
                            <div className="row">
                                {/* giao diện giỏ hàng khi không có item  */}
                                <div className="col-md-10 cart">
                                    <div className="cart-content py-3 pl-3">
                                        {cartItem.length === 0 && <h3 className="header-gio-hang" style={{ textAlign: "center" }}> GIỎ HÀNG CỦA BẠN CHƯA CÓ SẢN PHẨM      </h3>}
                                        {cartItem.map((item) => {
                                            return (
                                                <>
                                                    <div className="cart-list-items" key={item.id} >
                                                        <div className="cart-item d-flex">
                                                            <Link to="#" className="img">
                                                                <img src={item.image}
                                                                    className="img-fluid" alt="anhsp1" />
                                                            </Link>
                                                            <div className="item-caption d-flex w-100">
                                                                <div className="item-info ml-3">
                                                                    <h5 className="ten">
                                                                        {item.title}
                                                                    </h5>
                                                                    <div className="soluong d-flex">
                                                                        <div className="input-number input-group mb-3">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text btn-spin btn-dec"
                                                                                    onClick={() => onRemove(item)}
                                                                                >-</span>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                // defaultValue={1}
                                                                                className="soluongsp  text-center"
                                                                                value={item.qty}

                                                                            />
                                                                            <div className="input-group-append">
                                                                                <span className="input-group-text btn-spin btn-inc"
                                                                                    onClick={() => onAdd(item)}
                                                                                >+</span>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="item-price ml-auto d-flex flex-column align-items-end">
                                                                    <div>Đơn Giá</div>
                                                                    <div className="giamoi">{item.prince}₫</div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                        {cartItem.length !== 0 && <div className="item-price ml-auto d-flex flex-column align-items-end">
                                            <div>Tổng Tiền:{totalCart()} 000 Đ</div>
                                            <button onClick={checkLogin}>Thanh Toán</button>
                                        </div>}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </>


            <Footer></Footer>
        </>

    )
}

export default YourCart
