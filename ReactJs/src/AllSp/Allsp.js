
import Logo from '../Home/Header/Logo';
import Search from '../Search/Search';
import Cart from '../Home/Header/Cart';
import Tieude from '../Home/tieude/Tieude';
import Account from '../Home/Header/Account';
import Footer from '../Home/Foooter/Footer';
import React, { useState, useEffect } from 'react';
import axios from '../Api-Server/Sach';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Allsp(props) {
    const [sach, setSach] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        getSach();

    }, []);
    const getSach = async () => {
        try {
            let resSach = await axios.get("sach");
            setSach(resSach.data)
        } catch (e) {
            console.log("co loi roi sep oi", e);
        }
    }
    let { type } = useParams();
    let invoid = sach.filter(sach => sach.type === type);
    const sortArr = (sortBy, sortValue) => {
        console.log("sortBy>>", sortBy, "--", "sortValue>>", sortValue);
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
                        <Search></Search>
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
                        {/* các sản phẩm  */}
                        <div className="items">
                            <div className="row">
                                {invoid.map((item) => {
                                    return (
                                        <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo">
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




                                    )
                                })}
                                {invoid.map((item) => {
                                    return (
                                        <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo">
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




                                    )
                                })}


                            </div>
                        </div>
                        {/* pagination bar */}
                        <div className="pagination-bar my-3">
                            <div className="row">
                                <div className="col-12">
                                    <nav>
                                        <ul className="pagination justify-content-center">
                                            {/* <li class="page-item disabled">
                                  <a class="page-link" href="#" aria-label="Previous">
                                      <span aria-hidden="true">&laquo;</span>
                                      <span class="sr-only">Previous</span>
                                  </a>
                              </li> */}
                                            {/* <li className="page-item active">
                                                <Link className="page-link" to="#">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Next">
                                                    <span aria-hidden="true">›</span>
                                                    <span className="sr-only">Next</span>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                    <span className="sr-only">Next</span>
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        {/*het khoi san pham*/}
                    </div>
                    {/*het div noidung*/}
                </div>
                {/*het container*/}
            </section>
            {/*het _1khoi*/}
            {/* thanh cac dich vu :mien phi giao hang, qua tang mien phi ........ */}
            <Footer></Footer>
        </>


    )
}

export default Allsp
