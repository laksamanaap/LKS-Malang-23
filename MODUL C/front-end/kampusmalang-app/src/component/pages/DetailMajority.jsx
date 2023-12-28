import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import majorityImage1 from "../../assets/teknik-informatika-e1623139188734.jpeg";
import placeholder from "../../assets/placeholder.png";
import client from "../../utils/router";

export const DetailMajority = () => {
  const { id } = useParams();
  const [majorityDetailData, setMajorityDetailData] = useState({});

  const fetchMajorityDetail = async () => {
    try {
      const response = await client.get(`v2/show-majority/${id}`);
      console.log(response.data);
      setMajorityDetailData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMajorityDetail();
  }, [id]);

  console.log(majorityDetailData);

  const { type, name, description, image_majority } = majorityDetailData;

  return (
    <div>
      <main>
        <div class="container detail" id="detail">
          <div class="w-100 d-flex gap-3">
            <img
              class="detail-images--majority"
              src={
                image_majority?.length > 0
                  ? image_majority[0].icon
                  : placeholder
              }
              alt=""
            />
          </div>
          <div class="d-flex align-items-center justify-content-between detail-short-desc">
            <div class="d-flex flex-column gap-2 detail-short-desc-top">
              <span class="detail-short-desc-title">{name}</span>
              <div class="d-flex flex-row gap-4 align-items-center detail-short-desc-top-wrapper">
                <div class="d-flex justify-content-center align-items-center card-campus card-badge">
                  {type}
                </div>
              </div>
            </div>
            {/* <button class="btn btn-primary">Ajukan Pendafataran</button> */}
          </div>
          <div class="d-flex flex-column gap-4 detail-desc">
            <div class="d-flex flex-column gap-1">
              <span class="detail-desc-title">Tentang Jurusan</span>
              <span class="detail-desc-sub">
                Yuk kenalan dengan jurusan impian!
              </span>
            </div>
            <span>{description}</span>
          </div>
        </div>
      </main>
    </div>
  );
};
