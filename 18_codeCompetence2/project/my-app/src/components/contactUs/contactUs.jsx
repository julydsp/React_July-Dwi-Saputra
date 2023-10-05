import { useState } from "react";
import "./contactUs.css";

export default function ContactUs({ settingData }) {
  const [contactUs, setContactUs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    ProblemMessage: "",
  });
  const [alertMessage, setAlertMessage] = useState({
    firstNameMessage : "none",
  })
  const handleFirstNameChange = (event) => {
    const newFirstName = event.target.value;
    setContactUs((prevContactUs) => ({
      ...prevContactUs,
      firstName: newFirstName,

    }))
    const symbolPatern = /[@#${}/]/;;
     if (symbolPatern.test(newFirstName)) {
       // Mengubah nilai firstNameMessage menjadi "block" jika panjang nama melebihi 10 karakter
       setAlertMessage((prevAlertMessage) => ({
         ...prevAlertMessage,
         firstNameMessage: "block",
       }));
     } else {
       // Mengubah nilai firstNameMessage menjadi "none" jika panjang nama tidak melebihi 10 karakter
       setAlertMessage((prevAlertMessage) => ({
         ...prevAlertMessage,
         firstNameMessage: "none",
       }));
     }
  };
  const handleLastNameChange = (event) => {
    const newLasttName = event.target.value;
    setContactUs((prevContactUs) => ({
      ...prevContactUs,
      lastName: newLasttName,
    }));
  };
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setContactUs((prevContactUs) => ({
      ...prevContactUs,
      email: newEmail,
    }));
  };
  const handleProblemMessageChange = (event) => {
    const newProblemMessage = event.target.value;
    setContactUs((prevContactUs) => ({
      ...prevContactUs,
      ProblemMessage: newProblemMessage,
    }));
  };
  const handleSubmitContactUs = (event) => {
    if (setContactUs.firstName !== "" && setContactUs.lastName !== "") {
      alert(`
            Pesan Berhasil Tersimpan
            Nama Depan: ${contactUs.firstName}
            Nama Belakang: ${contactUs.lastName}
            Email: ${contactUs.email}
            Pesan Masalah: ${contactUs.ProblemMessage}
            `);
    }

    event.preventDefault();
    settingData((prevData) => [
      ...prevData,
      {
        firstName: contactUs.firstName,
        lastName: contactUs.lastName,
        email: contactUs.email,
        ProblemMessage: contactUs.ProblemMessage,
      },
    ]);
  };
  return (
    <div className="contact-us">
      <div className="card" style={{ width: "18rem", borderStyle: "none" }}>
        <div className="card-body">
          <h5 className="card-title">Contact us</h5>
          <p className="card-text">
            ada yang bisa kami bantu ? lengkapi form disamping untuk menemukan
            solusi dari masalah yang anda temui di website kami
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmitContactUs}
        className="form-input"
        id="formInput"
        method="post"
      >
        <div className="mb-3">
          <div className="form-input-name">
            <div className="first-name">
              <label htmlFor="card-text" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                value={contactUs.firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="last-name">
              <label htmlFor="card-text" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                value={contactUs.lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>
          <div
            id="form-input-name"
            className="form-text"
            style={{ display: alertMessage.firstNameMessage }}
          >
            symbol can't use in this field!
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInpuEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={contactUs.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Apa yang bisa kami bantu ?
          </label>
          <textarea
            className="form-control"
            id="Textarea"
            rows="3"
            value={contactUs.ProblemMessage}
            onChange={handleProblemMessageChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
