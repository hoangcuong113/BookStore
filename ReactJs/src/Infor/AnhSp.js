import React from 'react';
import { Link } from 'react-router-dom';

function AnhSp(props) {
    let { sachMoi, id } = props;
    const invoid = sachMoi.find(sachMoi => sachMoi.id === id);
    return (<>

        <div className="col-md-4 khoianh">
            <div className="anhto mb-4">
                <Link
                    className="active"
                    to="#"
                    data-fancybox="thumb-img"
                >
                    <img
                        className="product-image"
                        src={invoid && invoid.image}
                        alt="lap-ke-hoach-kinh-doanh-hieu-qua-mt"
                        style={{ width: "100%", minHeight: "360px" }}
                    />
                </Link>

            </div>

        </div>
    </>
    )
}

export default AnhSp
