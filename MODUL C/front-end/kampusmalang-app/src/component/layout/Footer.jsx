import React from "react";
import Logo from "../../assets/Logo KM.png";

export const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-wrapper">
          <div className="container d-flex justify-content-between">
            <div className="d-flex flex-column gap-3 footer-wrapper-left">
              <img src={Logo} width="130px" alt="" />
              <span className="footer-wrapper-left-text">
                Temukan lebih dari 100 rekomendasi kampus di Malang, lengkap
                dengan info jurusan sesuai minat dan bakat, biaya, hingga
                prospek karier
              </span>
            </div>
            <div className="d-flex flex-row gap-5">
              <div className="d-flex flex-column gap-3">
                <span className="footer-wrapper-right-title">Menu</span>
                <a href="" className="footer-wrapper-right-sub">
                  Info Kampus
                </a>
                <a href="" className="footer-wrapper-right-sub">
                  Info Jurusan
                </a>
                <a href="" className="footer-wrapper-right-sub">
                  Daftar Sekarang
                </a>
              </div>
              <div className="d-flex flex-column gap-3">
                <span className="footer-wrapper-right-title">Sosial Media</span>
                <a href="" target="_blank" className="footer-wrapper-right-sub">
                  Instagram
                </a>
                <a href="" target="_blank" className="footer-wrapper-right-sub">
                  Facebook
                </a>
                <a href="" target="_blank" className="footer-wrapper-right-sub">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom d-flex justify-content-center align-items-center flex-column gap-1 mb-4 mt-4">
            <span className="">
              KampusMalang<span className="card-text-dot">.</span>com
            </span>
            <span className="">
              © 2023 PT Sentra Vidya Utama
              <span className="card-text-dot">.</span> Hak cipta dilindungi
              Undang-Undang
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
