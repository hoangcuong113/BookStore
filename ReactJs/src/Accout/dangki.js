import React, { useState, useEffect } from 'react';
import Logo from '../Home/Header/Logo';

import Footer from '../Home/Foooter/Footer';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from '../Api-Server/Sach';
import { toast } from 'react-toastify';

function Dangki(props) {

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    let navigate = useNavigate();

    const hanldeClick = async (event) => {
        console.log("checkk>>>");
        event.preventDefault();
        let res = await axios.get("taikhoan");
        if (password !== password2) {
            alert("mat khau khong trung!!")
        }
        else if (!fullName || !email || !phone || !password || !password2) {
            alert("Không được bỏ trống!!!");

        }

        else {


            let checkMail = false;

            for (let i = 0; i < res.data.length; i++) {
                if (email === res.data[i].email) {
                    checkMail = true;
                    alert("Email đã tồn tại!!!");
                    break;

                }
            }

            if (!checkMail) {

                toast.success("đăng ký tài khoản thành công");

                await axios.post("taikhoan", { fullName, phone, email, password });
                navigate("/login");
            }


        }

    }

    return (
        <>

            {/* Same as */}

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
                                <li className="tab tab-dangnhap text-center">
                                    <NavLink to="/login" className=" text-decoration-none">Đăng nhập</NavLink>
                                    <hr />
                                </li>
                                <li className="tab tab-dangky text-center active">
                                    <NavLink to="/dangki" className="text-decoration-none">Đăng ký</NavLink>
                                    <hr />
                                </li>
                            </ul>

                        </div>
                        <div className="modal-body">
                            <form id="form-signin" className="form-signin mt-2">
                                <div className="form-label-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="nhập họ và tên"
                                        name="taikhoan"
                                        onChange={(e) => setFullName(e.target.value)}
                                        value={fullName}

                                    />
                                </div>
                                <div className="form-label-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập số điện thoại"
                                        name="phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}

                                    />
                                </div>
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
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}

                                    />
                                </div>
                                <div className="form-label-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder=" Nhập Lại Mật khẩu"
                                        name="password"
                                        onChange={(e) => setPassword2(e.target.value)}
                                        value={password2}

                                    />
                                </div>
                                <button
                                    className="btn btn-lg btn-block btn-signin text-uppercase text-white"
                                    type="submit"
                                    style={{ background: "#F5A623" }}
                                    onClick={hanldeClick}
                                >
                                    Đăng kí
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </>

    )
}

export default Dangki
