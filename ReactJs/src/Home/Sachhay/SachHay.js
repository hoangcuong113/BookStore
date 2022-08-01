import React from 'react';
import { Link } from 'react-router-dom';

function SachGiamGia(props) {
    let { sachgiamgia } = props;

    let Type;
    if (sachgiamgia.length > 0) {
        Type = sachgiamgia[0].type
    }
    return (
        <section className="_1khoi sachnendoc bg-white mt-4">
            <div className="container">
                <div className="noidung" style={{ width: "100%" }}>
                    <div className="row">
                        {/*header*/}
                        <div className="col-12 d-flex justify-content-between align-items-center pb-2 bg-transparent pt-4">
                            <h2 className="header text-uppercase" style={{ fontWeight: 400 }}>
                                COMBO SÁCH HOT - GIẢM ĐẾN 25%
                            </h2>
                            <Link to={`/allsp/${Type}`} className="btn btn-warning btn-sm text-white">
                                Xem tất cả
                            </Link>
                        </div>
                        {/* 1 san pham */}
                        {sachgiamgia.map((item) => {
                            return (
                                <div className="col-lg col-sm-4" key={item.id}>
                                    <div className="card">
                                        <Link
                                            to={`/infor/${item.id}`}
                                            className="motsanpham"
                                            style={{ textDecoration: "none", color: "black" }}
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Chuyện Nghề Và Chuyện Đời - Bộ 4 Cuốn"
                                        >
                                            <img
                                                className="card-img-top anh"
                                                src={item.image}
                                                alt="combo-chuyen-nghe-chuyen-doi"
                                            />
                                            <div className="card-body noidungsp mt-3">
                                                <h3 className="card-title ten">{item.title}</h3>
                                                <small className="tacgia text-muted">{item.author}</small>
                                                <div className="gia d-flex align-items-baseline">
                                                    <div className="giamoi">{item.prince}</div>
                                                    <div className="giacu text-muted">{item.giacu}VNĐ</div>
                                                    <div className="sale">-20%</div>
                                                </div>

                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            )
                        })}


                    </div>
                </div>
                <hr />
            </div>
        </section >
    )
}

export default SachGiamGia
