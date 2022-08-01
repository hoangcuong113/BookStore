import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Account(props) {
    let { login, DangXuat } = props;
    const [email, setEmail] = useState("");
    const [checkLogin, setCheckLogin] = useState(false);

    useEffect(() => {
        getDataLocal();
    }, [])
    const getDataLocal = async () => {
        let res = await localStorage.getItem('email');
        let check = await localStorage.getItem('checkLogin');
        setEmail(res);
        setCheckLogin(check)
    }

    const logOut = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("checkLogin");
    }
    return (
        <>
            <div className="dropdown" >
                <li
                    className="nav-item account"
                    type="button"
                    data-toggle="dropdown"
                >
                    {/* <Link to={login ? '/login' : '/'} className="btn btn-secondary rounded-circle"
                    // style={{ 'backgroundImage': 'url("../images/nhan-vien-giao-nhan.png") ' }}
                    >
                        <i class="fa fa-user"></i>

                    </Link> */}
                    <Link
                        className="nav-link text-dark text-uppercase"
                        to={login ? '/login' : '/'}
                        style={{ display: "inline-block", fontSize: "12px" }}
                    >
                        {email}
                    </Link>
                </li>

            </div>
            <div className="dropdown" onClick={logOut} >
                <li
                    className="nav-item account"
                    type="button"
                    data-toggle="dropdown"
                >

                    <Link
                        className="nav-link text-dark text-uppercase"
                        to={checkLogin ? "/#" : "/login"}
                        style={{ display: "inline-block" }}
                    >
                        {checkLogin ? 'Đăng Xuất' : 'Đăng Nhập'}
                    </Link>
                </li>

            </div>
        </>
    )
}

export default Account
