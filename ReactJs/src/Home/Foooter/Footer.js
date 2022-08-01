import React from 'react'

function Footer() {
    return (
        <>
            <section
                className="abovefooter text-white"
                style={{ backgroundColor: "#309fe4" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="dichvu d-flex align-items-center">
                                <img src="../images/icon-books.png" alt="icon-books" />
                                <div className="noidung">
                                    <h3 className="tieude font-weight-bold">
                                        HƠN 14.000 TỰA SÁCH HAY
                                    </h3>
                                    <p className="detail">Tuyển chọn bởi DealBooks</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="dichvu d-flex align-items-center">
                                <img src="../images/icon-ship.png" alt="icon-ship" />
                                <div className="noidung">
                                    <h3 className="tieude font-weight-bold">MIỄN PHÍ GIAO HÀNG</h3>
                                    <p className="detail">Từ 150.000đ ở TP.HCM</p>
                                    <p className="detail">Từ 300.000đ ở tỉnh thành khác</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="dichvu d-flex align-items-center">
                                <img src="../images/icon-gift.png" alt="icon-gift" />
                                <div className="noidung">
                                    <h3 className="tieude font-weight-bold">QUÀ TẶNG MIỄN PHÍ</h3>
                                    <p className="detail">Tặng Bookmark</p>
                                    <p className="detail">Bao sách miễn phí</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="dichvu d-flex align-items-center">
                                <img src="../images/icon-return.png" alt="icon-return" />
                                <div className="noidung">
                                    <h3 className="tieude font-weight-bold">ĐỔI TRẢ NHANH CHÓNG</h3>
                                    <p className="detail">Hàng bị lỗi được đổi trả nhanh chóng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-3 col-xs-6">
                            <div className="gioithieu">
                                <h3 className="header text-uppercase font-weight-bold">
                                    Về DealBook
                                </h3>
                                <a href="#">Giới thiệu về DealBook</a>
                                <a href="#">Tuyển dụng</a>
                                <div
                                    className="fb-like"
                                    data-href="https://www.facebook.com/DealBook-110745443947730/"
                                    data-width="300px"
                                    data-layout="button"
                                    data-action="like"
                                    data-size="small"
                                    data-share="true"
                                />
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="hotrokh">
                                <h3 className="header text-uppercase font-weight-bold">
                                    HỖ TRỢ KHÁCH HÀNG
                                </h3>
                                <a href="#">Hướng dẫn đặt hàng</a>
                                <a href="#">Phương thức thanh toán</a>
                                <a href="#">Phương thức vận chuyển</a>
                                <a href="#">Chính sách đổi trả</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="lienket">
                                <h3 className="header text-uppercase font-weight-bold">
                                    HỢP TÁC VÀ LIÊN KẾT
                                </h3>
                                <img
                                    src="../images/dang-ky-bo-cong-thuong.png"
                                    alt="dang-ky-bo-cong-thuong"
                                />
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="ptthanhtoan">
                                <h3 className="header text-uppercase font-weight-bold">
                                    Phương thức thanh toán
                                </h3>
                                <img src="../images/visa-payment.jpg" alt="visa-payment" />
                                <img
                                    src="../images/master-card-payment.jpg"
                                    alt="master-card-payment"
                                />
                                <img src="../images/jcb-payment.jpg" alt="jcb-payment" />
                                <img src="../images/atm-payment.jpg" alt="atm-payment" />
                                <img src="../images/cod-payment.jpg" alt="cod-payment" />
                                <img src="../images/payoo-payment.jpg" alt="payoo-payment" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
