import React, { useState, useEffect } from "react";
import client from "../../utils/router";

export const Pengajuan = () => {
  const [campusValidationData, setCampusValidationData] = useState({});

  const fetchCampusValidation = async () => {
    try {
      const response = await client.get("v1/show-campus-validation");
      // console.log(response?.data);
      setCampusValidationData(response?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchCampusValidation();
  }, []);

  console.log(campusValidationData);

  return (
    <div>
      <main id="submission">
        <div class="container submission">
          <h1>Pengajuan Daftar</h1>
          <div class="row gap-5 mt-5">
            {campusValidationData?.length > 0 ? (
              campusValidationData.map((campusValidation, index) => {
                console.log(campusValidation);
                return (
                  <div class="card" key={index}>
                    <div class="card-body">
                      <span class="card-status d-flex align-items-center gap-2">
                        Status :{" "}
                        {campusValidation.status === 0 && (
                          <span class="card-status info">Pending</span>
                        )}
                        {campusValidation.status === 1 && (
                          <span class="card-status success">Diterima</span>
                        )}
                        {campusValidation.status === 2 && (
                          <span class="card-status rejected">Ditolak</span>
                        )}
                      </span>
                      <span class="card-status d-flex align-items-center gap-2 mt-2">
                        Kampus : {campusValidation?.campus.name}
                      </span>
                      <span class="card-status d-flex align-items-center gap-2 mt-2">
                        Fakultas : {campusValidation?.faculty.name}
                      </span>
                      <span class="card-status d-flex align-items-center gap-2 mt-2">
                        Biaya : {campusValidation?.campus.biaya}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="card">
                <div className="card-body">
                  Kamu belum melakukan pendaftaran!
                  <br />
                  <span className="mt-3">
                    Segera cari kampus impianmu disini!
                  </span>
                  <a className="btn btn-primary mt-3" href="/all-campus">
                    Cari Kampus
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
