
import Logo from '../Home/Header/Logo';
import Search from './Search';
import Cart from '../Home/Header/Cart';
import Tieude from '../Home/tieude/Tieude';
import Account from '../Home/Header/Account';
import Footer from '../Home/Foooter/Footer';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchCpn(props) {
    // let login = { login }
    let { ketquaTk } = props
    const [ketqua, setKetqua] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const kqSearch = (item) => {

        if (item.length > 0) {
            setKetqua(item);
        }
    }




    return (
        <>
            {/* code cho nut like share facebook  */}
            <div id="fb-root" />
            {/* header */}
            <nav className="navbar navbar-expand-md bg-white navbar-light">
                <div className="container">
                    {/* logo  */}
                    <Logo></Logo>
                    {/* navbar-toggler  */}
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        {/* form tìm kiếm  */}
                        <Search kqSearch={kqSearch}></Search>
                        {/* ô đăng nhập đăng ký giỏ hàng trên header  */}
                        <ul className="navbar-nav mb-1 ml-auto">
                            <Account ></Account>
                            <Cart></Cart>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* thanh tieu de "danh muc sach" + hotline + ho tro truc tuyen */}
            <section className="duoinavbar">
                <Tieude></Tieude>
            </section>

            <section className="content my-4">
                <div className="container">
                    <div className="noidung bg-white" style={{ width: "100%" }}>
                        {/* header của khối sản phẩm : tag(tác giả), bộ lọc và sắp xếp  */}
                        <div className="header-khoi-sp d-flex">

                            <div className="sort d-flex ml-auto">
                            </div>
                        </div>

                        {/* các sản phẩm  */}
                        <div className="items">
                            <div className="row">
                                {ketqua && ketqua.length > 0 && ketqua.map((item) => {
                                    return (
                                        <>
                                            <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo" key={item.id}>
                                                <div className="card ">
                                                    <Link
                                                        to={`/infor/${item.id}`}
                                                        className="motsanpham"
                                                        style={{ textDecoration: "none", color: "black" }}
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                                    >
                                                        <img
                                                            className="card-img-top anh"
                                                            src={item.image}
                                                            alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                                        />
                                                        <div className="card-body noidungsp mt-3">
                                                            <h6 className="card-title ten">
                                                                {item.title}
                                                            </h6>
                                                            <small className="tacgia text-muted">{item.author}</small>
                                                            <div className="gia d-flex align-items-baseline">
                                                                <div className="giamoi">111.200 ₫</div>
                                                                <div className="giacu text-muted">139.000 ₫</div>
                                                                <div className="sale">-20%</div>
                                                            </div>
                                                            <div className="danhgia">
                                                                <ul className="d-flex" style={{ listStyle: "none" }}>
                                                                    <li className="active">
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li className="active">
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li className="active">
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li className="active">
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                {ketqua && ketquaTk && ketquaTk.length > 0 && ketquaTk.map((item) => {
                                    return (
                                        <>
                                            <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo" key={item.id}>
                                                <div className="card ">
                                                    <Link
                                                        to={`/infor/${item.id}`}
                                                        className="motsanpham"
                                                        style={{ textDecoration: "none", color: "black" }}
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                                    >
                                                        <img
                                                            className="card-img-top anh"
                                                            src={item.image}
                                                            alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                                        />
                                                        <div className="card-body noidungsp mt-3">
                                                            <h6 className="card-title ten">
                                                                {item.title}
                                                            </h6>
                                                            <small className="tacgia text-muted">{item.author}</small>
                                                            <div className="gia d-flex align-items-baseline">
                                                                <div className="giamoi">111.200 ₫</div>
                                                                <div className="giacu text-muted">139.000 ₫</div>
                                                                <div className="sale">-20%</div>
                                                            </div>
                                                            <div className="danhgia">
                                                                <ul className="d-flex" style={{ listStyle: "none" }}>
                                                                    <li className="active">
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li className="active">
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li className="active">
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li className="active">
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>

                                    )
                                })}




                            </div>
                        </div>
                        {/* pagination bar */}

                        {/*het khoi san pham*/}
                    </div>
                    {/*het div noidung*/}
                </div>
                {/*het container*/}
            </section>

            <Footer></Footer>
        </>


    )
}

export default SearchCpn
