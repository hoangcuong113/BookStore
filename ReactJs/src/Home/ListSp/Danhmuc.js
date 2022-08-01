import React from 'react';
import { Link } from 'react-router-dom';

function Danhmuc(props) {
    let { danhmuc, sachKT } = props;
    return (
        <div className="col-md-3" style={{ marginRight: "-15px" }}>
            {/* CATEGORIES */}
            <div className="categorycontent">
                <ul>
                    {danhmuc.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link to="#"> {item.title}</Link>
                                <i className="fa fa-chevron-right float-right" />

                                <ul>
                                    <li className="liheader">
                                        <Link to="#" className="header text-uppercase">
                                            {item.title}
                                        </Link>
                                    </li>
                                    {item.title === " Sách Kinh Tế - Kỹ Năng" &&
                                        <>
                                            <div className="content trai">
                                                {sachKT.map((book) => {
                                                    return (
                                                        <li key={book.id}>
                                                            <Link to="#">{book.titlel}</Link>
                                                        </li>)
                                                })}
                                            </div>
                                            <div className="content phai">
                                                {sachKT.map((book) => {
                                                    return (
                                                        <li key={book.id}>
                                                            <Link to="#">{book.titlel}</Link>
                                                        </li>)
                                                })}
                                            </div>
                                        </>
                                    }



                                </ul>
                            </li>




                        )
                    })}

                </ul>
            </div>
        </div>


    )
}

export default Danhmuc
