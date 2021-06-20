import React, { Component } from "react";

import axios from "axios";

class Patient extends Component {
  state = {
    patient: {},
    isCreate: false,
  };

  handleId = (id) => {
    axios.get("https://localhost:5001/Patients/" + id).then((response) => {

      let patient = Object.assign({}, response.data);
      patient.id = id;

      this.setState({ patient });
      this.props.onCurrentPatient(patient);

      this.setState({ isCreate: response.data.name !== undefined });
    });
  };

  UpdatePatient = () => {
    let patient = Object.assign({}, this.state.patient);

    axios
      .put("https://localhost:5001/Patients/" + this.state.patient.id, patient)
      .then((response) => {
        console.log("PUT : ", response);
      });
  };

  AddNewPatient = () => {
    let patient = Object.assign({}, this.state.patient);

    axios.post("https://localhost:5001/Patients", patient).then((response) => {
      this.props.onCurrentPatient(patient);
      console.log("POST : ", response);
    });
  };

  render() {
    return (
      <React.Fragment>
        <b>Patient ID Search:</b>
        <input
          className="form-control m-2"
          type="number"
          placeholder="Search by ID"
          onBlur={(e) => this.handleId(e.target.value)}
        ></input>
        
        <br />
        <b>Patient Details:</b>
        <br /><br />

        Health Number:
        <input
          className="form-control m-2"
          type="number"
          placeholder="Please Enter the 5-digit Health Number"
          value={this.state.patient.healthNumber || ""}
          onChange={(e) =>
            this.setState((prevState) => {
              let patient = Object.assign({}, prevState.patient);
              patient.healthNumber = e.target.value;
              return { patient };
            })
          }
        ></input>

        Name:
        <input
          className="form-control m-2"
          type="text"
          placeholder="Please Enter the Patient's Name"
          value={this.state.patient.name || ""}
          onChange={(e) =>
            this.setState((prevState) => {
              let patient = Object.assign({}, prevState.patient);
              patient.name = e.target.value;
              return { patient };
            })
          }
        ></input>

        Date of Birth: 
        <input
          className="form-control m-2"
          type="date"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
          placeholder="Please Enter Date of Birth YYYY-MM-DD"
          value={this.state.patient.dateOfBirth || ""}
          onChange={(e) =>
            this.setState((prevState) => {
              let patient = Object.assign({}, prevState.patient);
              patient.dateOfBirth = e.target.value;
              return { patient };
            })
          }
        ></input>

        Phone:
        <input
          className="form-control m-2"
          type="tel"
          placeholder="(XXX) XXXXXXX"
          value={this.state.patient.phoneNumber || ""}
          onChange={(e) =>
            this.setState((prevState) => {
              let patient = Object.assign({}, prevState.patient);
              patient.phoneNumber = e.target.value;
              return { patient };
            })
          }
        ></input>

        Address:
        <input
          className="form-control m-2"
          type="text"
          placeholder="Please Enter the Current Address"
          value={this.state.patient.address || ""}
          onChange={(e) =>
            this.setState((prevState) => {
              let patient = Object.assign({}, prevState.patient);
              patient.address = e.target.value;
              return { patient };
            })
          }
        ></input>
        <br />

        <button
          type="button"
          className="btn btn-outline-success  m-2 btn-sm"
          disabled={this.state.isCreate}
          onClick={this.AddNewPatient}
        >
          Add New Patient
        </button>
        <button
          type="button"
          class="btn btn-outline-warning m-2 btn-sm"
          disabled={!this.state.isCreate}
          onClick={this.UpdatePatient}
        >
          Update Patient
        </button>
      </React.Fragment>
    );
  }
}

export default Patient;