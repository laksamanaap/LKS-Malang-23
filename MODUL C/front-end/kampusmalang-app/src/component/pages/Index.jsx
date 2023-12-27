import React, { useEffect, useState } from "react";
import carouselImage1 from "../../assets/Foto Mahasiswa/Mahasiswa 01.jpg";
import carouselImage2 from "../../assets/Foto Mahasiswa/Mahasiswa 02.jpg";
import carouselImage3 from "../../assets/Foto Mahasiswa/Mahasiswa 03.jpg";
import ctaImage from "../../assets/Foto Mahasiswa/Mahasiswa 03.jpg";
import majorityImage1 from "../../assets/teknik-informatika-e1623139188734.jpeg";
import placeholder from "../../assets/placeholder.png";
import campusImage1 from "../../assets/Polinema/ca8aa161cd519118bdcfe27add0f2ce2.png";
import client from "../../utils/router";

export const Index = () => {
  const [campusData, setCampusData] = useState([]);
  const [majorityData, setMajorityData] = useState([]);

  const fetchCampusData = async () => {
    try {
      const response = await client.get("v1/show-all/campus");
      setCampusData(response.data);
    } catch (error) {
      console.error("Error fetching campus data:", error.message);
    }
  };

  const fetchMajorityData = async () => {
    try {
      const response = await client.get("v1/show-all/majority");
      setMajorityData(response.data);
    } catch (error) {
      console.error("Error fetching majority data:", error.message);
    }
  };

  useEffect(() => {
    fetchCampusData();
    fetchMajorityData();
  }, []);

  console.log(campusData);

  const slicedCampusData = campusData.slice(0, 3);
  const slicedMajorityData = majorityData.slice(0, 3);

  console.log(slicedCampusData);
  console.log(slicedMajorityData);

  console.log(majorityData);
  return (
    <>
      <main>
        <div class="container hero" id="hero">
          <div id="heroCarousel" class="carousel slide">
            <div class="carousel-indicators gap-2">
              <li
                data-bs-slide-to="0"
                class="active"
                data-bs-target="#heroCarousel"
                aria-current="true"
                aria-label="Slide 1"
              ></li>
              <li
                data-bs-target="#heroCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></li>
              <li
                data-bs-target="#heroCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></li>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item position-relative active">
                <div class="carouse-inner-text position-absolute">
                  <span>
                    <span class="carouse-inner-text--bold">
                      Persiapkan kuliah{" "}
                    </span>
                    anda dengan{" "}
                    <span class="carouse-inner-text--bold">mudah,</span> Raih{" "}
                    <span class="carouse-inner-text--bold">masa depan</span>{" "}
                    cerah bersama{" "}
                    <span class="carouse-inner-text--bold"> KampusMalang</span>
                  </span>
                </div>
                <img src={carouselImage1} class="d-block w-100 " alt="..." />
              </div>
              <div class="carousel-item">
                <div class="carouse-inner-text position-absolute">
                  <span>
                    <span class="carouse-inner-text--bold">
                      Persiapkan kuliah{" "}
                    </span>
                    anda dengan{" "}
                    <span class="carouse-inner-text--bold">mudah,</span> Raih{" "}
                    <span class="carouse-inner-text--bold">masa depan</span>{" "}
                    cerah bersama{" "}
                    <span class="carouse-inner-text--bold"> KampusMalang</span>
                  </span>
                </div>
                <img src={carouselImage2} class="d-block w-100 " alt="..." />
              </div>
              <div class="carousel-item">
                <div class="carouse-inner-text position-absolute">
                  <span>
                    <span class="carouse-inner-text--bold">
                      Persiapkan kuliah{" "}
                    </span>
                    anda dengan{" "}
                    <span class="carouse-inner-text--bold">mudah,</span> Raih{" "}
                    <span class="carouse-inner-text--bold">masa depan</span>{" "}
                    cerah bersama{" "}
                    <span class="carouse-inner-text--bold"> KampusMalang</span>
                  </span>
                </div>
                <img src={carouselImage3} class="d-block w-100 " alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div class="container campus" id="campus">
          <div class="campus-header d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column gap-1">
              <span class="campus-header--title">
                Mau kuliah di kampus favorit?
              </span>
              <span class="campus-header--sub">
                Temukan kampus di malang yang banyak diminati dengan reputasi
                terbaik!
              </span>
            </div>
            <a type="button" class="btn btn-primary" href="#">
              Temukan kampus lainnya
            </a>
          </div>
          <div class="row">
            {slicedCampusData.map((campus) => (
              <div key={campus.id_campus} className="col-lg-4">
                <div className="card-campus card mt-5 position-relative">
                  {/* Assuming the first image from the array is used */}
                  <img
                    src={
                      campus.image_campus.length > 0
                        ? campus.image_campus[0].icon
                        : placeholder
                    }
                    className="position-relative"
                    alt={campus.name}
                  />
                  <div className="d-flex justify-content-center align-items-center card-campus card-badge">
                    {campus.type}
                  </div>
                  <div className="card-campus card-body d-flex flex-column">
                    <h5 className="card-campus card-title mt-4">
                      {campus.name}
                    </h5>
                    <p className="card-campus card-text">
                      {campus.description}
                      <span className="card-text-dot">......</span>
                    </p>
                    <a
                      href={`detail/${campus.id_campus}`}
                      className="card-campus link"
                    >
                      Lihat Detail
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="container campus" id="campus">
          <div class="campus-header d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column gap-1">
              <span class="campus-header--title">
                Rekomendasi jurusan kuliah terpopuler
              </span>
              <span class="campus-header--sub">
                Temukan beragam jurusan yang paling diminati dan memiliki
                prospek yang baik!
              </span>
            </div>
            <a type="button" class="btn btn-primary" href="#">
              Temukan jurusan lainnya
            </a>
          </div>
          <div class="row">
            {slicedMajorityData.map((majority) => (
              <div key={majority.id_majority} class="col-lg-4">
                <div class="card-campus card mt-5 position-relative">
                  <img
                    src={
                      majority.image_majority.length > 0
                        ? majority.image_majority[0].icon
                        : placeholder
                    }
                    class="position-relative"
                    alt={majority.name}
                  />
                  <div class="d-flex justify-content-center align-items-center card-campus card-badge">
                    {majority.type}
                  </div>
                  <div class="card-campus card-body d-flex flex-column">
                    <h5 class="card-campus card-title mt-4">{majority.name}</h5>
                    <p class="card-campus card-text">
                      {majority.description}
                      <span class="card-text-dot">......</span>
                    </p>
                    <a href="#" class="card-campus link">
                      Lihat Detail
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="container cta" id="CTA">
          <div class="row cta-wrapper">
            <div class="cta-left col-lg-6 col-md-12">
              <div class="d-flex flex-column gap-4 cta-top-wrapper">
                <span class="cta-text">
                  Daftar sekarang dan jadilah bagian dari prestasi di kota
                  pendidikan ini!
                </span>
                <button class="btn btn-secondary">
                  Daftar ke perguruan tinggi
                </button>
              </div>
            </div>
            <div class="cta-right col-lg-6 col-md-12">
              <img
                src={ctaImage}
                class="d-none d-sm-block img-responsive"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
