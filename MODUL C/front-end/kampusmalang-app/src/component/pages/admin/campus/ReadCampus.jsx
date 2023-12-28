import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../../../utils/router";
import placeholder from "../../../../assets/placeholder.png";

export const ReadCampus = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [campusDetailData, setCampusDetailData] = useState({
    faculty: [],
    majority: [],
    image_campus: [],
  });

  const fetchCampusDetail = async () => {
    try {
      const response = await client.get(`v2/show-campus/${id}`);
      console.log(response.data);
      setCampusDetailData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchCampusDetail();
  }, [id]);

  const {
    id_campus,
    type,
    name,
    description,
    accreditation,
    website,
    email,
    biaya,
    phone,
    image_campus,
  } = campusDetailData;

  return (
    <>
      <div className="container">
        <div style={{ marginLeft: "200px", marginTop: "100px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 style={{ marginBottom: "20px" }}>Read campus id ({id})</h1>
          </div>
          <div class="container detail admin-read mb-5" id="detail">
            <div class="detail-images-wrapper d-flex gap-3">
              <img
                class="detail-images--1"
                src={
                  image_campus.length > 0 ? image_campus[0].icon : placeholder
                }
                alt=""
              />
              <div className="detail-images-wrapper-grid">
                {image_campus.length > 0 ? (
                  image_campus
                    .slice(1, 5)
                    .map((image, index) => (
                      <img
                        key={index}
                        className={`detail-images--${index + 2}`}
                        src={image.icon.length > 0 ? image.icon : placeholder}
                        alt=""
                      />
                    ))
                ) : (
                  <>
                    <img src={placeholder} alt="" />
                    <img src={placeholder} alt="" />
                    <img src={placeholder} alt="" />
                    <img src={placeholder} alt="" />
                  </>
                )}
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between detail-short-desc">
              <div class="d-flex flex-column gap-2 detail-short-desc-top">
                <span class="detail-short-desc-title">{name ?? "-"}</span>
                <div class="d-flex flex-row gap-4 align-items-center detail-short-desc-top-wrapper">
                  <span>Akreditasi {accreditation ?? "-"}</span>
                  <div class="d-flex justify-content-center align-items-center card-campus card-badge">
                    {type ?? "-"}
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column gap-4 detail-desc">
              <div className="row">
                <div className="col-lg-6">
                  <div class="d-flex flex-column gap-1">
                    <span class="detail-desc-title">Deskripsi Kampus</span>
                    <span>{description ?? "-"}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="d-flex flex-column gap-2">
                    <span class="detail-desc-title">Kontak Kampus</span>
                    <span class="d-flex gap-2 detail-contact-item mt-1">
                      Website :{" "}
                      <div class="detail-contact-item-active">{website}</div>
                    </span>
                    <span class="d-flex gap-2 detail-contact-item">
                      Email :{" "}
                      <div class="detail-contact-item-active">{email}</div>
                    </span>
                    <span class="d-flex gap-2 detail-contact-item">
                      Telepon :{" "}
                      <div class="detail-contact-item-active">{phone}</div>
                    </span>
                    <span class="d-flex gap-2 detail-contact-item">
                      Biaya :{" "}
                      <div class="detail-contact-item-active">{biaya}</div>
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <span className="detail-desc-title">Fakultas</span>
                  {campusDetailData.faculty.length > 0 &&
                    campusDetailData?.faculty.map((faculty, index) => (
                      <div key={index} className="card mb-3 mt-3">
                        <div className="card-body d-flex justify-content-between">
                          <div className="card-text">{faculty.name}</div>
                          <div className="card-text">{faculty.description}</div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="col-lg-6">
                  <span className="detail-desc-title">Jurusan </span>
                  {campusDetailData.majority.length > 0 &&
                    campusDetailData?.majority.map((majority, index) => (
                      <div key={index} className="card mb-3 mt-3">
                        <div className="card-body d-flex justify-content-between">
                          <div className="card-text">{majority.name}</div>
                          <div className="card-text">
                            {majority.description}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
