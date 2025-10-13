import React, { useState } from 'react';
import axios from 'axios';
import './Signin.css';

function Signin() {
  const [form, setForm] = useState({ id: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/auth/signin', {
        id: form.id,
        password: form.password,
      });

      if (res.data?.token) localStorage.setItem('token', res.data.token);

      window.location.href = '/main.js';
    } catch (err) {
      alert('아이디 또는 비밀번호를 확인해 주세요.');
    }
  };

  return (
    <div className="signin-container">
      <div className="main-content">
        <h1 className="logo-text">멍냥멍냥</h1>
        <h2 className="sub-text">코쪽이들</h2>
      </div>

      <div className="form-container">
        <h2 className="form-title">로그인</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디"
              value={form.id}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="sign-in-button"
            disabled={!form.id || !form.password}
          >
            Login
          </button>
          <p className="signup-link">
            <a href="/signup">계정 만들기</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
