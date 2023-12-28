import React, { useEffect, useState } from "react";
import client from "../../utils/router";
import placeholder from "../../assets/placeholder.png";

export const AllCampus = () => {
  const [campusData, setCampusData] = useState([]);

  const fetchCampusData = async () => {
    try {
      const response = await client.get("v1/show-all/campus");
      setCampusData(response.data);
    } catch (error) {
      console.error("Error fetching campus data:", error.message);
    }
  };

  useEffect(() => {
    fetchCampusData();
  }, []);

  console.log(campusData);

  return (
    <>
      <div className="container" id="campus">
        <h1>Daftar Kampus </h1>
        <div className="row">
          {campusData.map((campus) => (
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
                  <h5 className="card-campus card-title mt-4">{campus.name}</h5>
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
    </>
  );
};
