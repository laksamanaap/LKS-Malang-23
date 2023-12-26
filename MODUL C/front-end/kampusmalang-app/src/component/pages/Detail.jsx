import React from "react";
import polinemaImage from "../../assets/Polinema/ca8aa161cd519118bdcfe27add0f2ce2.png";

export const Detail = () => {
  return (
    <>
      <main>
        <div class="container detail" id="detail">
          <div class="detail-images-wrapper d-flex gap-3">
            <img class="detail-images--1" src={polinemaImage} alt="" />
            <div class="detail-images-wrapper-grid">
              <img class="detail-images--2" src={polinemaImage} alt="" />
              <img class="detail-images--3" src={polinemaImage} alt="" />
              <img class="detail-images--4" src={polinemaImage} alt="" />
              <img class="detail-images--5" src={polinemaImage} alt="" />
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between detail-short-desc">
            <div class="d-flex flex-column gap-2 detail-short-desc-top">
              <span class="detail-short-desc-title">
                Politeknik Negeri Malang
              </span>
              <div class="d-flex flex-row gap-4 align-items-center detail-short-desc-top-wrapper">
                <span>Akreditasi A</span>
                <div class="d-flex justify-content-center align-items-center card-campus card-badge">
                  Politeknik
                </div>
              </div>
            </div>
            <button class="btn btn-primary">Ajukan Pendafataran</button>
          </div>
          <div class="d-flex flex-column gap-4 detail-desc">
            <div class="d-flex flex-column gap-1">
              <span class="detail-desc-title">Tentang Kampus</span>
              <span class="detail-desc-sub">
                Yuk kenalan dengan kampus impian!
              </span>
            </div>
            <span>
              Politeknik Negeri Malang (POLINEMA) merupakan Perguruan Tinggi
              Vokasi Negeri yang terakreditasi A. Pendidikan Vokasi adalah
              pendidikan tinggi Program Diploma yang menyiapkan mahasiswa untuk
              pekerjaan dengan keahlian terapan tertentu. POLINEMA
              menyelenggarakan pendidikan vokasi Program Diploma III, Diploma IV
              dan Program Magister Terapan. POLINEMA didirikan sejak tahun 1982
              dengan nama Program Pendidikan Diploma Bidang Teknik, Fakultas Non
              Gelar Teknologi, Universitas Brawijaya dan pada tahun 2004
              memperoleh status kemandirian menjadi Politeknik Negeri Malang.
              Proses pembelajaran di POLINEMA berorientasi untuk mengembangkan
              hard skill dan soft skill mahasiswa.
            </span>
            <div class="d-flex flex-column gap-2">
              <span class="detail-desc-title">Kontak Kampus</span>
              <span class="d-flex gap-2 detail-contact-item mt-1">
                Website :{" "}
                <div class="detail-contact-item-active">
                  https://www.polinema.ac.id/
                </div>
              </span>
              <span class="d-flex gap-2 detail-contact-item">
                Email :{" "}
                <div class="detail-contact-item-active">
                  https://www.polinema.ac.id/
                </div>
              </span>
              <span class="d-flex gap-2 detail-contact-item">
                Telepon :{" "}
                <div class="detail-contact-item-active">
                  https://www.polinema.ac.id/
                </div>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
