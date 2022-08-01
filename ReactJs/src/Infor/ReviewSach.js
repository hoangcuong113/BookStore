import React from 'react'

function ReviewSach(props) {
    let { sachMoi, id } = props;
    const invoid = sachMoi.find(sachMoi => sachMoi.id === id);
    return (
        <div className="product-description col-md-9">
            {/* 2 tab ở trên  */}
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                        className="nav-item nav-link active text-uppercase"
                        id="nav-gioithieu-tab"
                        data-toggle="tab"
                        href="#nav-gioithieu"
                        role="tab"
                        aria-controls="nav-gioithieu"
                        aria-selected="true"
                    >
                        Giới thiệu
                    </a>

                </div>
            </nav>
            {/* nội dung của từng tab  */}
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active ml-3"
                    id="nav-gioithieu"
                    role="tabpanel"
                    aria-labelledby="nav-gioithieu-tab"
                >
                    <h6 className="tieude font-weight-bold">
                        {invoid && invoid.title}
                    </h6>
                    <p>
                        <span>
                            Khi bắt đầu thành lập doanh nghiệp hay mở rộng quy mô hoạt
                            động, lập ra một bản kế hoạch kinh doanh là bước đi đầu tiên
                            không thể thiếu. Bản kế hoạch kinh doanh càng được chuẩn bị
                            kỹ lưỡng và lôi cuốn bao nhiêu, cơ hội ghi điểm trước các
                            nhà đầu tư càng lớn bấy nhiêu. Phải chăng, thông qua bản kế
                            hoạch kinh doanh, bạn muốn người đọc:
                        </span>
                    </p>
                    <p>
                        <span>
                            - Đầu tư vào một ý tưởng kinh doanh mới hay một doanh nghiệp
                            đang hoạt động?
                        </span>
                    </p>
                    <p>
                        <span>- Mua lại doanh nghiệp của bạn?</span>
                    </p>
                    <p>
                        <span>- Tham gia liên doanh với bạn?</span>
                    </p>
                    <p>
                        <span>
                            - Chấp nhận đề nghị của bạn để thực hiện hợp đồng?
                        </span>
                    </p>
                    <p>
                        <span>
                            - Cấp cho bạn một khoản hỗ trợ hoặc phê duyệt theo quy định?
                        </span>
                    </p>
                    <p>
                        <span>
                            - Thuyết phục hội đồng quản trị thay đổi phương hướng hoạt
                            động doanh nghiệp của bạn?
                        </span>
                    </p>
                    <p>
                        <span>
                            Cuốn sách “Lập kế hoạch kinh doanh hiệu quả” sẽ hướng dẫn
                            bạn cách để tạo ra bản kế hoạch kinh doanh thu hút mọi tổ
                            chức tài chính, khiến họ phải đáp ứng mong muốn của bạn và
                            hỗ trợ bạn tới cùng trong công việc kinh doanh. Thông qua
                            cuốn sách, bạn sẽ biết cách:
                        </span>
                    </p>
                    <p>
                        <span>
                            Tạo ra bản kế hoạch kinh doanh hoàn chỉnh Xây dựng chiến
                            lược hoạt động cho doanh nghiệp.
                        </span>
                    </p>
                    <p>
                        <span>Đưa ra dự báo kinh doanh sát với thực tế.</span>
                    </p>
                    <p>
                        <span>
                            Nắm rõ các thông tin tài chính ảnh hưởng lớn tới doanh
                            nghiệp.
                        </span>
                    </p>
                    <p>
                        <span>
                            Trong quá trình xây dựng kế hoạch, việc tham khảo ý kiến
                            chuyên gia là điều cần thiết nhưng bạn phải là người đóng
                            góp chính và hiểu tường tận mỗi chi tiết có trong đó. Hãy
                            xem việc lập kế hoạch giống như việc truyền đạt câu chuyện
                            của mình nhằm thuyết phục người đọc đồng hành cùng bạn trên
                            con đường chinh phục mục tiêu kinh doanh.
                        </span>
                    </p>
                    <p>
                        <span>
                            Bạn chỉ có một cơ hội duy nhất để tạo ấn tượng đầu tiên tốt
                            đẹp. Đừng để nó vụt mất. Hãy trình bày một văn bản có tính
                            thuyết phục cao, bố cục đẹp mắt, không mắc lỗi chính tả, ngữ
                            pháp, bao gồm các vấn đề trọng tâm và cuối cùng là chứa các
                            thông tin bổ trợ cần thiết.
                        </span>
                    </p>
                    <p>
                        <span>
                            Bằng kiến thức, kinh nghiệm của mình, Brian Finch - một
                            chuyên gia trong lĩnh vực tư vấn lập kế hoạch kinh doanh và
                            quản lý tài chính - chắc chắn sẽ giúp bạn xây dựng thành
                            công kế hoạch kinh doanh của riêng mình.
                        </span>
                    </p>
                </div>
                {/* <div
                    className="tab-pane fade"
                    id="nav-danhgia"
                    role="tabpanel"
                    aria-labelledby="nav-danhgia-tab"
                >

                </div> */}
                <hr />
                {/* het tab nav-danhgia  */}
            </div>
            {/* het tab-content  */}
        </div>

    )
}

export default ReviewSach
