import React from 'react';
import { Link } from 'react-router-dom';

function SachSapRa(props) {
    let { sachSRM } = props;
    let Type;
    if (sachSRM.length > 0) {
        Type = sachSRM[0].type
    }
    return (
        <section className="_1khoi sachnendoc bg-white mt-4">
            <div className="container">
                <div className="noidung" style={{ width: "100%" }}>
                    <div className="row">
                        {/*header*/}
                        <div className="col-12 d-flex justify-content-between align-items-center pb-2 bg-transparent pt-4">
                            <h2 className="header text-uppercase" style={{ fontWeight: 400 }}>
                                SÁCH SẮP PHÁT HÀNH / ĐẶT TRƯỚC
                            </h2>
                            <Link to={`/allsp/${Type}`} className="btn btn-warning btn-sm text-white">
                                Xem tất cả
                            </Link>
                        </div>
                        {/* 1 san pham */}
                        {sachSRM.length > 0 && sachSRM.map((item) => {
                            return (
                                <div className="col-lg col-sm-4" key={item.id}>
                                    <div className="card">
                                        <Link
                                            to={`/infor/${item.id}`}
                                            className="motsanpham"
                                            style={{ textDecoration: "none", color: "black" }}
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Từng bước chân nở hoa: Khi câu kinh bước tới"
                                        >
                                            <img
                                                className="card-img-top anh"
                                                src={item.image}
                                                alt="tung-buoc-chan-no-hoa"
                                            />
                                        </Link>
                                        <div className="card-body noidungsp mt-3">
                                            <Link
                                                to={`/infor/${item.id}`}
                                                className="motsanpham"
                                                style={{ textDecoration: "none", color: "black" }}
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                title="Từng bước chân nở hoa: Khi câu kinh bước tới"
                                            >
                                                <h3 className="card-title ten">
                                                    {item.title}
                                                </h3>
                                                <small className="thoigian text-muted">{item.author}</small>
                                            </Link>
                                            {/* <div>
                                                <Link
                                                    href="#"
                                                    className="motsanpham"
                                                    style={{ textDecoration: "none", color: "black" }}
                                                    data-toggle="tooltip"
                                                    data-placement="bottom"
                                                    title="Từng bước chân nở hoa: Khi câu kinh bước tới"
                                                />
                                            </div> */}
                                        </div>
                                    </div>
                                </div>


                            )
                        })

                        }

                    </div>
                </div>
                <hr />
            </div>
        </section>
    )
}

export default SachSapRa
