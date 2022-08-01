import React, { useState, useEffect } from 'react';
import Logo from './Header/Logo';
import Search from "../Search/Search";
import Account from './Header/Account';
import Cart from './Header/Cart';
import Tieude from './tieude/Tieude';
import Danhmuc from './ListSp/Danhmuc';
import Sliders from './ListSp/Slider';
import SachGiamGia from './Sachhay/SachHay';
import SachHot from './Sachhot/SachHot';
import SachSapRa from './SachSapRa/SachSapRa';
import SachMoi from './Sachmoi/SachMoi';
import Footer from './Foooter/Footer';
import axios from '../Api-Server/Sach';
function Home(props) {
    let { login, DangXuat, ketquaSearch } = props
    const [sach, setSach] = useState([]);
    const [danhmuc, setDanhmuc] = useState([]);
    const [sachKT, setSachKt] = useState([]);

    useEffect(() => {
        getSach();

    }, []);

    const getSach = async () => {
        try {
            let resSach = await axios.get("sach");
            let resDanhMuc = await axios.get("danhmuc");
            let resSachKT = await axios.get("danhmuc-sachKt");

            setSach(resSach.data);
            setDanhmuc(resDanhMuc.data);
            setSachKt(resSachKT.data);


        } catch (e) {
            console.log("co loi roi sep oi", e);
        }
    }
    const kqSearch = (item) => {
        ketquaSearch(item)
    }


    return (
        <>

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
                            <Account login={login} DangXuat={DangXuat} ></Account>
                            <Cart></Cart>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* thanh tieu de "danh muc sach" + hotline + ho tro truc tuyen */}
            <section className="duoinavbar">
                <Tieude></Tieude>
            </section>
            {/* noi dung danh muc sach(categories) + banner slider */}
            <section className="header bg-light">
                <div className="container">
                    <div className="row">
                        <Danhmuc danhmuc={danhmuc} sachKT={sachKT}></Danhmuc>
                        {/* banner slider  */}
                        <Sliders></Sliders>
                    </div>
                </div>
            </section>
            <SachMoi sachMoi={sach.filter(item => item.type === "sachmoi")}></SachMoi>
            {/* khoi sach moi  */}
            <SachGiamGia sachgiamgia={sach.filter(item => item.type === "sachgiamgia")}></SachGiamGia>
            <SachSapRa sachSRM={sach.filter(item => item.type === "sapphathanh")}></SachSapRa>

            <SachHot sachHot={sach.filter(item => item.type === "sachhot")}></SachHot>


            <Footer></Footer>

        </>

    )
}

export default Home
