import React from 'react'

function Tieude() {
    return (
        <div className="container text-white">
            <div className="row justify">
                <div className="col-md-3">
                    <div className="categoryheader">
                        <div className="noidungheader text-white">
                            <i className="fa fa-bars" />
                            <span className="text-uppercase font-weight-bold ml-1">
                                Danh mục sách
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="benphai float-right">
                        <div className="hotline">
                            <i className="fa fa-phone" />
                            <span>
                                Hotline:<b>1900 1999</b>{" "}
                            </span>
                        </div>
                        <i className="fas fa-comments-dollar" />
                        <a href="#">Hỗ trợ trực tuyến </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tieude
