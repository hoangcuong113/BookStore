import React from 'react'

function DuongDan() {
    return (
        <section className="breadcrumbbar">
            <div className="container">
                <ol className="breadcrumb mb-0 p-0 bg-transparent">
                    <li className="breadcrumb-item">
                        <a href="index.html">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Sách kinh tế</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a href="#">Sách kỹ năng làm việc</a>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default DuongDan
