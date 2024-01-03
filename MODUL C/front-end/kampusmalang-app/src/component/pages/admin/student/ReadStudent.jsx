import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../../../utils/router";

export const ReadStudent = () => {
  const { id } = useParams();
  console.log(id);

  const [studentData, setStudentData] = useState([]);

  const fetchStudentData = async () => {
    try {
      const response = await client.get(`v1/show-student/${id}`);
      setStudentData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [id]);

  console.log(studentData);

  return (
    <div className="container">
      <div style={{ marginLeft: "200px", marginTop: "100px" }}>
        <div className="d-flex align-items-center justify-content-between">
          <h1 style={{ marginBottom: "20px" }}>Read Student id {id}</h1>
        </div>
        <div className="container admin-read mb-4">
          <form>
            <h3>Student Profile</h3>
            {studentData.length > 0
              ? studentData.map((student, index) => (
                  <>
                    <div className="form-group mt-4">
                      <label className="mb-2">First name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.user.first_name}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label className="mb-2">Last name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.user.last_name}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label className="mb-2">Tanggal lahir</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.user.tanggal_lahir}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label className="mb-2">Email</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.user.email}
                      />
                    </div>
                  </>
                ))
              : "-"}
          </form>

          <form className="mt-5">
            <h3>Campus Profile</h3>
            {studentData.length > 0
              ? studentData.map((student, index) => (
                  <>
                    <div className="form-group mt-4">
                      <label className="mb-2">Campus type</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.campus.type}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label className="mb-2">Campus name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.campus.name}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label className="mb-2">Campus description</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.campus.description}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label className="mb-2">Campus accreditation</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.campus.accreditation}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label className="mb-2">Campus website</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.campus.website}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label className="mb-2">Campus email</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.campus.email}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label className="mb-2">Campus phone</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.campus.phone}
                      />
                    </div>
                  </>
                ))
              : "-"}
          </form>

          <form className="mt-5">
            <h3>Campus Profile</h3>
            {studentData.length > 0
              ? studentData.map((student, index) => (
                  <>
                    <div className="form-group mt-4">
                      <label className="mb-2">Faculty name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.faculty.name}
                      />
                    </div>

                    <div className="form-group mt-4">
                      <label className="mb-2">Faculty description</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={student.faculty.description}
                      />
                    </div>
                  </>
                ))
              : "-"}
          </form>
        </div>
      </div>
    </div>
  );
};
