import React, { useState } from 'react';
import './NewFamily.css';
import logoBlue from './img/logo_blue.png';
import logoGray from './img/logo_gray.png';
import githubpic from './img/github.png';
import reactpic from './img/react.png';
import djangopic from './img/django.png';

export default function NewFamily() {
  const [form, setForm] = useState({
    name: '',
    type: '강아지',
    breed: '',
    birth: '',
    gender: '수컷',
    neutered: '완료',
    weight: '',
    activity: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('새로운 반려동물이 등록되었습니다!');
  };

  return (
    <div className="newfamily-page">
      {/* Header */}
      <header className="nav fixed">
        <div className="nav-inner">
          <div className="brand">
            <img src={logoBlue} alt="paw logo" className="paw" />
            <span className="brand-text">멍냥멍냥</span>
          </div>

          <nav className="menu">
            <a href="#activity">활동</a>
            <a href="#health">건강</a>
            <a href="#calendar">캘린더</a>
            <a href="#community">커뮤니티</a>
          </nav>
          <nav className="menulink">
            <a href="/signup">회원가입</a>
            <a href="/signin">로그인</a>
          </nav>
        </div>
      </header>

      {/* Main Form */}
      <main className="newfamily-form-container">
        <h1>새로운 가족을 소개해주세요.</h1>
        <p>기본 정보를 입력해주세요.</p>
        <form className="newfamily-form" onSubmit={handleSubmit}>
          {/* 프로필 이미지 */}
          <div className="profile-upload">
            <div className="profile-pic">+</div>
          </div>

          {/* 기본 정보 */}
          <section>
            <h2>기본 정보</h2>
            <div className="form-group">
              <label>이름</label>
              <input 
                type="text" 
                name="name" 
                placeholder="반려동물의 이름을 등록해주세요."
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group radio-group">
              <label>종류</label>
              <label>
                <input type="radio" name="type" value="강아지" checked={form.type==='강아지'} onChange={handleChange} /> 강아지
              </label>
              <label>
                <input type="radio" name="type" value="고양이" checked={form.type==='고양이'} onChange={handleChange} /> 고양이
              </label>
            </div>
            <div className="form-group">
              <label>품종</label>
              <input type="text" name="breed" placeholder="품종을 입력해주세요." value={form.breed} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>생년월일</label>
              <input type="date" name="birth" value={form.birth} onChange={handleChange} />
            </div>
          </section>

          {/* 건강 정보 */}
          <section>
            <h2>건강 정보</h2>
            <div className="form-group radio-group">
              <label>성별</label>
              <label>
                <input type="radio" name="gender" value="수컷" checked={form.gender==='수컷'} onChange={handleChange} /> 수컷
              </label>
              <label>
                <input type="radio" name="gender" value="암컷" checked={form.gender==='암컷'} onChange={handleChange} /> 암컷
              </label>
            </div>
            <div className="form-group radio-group">
              <label>중성화 여부</label>
              <label>
                <input type="radio" name="neutered" value="완료" checked={form.neutered==='완료'} onChange={handleChange} /> 완료
              </label>
              <label>
                <input type="radio" name="neutered" value="미완료" checked={form.neutered==='미완료'} onChange={handleChange} /> 미완료
              </label>
            </div>
            <div className="form-group">
              <label>체중 (kg)</label>
              <input type="number" step="0.1" name="weight" placeholder="예: 8.2" value={form.weight} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>하루 목표 활동량 (분)</label>
              <input type="number" name="activity" placeholder="예: 45" value={form.activity} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>특이사항 (선택)</label>
              <input type="text" name="notes" placeholder="알레르기, 기존 질병 등 특별한 정보가 있다면 알려주세요." value={form.notes} onChange={handleChange} />
            </div>
          </section>

          <button type="submit" className="submit-btn">등록 완료</button>
        </form>
      </main>

      {/* Footer */}
      <footer className="footer fixed">
        <div className="footer-inner">
          <div className="logo-row">
            <div className="logo-stack">
              <img src={logoGray} alt="" className="paw-bg" aria-hidden />
              <span className="wordmark">KoJJOK</span>
            </div>
            <div className="grid">
              {/* 팀원 정보 생략 (Home.js 참조) */}
            </div>
            <div className="tech-stack">
              <h3>TECH STACK</h3>
              <img src={reactpic} alt="React Logo" className="react-icon" />
              <img src={djangopic} alt="Django Logo" className="django-icon" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
