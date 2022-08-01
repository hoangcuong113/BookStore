import React, { useState, useEffect } from 'react';
import Logo from '../Home/Header/Logo';
import Search from '../Search/Search';
import Account from '../Home/Header/Account';
import Cart from '../Home/Header/Cart';
import Tieude from '../Home/tieude/Tieude';
import AnhSp from './AnhSp';
import InforSach from './InforSach';
import ReviewSach from './ReviewSach';
import Footer from '../Home/Foooter/Footer';
import { useParams } from 'react-router';

import axios from '../Api-Server/Sach';

const Infor = (props) => {
    let { login, sachMua, buySach, onAdd } = props;

    const [sachMoi, setSachMoi] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        getSach();
    }, []);

    const getSach = async () => {
        try {
            let ressachmoi = await axios.get("sach");
            setSachMoi(ressachmoi.data);

        } catch (e) {
            console.log("co loi roi sep oi", e);
        }
    }
    let { id } = useParams();
    const getSachMua = (item) => {
        buySach(item);
    }


    return (
        <>
            {/* code cho nut like share facebook  */}
            <div id="fb-root" />
            {/* header */}
            <nav className="navbar navbar-expand-md bg-white navbar-light">
                <div className="container">
                    {/* logo  */}
                    <Logo ></Logo>
                    {/* navbar-toggler  */}

                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        {/* form tìm kiếm  */}
                        <Search></Search>
                        {/* ô đăng nhập đăng ký giỏ hàng trên header  */}
                        <ul className="navbar-nav mb-1 ml-auto">
                            <Account login={login}></Account>
                            <Cart></Cart>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* form dang ky khi click vao button tren header*/}
            {/* form dang nhap khi click vao button tren header*/}
            {/* thanh "danh muc sach" đã được ẩn bên trong + hotline + ho tro truc tuyen */}
            <section className="duoinavbar">
                <Tieude></Tieude>
            </section>
            {/* breadcrumb  */}
            {/* <DuongDan></DuongDan> */}
            {/* nội dung của trang  */}
            <section className="product-page mb-4" >
                <div className="container" >
                    {/* chi tiết 1 sản phẩm */}
                    <div className="product-detail bg-white p-4" >
                        <div className="row" style={{ "overflow": "visible " }} >
                            {/* ảnh  */}
                            <AnhSp sachMoi={sachMoi} id={id} ></AnhSp>
                            {/* thông tin sản phẩm: tên, giá bìa giá bán tiết kiệm, các khuyến mãi, nút chọn mua.... */}
                            <div className="col-md-7 khoithongtin">
                                <InforSach sachMoi={sachMoi} id={id} login={login} getSachMua={getSachMua} onAdd={onAdd} ></InforSach>
                            </div>
                            {/* decripstion của 1 sản phẩm: giới thiệu , đánh giá độc giả  */}
                            <ReviewSach sachMoi={sachMoi} id={id} ></ReviewSach>
                            {/* het product-description */}
                        </div>
                        {/* het row  */}
                    </div>
                    {/* het product-detail */}
                </div>
                {/* het container  */}
            </section>
            {/* thanh cac dich vu :mien phi giao hang, qua tang mien phi ........ */}
            <Footer></Footer>
        </>

    )
}

export default Infor
