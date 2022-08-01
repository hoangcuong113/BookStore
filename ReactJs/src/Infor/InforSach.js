import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function InforSach(props) {
    let { sachMoi, id, getSachMua, onAdd } = props;
    const invoid = sachMoi.find(sachMoi => sachMoi.id === id);




    return (
        <div className="row">
            <div className="col-md-8 header">
                <h4 className="ten">{invoid && invoid.title}</h4>
                <div className="rate">
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star " />
                </div>

            </div>
            <div className="col-md-7">
                <div className="gia">
                    <div className="giabia">
                        Giá bìa:<span className="giacu ml-2">139.000 ₫</span>
                    </div>
                    <div className="giaban">
                        Giá bán tại DealBooks:{" "}
                        <span className="giamoi font-weight-bold">{invoid && invoid.prince}</span>
                        <span className="donvitien">₫</span>
                    </div>
                    <div className="tietkiem">
                        Tiết kiệm: <b>10.000 ₫</b>{" "}
                        <span className="sale">-20%</span>
                    </div>
                </div>
                <div className="uudai my-3">
                    <h6 className="header font-weight-bold">
                        Khuyến mãi &amp; Ưu đãi tại DealBook:
                    </h6>
                    <ul>
                        <li>
                            <b>Miễn phí giao hàng </b>cho đơn hàng từ 150.000đ ở
                            TP.HCM và 300.000đ ở Tỉnh/Thành khác

                        </li>
                        <li>
                            <b>Combo sách HOT - GIẢM 25% </b>

                        </li>
                        <li>Tặng Bookmark cho mỗi đơn hàng</li>
                        <li>Bao sách miễn phí (theo yêu cầu)</li>
                    </ul>
                </div>
                <div className="nutmua btn w-100 text-uppercase">
                    <button style={{ background: "yellow", borderRadius: "5px", height: "40px", width: "200px" }} onClick={() => onAdd(invoid)}>Thêm Vào Giỏ Hàng</button>
                </div>



            </div>
            {/* thông tin khác của sản phẩm:  tác giả, ngày xuất bản, kích thước ....  */}
            <div className="col-md-5">
                <div className="thongtinsach">
                    <ul>
                        <li>
                            Tác giả:{" "}
                            <a href="#" className="tacgia">
                                {invoid && invoid.author}
                            </a>
                        </li>
                        <li>
                            Ngày xuất bản: <b>04-2020</b>
                        </li>
                        <li>
                            Kích thước: <b>20.5 x 13.5 cm</b>
                        </li>
                        <li>Dịch giả: Skye Phan;</li>
                        <li>Nhà xuất bản: Nhà Xuất Bản Thanh Niên</li>
                        <li>
                            Hình thức bìa: <b>Bìa mềm</b>
                        </li>
                        <li>
                            Số trang: <b>336</b>
                        </li>
                        <li>
                            Cân nặng: <b>0.89</b>
                        </li>
                    </ul>
                </div>
            </div>
        </div >

    )
}

export default InforSach
