import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    email: '',
    nickname: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/Signup', formData);
      console.log('회원가입 성공:', res.data);
      alert('회원가입이 성공적으로 완료되었습니다!');
      setFormData({ id: '', password: '', email: '', nickname: '' });
    } catch (err) {
      alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  };


  return (
    <div className="signup-container">
      <div className="main-content">
        <h1 className="logo-text">멍냥멍냥</h1>
        <p className="sub-text">코쪽이들</p>
      </div>
      <div className="form-container">
        <h2 className="form-title">회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="id"
              placeholder="아이디"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="sign-in-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
