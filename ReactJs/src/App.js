import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
import Index from './Infor/Index';
import YourCart from './YourCart/YourCart';
import { Routes, Route } from "react-router-dom";
import Login from './Accout/Login';
import Allsp from './AllSp/Allsp';
import SearchCpn from "./Search/KqSearch";
import Dangki from './Accout/dangki';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from './Api-Server/Sach';
import { toast } from 'react-toastify';


function App() {
  const [ketquaTk, setKetquaTk] = useState([]);
  const [sach, setSach] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [checkLg, setCheckLg] = useState(null);


  useEffect(() => {
    getSach();
    getDataLocal();
  }, []);
  const getSach = async () => {
    try {
      let resSach = await axios.get("sach");
      setSach(resSach.data);

    } catch (e) {
      console.log("co loi roi sep oi", e);
    }
  }
  const onAdd = (sach) => {
    const exits = cartItem.find(x => x.id === sach.id);


    if (exits) {
      toast.warning("đã cập nhật số lượng");
      setCartItem(cartItem.map(x => x.id === sach.id ? { ...exits, qty: exits.qty + 1 } : x))
    }
    else {
      toast.success("thêm vào giỏ hàng thành công");
      setCartItem([...cartItem, { ...sach, qty: 1 }])
    }
  }
  const onRemove = (sach) => {
    const exits = cartItem.find(x => x.id === sach.id)
    if (exits.qty === 1) {
      setCartItem([])
      setCartItem(cartItem.filter(x => x.id !== sach.id));
    }
    else {
      setCartItem([])
      toast.warning("đã cập nhật số lượng");
      setCartItem(cartItem.map(x => x.id === sach.id ? { ...exits, qty: exits.qty - 1 } : x))
    }
  }
  const getDataLocal = async () => {
    let check = await localStorage.getItem('checkLogin');
    setCheckLg(check);
  }
  const checkLogin = () => {
    if (checkLg === null) {
      alert("bạn cần đăng nhập để thanh toán")
    }
    else {
      setCartItem([])
      toast.success("thanh toán thành công");
    }
  }
  const ketquaSearch = (item) => {
    if (item) {
      setKetquaTk(item);
    }
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home ketquaSearch={ketquaSearch} />} />
        <Route path="/infor/:id" element={<Index onAdd={onAdd} />} />
        <Route path="/cart" element={<YourCart onAdd={onAdd} onRemove={onRemove} cartItem={cartItem} checkLogin={checkLogin} />} />
        <Route path="/allsp/:type" element={<Allsp />} />
        <Route path="/search" element={<SearchCpn ketquaTk={ketquaTk} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dangki" element={<Dangki />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


    </>

  )
}

export default App;

// vấn đề:
// +chưa truyền được dữ liệu sang cpn tìm kiếm
// + Login render chưa đúng
// + truyền props từ sản phẩm sang giỏ hàng có vấn đề
