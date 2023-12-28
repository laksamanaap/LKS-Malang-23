import React, { useState, useEffect } from "react";
import client from "../../utils/router";
import placeholder from "../../assets/placeholder.png";

export const AllMajority = () => {
  const [majorityData, setMajorityData] = useState([]);

  const fetchMajorityData = async () => {
    try {
      const response = await client.get("v1/show-all/majority");
      setMajorityData(response.data);
    } catch (error) {
      console.error("Error fetching majority data:", error.message);
    }
  };

  useEffect(() => {
    fetchMajorityData();
  }, []);

  console.log(majorityData);

  return (
    <>
      <div className="container" id="campus">
        <h1>Daftar Jurusan </h1>
        <div class="row">
          {majorityData.map((majority) => (
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
                  <a
                    href={`/detail-majority/${majority.id_majority}`}
                    class="card-campus link"
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
