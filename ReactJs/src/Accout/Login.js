import React, { useState, useEffect } from 'react';
import Logo from '../Home/Header/Logo';
import Footer from '../Home/Foooter/Footer';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from '../Api-Server/Sach';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const hanldeClickLogin = async (event) => {
        event.preventDefault();
        let res = await axios.get("taikhoan");
        let checkLogin = false;
        for (let i = 0; i < res.data.length; i++) {
            if (email === res.data[i].email && password === res.data[i].password) {
                navigate("/");
                checkLogin = true;
                localStorage.setItem('email', email);
                localStorage.setItem('checkLogin', checkLogin);
            }
        }
        if (!checkLogin) {
            alert("tài khoản hoặc mật khẩu không chính xác!!!!vui lòng thử lại");
        }
    }
    return (
        <>
            <div >
                <nav className="navbar navbar-expand-md bg-white navbar-light" >
                    <div className="container"
                    >
                        {/* logo  */}
                        <Logo></Logo>
                        {/* navbar-toggler  */}
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            {/* form tìm kiếm  */}
                            {/* <Search></Search> */}
                            {/* ô đăng nhập đăng ký giỏ hàng trên header  */}
                            <ul className="navbar-nav mb-1 ml-auto">
                                {/* <Account login={login}></Account> */}
                                {/* <Cart></Cart> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div
                // className="modal fade mt-5"
                id="formdangnhap"
                data-backdrop="static"
                // tabIndex={-1}
                aria-labelledby="dangnhap_tieude"
                aria-hidden="true"
            >
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <ul className="tabs d-flex justify-content-around list-unstyled mb-0">
                                <li className="tab tab-dangnhap text-center active">
                                    <NavLink to="/login" className=" text-decoration-none ">Đăng nhập</NavLink>
                                    <hr />
                                </li>
                                <li className="tab tab-dangky text-center">
                                    <NavLink to="/dangki" className="text-decoration-none ">Đăng ký</NavLink>
                                    <hr />
                                </li>
                            </ul>

                        </div>
                        <div className="modal-body">
                            <form id="form-signin" className="form-signin mt-2">
                                <div className="form-label-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Nhập địa chỉ email"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}

                                    />
                                </div>
                                <div className="form-label-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Mật khẩu"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button
                                    className="btn btn-lg btn-block btn-signin text-uppercase text-white"
                                    type="submit"
                                    style={{ background: "#F5A623" }}
                                    onClick={hanldeClickLogin}
                                >
                                    Đăng nhập

                                </button>
                                <hr className="my-4" />

                            </form>
                        </div>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </>

    )
}

export default Login
