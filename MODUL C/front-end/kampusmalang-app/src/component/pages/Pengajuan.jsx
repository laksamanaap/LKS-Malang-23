import React from "react";

export const Pengajuan = () => {
  return (
    <div>
      <main id="submission">
        <div class="container submission">
          <div class="row gap-5">
            <div class="card">
              <div class="card-body">
                <span class="card-status d-flex align-items-center gap-2">
                  Status : <span class="card-status success">Diterima</span>
                </span>
                <span class="card-status d-flex align-items-center gap-2 mt-2">
                  Kampus : Politeknik Negeri Malang
                </span>
                <span class="card-status d-flex align-items-center gap-2 mt-2">
                  Fakultas : Teknik
                </span>
                <span class="card-status d-flex align-items-center gap-2 mt-2">
                  Jurusan : Teknik Informatika
                </span>
                <span class="card-status d-flex align-items-center gap-2 mt-2">
                  Biaya : Rp300.000
                </span>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <span class="card-status d-flex align-items-center gap-2">
                  Status : <span class="card-status rejected">Ditolak</span>
                </span>
                <span class="card-status d-flex align-items-center gap-2 mt-2">
                  Kampus : Politeknik Negeri Malang
                </span>
                <span class="card-status d-flex align-items-center gap-2 mt-2">
                  Fakultas : Teknik
                </span>
                <span class="card-status d-flex align-items-center gap-2 mt-2">
                  Jurusan : Teknik Informatika
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
