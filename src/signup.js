import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; 

function Signup() {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    email: '',
    nickname: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('', formData);

      console.log('회원가입 성공:', response.data);
      alert('회원가입이 성공적으로 완료되었습니다!');
      
      setFormData({
        id: '',
        password: '',
        email: '',
        nickname: ''
      });

    } catch (error) {
      console.error('회원가입 실패:', error.response ? error.response.data : error.message);
      alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  };
  return (
    <div className="signup-container">
      <div className="main-content">
        <h1 className="logo-text">멍냥멍냥</h1>
        <h2 className="sub-text">코쪽이들</h2>
      </div>
      <div className="form-container">
        <h2 className="form-title">회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" id="id" name="id" placeholder="아이디" value = {formData.id} onChange={handleChange}/>
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="비밀번호" value={formData.password} onChange={handleChange}/>
          </div>
          <div className="input-group">
            <input type="email" id="email" name="email" placeholder="이메일" value={formData.email} onChange={handleChange}/>
          </div>
          <div className="input-group">
            <input type="text" id="nickname" name="nickname" placeholder="닉네임" value={formData.nickname} onChange={handleChange}/>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;