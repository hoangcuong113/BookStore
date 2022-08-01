import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../Api-Server/Sach';

function Search(props) {
    let { kqSearch } = props;
    const [sach, setSach] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getSach();

    }, []);

    const getSach = async () => {
        try {
            let resSach = await axios.get("sach");
            setSach(resSach.data);

        } catch (e) {
            console.log("co loi roi sep oi", e);
        }
    }
    let kqua = '';
    const handleSearch = () => {
        if (sach) {
            kqua = sach.filter(item => item.title.toLowerCase().includes(search.toLocaleLowerCase()));
        }
        kqSearch(kqua);

    }
    return (
        <form className="form-inline ml-auto my-2 my-lg-0 mr-3">
            <div className="input-group" style={{ width: 520 }}>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    placeholder="Nhập sách cần tìm kiếm..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="input-group-append">
                    {search === "" && <button
                        type="button"
                        className="btn"
                        style={{ backgroundColor: "#1196cf ", color: "white " }}

                    >
                        Tìm Kiếm
                    </button>}
                    {search !== "" && <button
                        type="button"
                        className="btn"
                        style={{ backgroundColor: "#1196cf ", color: "white " }}
                        onClick={handleSearch}
                    >
                        <Link to="/search" style={{ textDecoration: "none", color: "white" }} > Tìm Kiếm</Link>
                    </button>}

                </div>
            </div>
        </form>
    )
}

export default Search
