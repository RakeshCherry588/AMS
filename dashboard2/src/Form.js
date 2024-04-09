import { useState } from "react";
import "./App.css";
function Form() {
  const [formData, setFormData] = useState({
    type: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function submitfun(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = {
      type: data.get("type"),
      startDate: data.get("startdate"),
      endDate: data.get("enddate"),
      reason: data.get("reason"),
    };
    console.log(obj);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error:", error));

    let dialog = document.getElementById("dialog");
    dialog.close();
    document.body.classList.remove("modal-opened");

    setFormData({
      type: "",
      startDate: "",
      endDate: "",
      reason: "",
    });
  }

  return (
    <div className="App">
      <button
        className="btn btn-primary mx-5 mt-3"
        onClick={() => {
          let dialog = document.getElementById("dialog");
          dialog.showModal();
          document.body.classList.add("modal-opened");
        }}
      >
        Request for leave
      </button>
      <dialog id="dialog">
        <div className="d-flex justify-content-between align-content-baseline">
          <p>Request for leave</p>
          <button
            onClick={() => {
              let dialog = document.getElementById("dialog");
              dialog.close();
              document.body.classList.remove("modal-opened");
            }}
            id="closebtn"
          >
            X
          </button>
        </div>
        <form onSubmit={(e) => submitfun(e)} id="formdata">
          <div className="m-3 row">
            <label className="col-3">Type :</label>
            <select
              className="form-select form-control col-9"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3 row">
            <label htmlFor="startdate" className="col-3 col-form-label">
              Start Date:
            </label>
            <div className="col-9">
              <input
                type="date"
                className="form-control"
                id="startdate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="enddate" className="col-3 col-form-label">
              End Date:
            </label>
            <div className="col-9">
              <input
                type="date"
                className="form-control"
                id="enddate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-3 col-form-label">Reason : </label>
            <div className="col-9">
              <textarea
                rows="3"
                style={{ width: "100%" }}
                required
                placeholder="Reason for leave"
                className="form-control"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" id="subbtn">
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default Form;
